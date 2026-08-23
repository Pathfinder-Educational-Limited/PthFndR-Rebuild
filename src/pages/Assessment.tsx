import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Loader2, Mail, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

type Step =
  | 'intro'
  | 'q1' | 'q2' | 'q3' | 'q4'
  | 'age'
  | 'lead'
  | 'guardian'
  | 'too-young'
  | 'calculating'
  | 'result';

type Pattern = 'The Explorer' | 'The Spark' | 'The Builder' | 'The Regrouper' | 'The Pathfinder';

export default function Assessment() {
  const [step, setStep] = useState<Step>('intro');
  const [scores, setScores] = useState({
    identity: 0,
    character: 0,
    competence: 0,
    impact: 0,
  });
  const [leadData, setLeadData] = useState({ name: '', email: '' });
  const [guardianData, setGuardianData] = useState({
    minorName: '',
    minorEmail: '',
    guardianName: '',
    guardianEmail: '',
  });
  const [pattern, setPattern] = useState<Pattern | null>(null);
  const [awaitingGuardianConsent, setAwaitingGuardianConsent] = useState(false);

  const handleScore = (domain: keyof typeof scores, value: number) => {
    setScores((prev) => ({ ...prev, [domain]: value }));
    const nextSteps: Record<string, Step> = {
      q1: 'q2',
      q2: 'q3',
      q3: 'q4',
      q4: 'age',
    };
    setTimeout(() => setStep(nextSteps[step as string]), 400);
  };

  // Finds the first weak domain, in Trapezium order (Identity -> Character -> Competence ->
  // Impact) — a gap in an earlier layer matters more than strength in a later one, matching
  // the real KNOW -> BE -> DO structure. Strong across all four = ready for what's next.
  const calculatePattern = (): Pattern => {
    const { identity: i, character: c, competence: comp, impact: imp } = scores;

    if (i <= 3) return 'The Explorer';       // Ready to discover
    if (c <= 3) return 'The Regrouper';      // Finding the way back
    if (comp <= 3) return 'The Builder';     // Learning by doing
    if (imp <= 3) return 'The Spark';        // Talent not yet lit
    return 'The Pathfinder';                 // Ready for what's next
  };

  // 18+ pathway: save directly, same as before.
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('calculating');

    const result = calculatePattern();
    const start = Date.now();

    try {
      await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadData.name,
          email: leadData.email,
          pattern: result,
          scores,
        }),
      });
    } catch (err) {
      console.warn('[Assessment] Failed to save lead:', err);
    }

    const elapsed = Date.now() - start;
    const remaining = Math.max(0, 1200 - elapsed);
    setTimeout(() => {
      setPattern(result);
      setAwaitingGuardianConsent(false);
      setStep('result');
    }, remaining);
  };

  // 13-17 pathway: request guardian consent, don't save/activate the young
  // person's record yet. They still get to see their own result on screen —
  // what's gated is us keeping their details or getting in touch.
  const handleGuardianSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('calculating');

    const result = calculatePattern();
    const start = Date.now();

    try {
      await fetch('/api/consent/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          minorName: guardianData.minorName,
          minorEmail: guardianData.minorEmail,
          guardianName: guardianData.guardianName,
          guardianEmail: guardianData.guardianEmail,
          source: 'assessment',
          payload: { pattern: result, scores },
        }),
      });
    } catch (err) {
      console.warn('[Assessment] Failed to send guardian consent request:', err);
    }

    const elapsed = Date.now() - start;
    const remaining = Math.max(0, 1200 - elapsed);
    setTimeout(() => {
      setPattern(result);
      setAwaitingGuardianConsent(true);
      setStep('result');
    }, remaining);
  };

  const renderLikert = (domain: keyof typeof scores) => (
    <div className="mt-8 space-y-4">
      {[
        { val: 1, label: 'Strongly Disagree' },
        { val: 2, label: 'Disagree' },
        { val: 3, label: 'Neutral' },
        { val: 4, label: 'Agree' },
        { val: 5, label: 'Strongly Agree' },
      ].map((option) => (
        <button
          key={option.val}
          onClick={() => handleScore(domain, option.val)}
          className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all flex items-center justify-between group
            ${scores[domain] === option.val
              ? 'border-pth-cyan bg-pth-cyan/5'
              : 'border-slate-200 hover:border-pth-cyan/50 hover:bg-slate-50'}`}
        >
          <span className="font-medium text-slate-700 group-hover:text-pth-navy">{option.label}</span>
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
            ${scores[domain] === option.val ? 'border-pth-cyan' : 'border-slate-300'}`}>
            {scores[domain] === option.val && <div className="w-3 h-3 bg-pth-cyan rounded-full" />}
          </div>
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <SEO
        title="Free Assessment | PthFndR"
        description="Take the free 2-minute assessment to find your starting point — see your strengths and what to focus on next."
      />

      <div className="w-full max-w-2xl relative">
        <AnimatePresence mode="wait">

          {/* INTRO */}
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-100 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-pth-cyan/10 rounded-full blur-3xl"></div>

              <span className="inline-block py-1 px-3 rounded-full bg-pth-cyan/10 text-pth-cyan font-bold text-xs tracking-wider uppercase mb-6">
                Free · 2 minutes
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-pth-navy mb-6">
                Find your starting point
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Answer 4 quick questions to see where your strengths already are — and exactly what to focus on next to move forward.
              </p>
              <button
                onClick={() => setStep('q1')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-pth-gradient text-pth-navy font-bold hover:opacity-90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Find Your Path <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* Q1: IDENTITY */}
          {step === 'q1' && (
            <motion.div
              key="q1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-10 rounded-full bg-identity-blue/10 text-identity-blue flex items-center justify-center font-bold">1</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Direction</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-pth-navy leading-tight">
                "I have a good idea of what I'm good at and what kind of work I want to do."
              </h2>
              {renderLikert('identity')}
            </motion.div>
          )}

          {/* Q2: CHARACTER */}
          {step === 'q2' && (
            <motion.div
              key="q2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-10 rounded-full bg-character-green/10 text-character-green flex items-center justify-center font-bold">2</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Staying power</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-pth-navy leading-tight">
                "When things get hard or don't go to plan, I keep going instead of giving up."
              </h2>
              {renderLikert('character')}
            </motion.div>
          )}

          {/* Q3: COMPETENCE */}
          {step === 'q3' && (
            <motion.div
              key="q3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-10 rounded-full bg-competence-orange/10 text-competence-orange flex items-center justify-center font-bold">3</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Skills</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-pth-navy leading-tight">
                "I've got real, practical skills I could show or prove to someone — not just things I've studied."
              </h2>
              {renderLikert('competence')}
            </motion.div>
          )}

          {/* Q4: IMPACT */}
          {step === 'q4' && (
            <motion.div
              key="q4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-10 rounded-full bg-impact-purple/10 text-impact-purple flex items-center justify-center font-bold">4</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Real-world chances</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-pth-navy leading-tight">
                "I've had real chances to actually use my skills on something that mattered — a project, a placement, a job."
              </h2>
              {renderLikert('impact')}
            </motion.div>
          )}

          {/* AGE CHECK */}
          {step === 'age' && (
            <motion.div
              key="age"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-100 text-center"
            >
              <div className="w-14 h-14 bg-pth-cyan/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-7 h-7 text-pth-cyan" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-pth-navy mb-4">
                One quick thing before we show your results
              </h2>
              <p className="text-slate-600 mb-10 max-w-md mx-auto">
                PthFndR is built for 16-24 year olds. For under-18s, we involve a parent or guardian — it's part of how we keep things safe, and something schools and local authorities we work with can rely on.
              </p>
              <div className="space-y-3 max-w-sm mx-auto">
                <button
                  onClick={() => setStep('lead')}
                  className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 hover:border-pth-cyan hover:bg-pth-cyan/5 font-bold text-pth-navy transition-all"
                >
                  I'm 18 or over
                </button>
                <button
                  onClick={() => setStep('guardian')}
                  className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 hover:border-pth-cyan hover:bg-pth-cyan/5 font-bold text-pth-navy transition-all"
                >
                  I'm 16-17
                </button>
                <button
                  onClick={() => setStep('too-young')}
                  className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 hover:border-pth-cyan hover:bg-pth-cyan/5 font-bold text-pth-navy transition-all"
                >
                  I'm under 16
                </button>
              </div>
            </motion.div>
          )}

          {/* TOO YOUNG (outside PthFndR's 16-24 audience) */}
          {step === 'too-young' && (
            <motion.div
              key="too-young"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-100 text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-pth-navy mb-4">
                PthFndR is for ages 16 and up
              </h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                We haven't saved any of your answers. If you're a parent, teacher, or guardian and want to find out more on behalf of a younger person, we'd love to hear from you.
              </p>
              <Link
                to="/for-schools"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-pth-navy text-white font-bold hover:bg-pth-navy/90 transition-all"
              >
                For schools &amp; educators <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </motion.div>
          )}

          {/* LEAD CAPTURE (18+) */}
          {step === 'lead' && (
            <motion.div
              key="lead"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-pth-navy-deep rounded-[2rem] p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pth-cyan/20 via-pth-navy-deep to-pth-navy-deep"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <CheckCircle2 className="w-8 h-8 text-pth-lime" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white mb-4">
                  Nearly there!
                </h2>
                <p className="text-slate-300 mb-8 max-w-md mx-auto">
                  Pop in your details to see your results and what to focus on next.
                </p>

                <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-sm mx-auto text-left">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">First Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={leadData.name}
                      onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                      className="w-full rounded-xl border-0 bg-white/5 py-3 px-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-pth-cyan"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={leadData.email}
                      onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                      className="w-full rounded-xl border-0 bg-white/5 py-3 px-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-pth-cyan"
                      placeholder="you@email.com"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 py-4 px-4 rounded-xl bg-pth-gradient text-pth-navy font-bold hover:opacity-90 transition-all mt-6"
                  >
                    See My Results <ChevronRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* GUARDIAN CONSENT (13-17) */}
          {step === 'guardian' && (
            <motion.div
              key="guardian"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-pth-navy-deep rounded-[2rem] p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pth-cyan/20 via-pth-navy-deep to-pth-navy-deep"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <Mail className="w-8 h-8 text-pth-lime" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white mb-4">
                  Almost there!
                </h2>
                <p className="text-slate-300 mb-8 max-w-md mx-auto">
                  Because you're under 18, we ask a parent or guardian to confirm before we save your details or get in touch. You'll still see your results now — this is just part of how we keep things safe.
                </p>

                <form onSubmit={handleGuardianSubmit} className="space-y-4 max-w-sm mx-auto text-left">
                  <div>
                    <label htmlFor="minorName" className="block text-sm font-medium text-slate-300 mb-1">Your first name</label>
                    <input
                      type="text"
                      id="minorName"
                      required
                      value={guardianData.minorName}
                      onChange={(e) => setGuardianData({ ...guardianData, minorName: e.target.value })}
                      className="w-full rounded-xl border-0 bg-white/5 py-3 px-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-pth-cyan"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="minorEmail" className="block text-sm font-medium text-slate-300 mb-1">Your email</label>
                    <input
                      type="email"
                      id="minorEmail"
                      required
                      value={guardianData.minorEmail}
                      onChange={(e) => setGuardianData({ ...guardianData, minorEmail: e.target.value })}
                      className="w-full rounded-xl border-0 bg-white/5 py-3 px-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-pth-cyan"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <label htmlFor="guardianName" className="block text-sm font-medium text-slate-300 mb-1 mt-3">Parent/guardian name</label>
                    <input
                      type="text"
                      id="guardianName"
                      required
                      value={guardianData.guardianName}
                      onChange={(e) => setGuardianData({ ...guardianData, guardianName: e.target.value })}
                      className="w-full rounded-xl border-0 bg-white/5 py-3 px-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-pth-cyan"
                      placeholder="Parent or guardian's name"
                    />
                  </div>
                  <div>
                    <label htmlFor="guardianEmail" className="block text-sm font-medium text-slate-300 mb-1">Parent/guardian email</label>
                    <input
                      type="email"
                      id="guardianEmail"
                      required
                      value={guardianData.guardianEmail}
                      onChange={(e) => setGuardianData({ ...guardianData, guardianEmail: e.target.value })}
                      className="w-full rounded-xl border-0 bg-white/5 py-3 px-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-pth-cyan"
                      placeholder="parent@email.com"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 py-4 px-4 rounded-xl bg-pth-gradient text-pth-navy font-bold hover:opacity-90 transition-all mt-6"
                  >
                    See My Results <ChevronRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* CALCULATING */}
          {step === 'calculating' && (
            <motion.div
              key="calculating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-[2rem] p-16 shadow-xl border border-slate-100 text-center flex flex-col items-center justify-center min-h-[400px]"
            >
              <Loader2 className="w-12 h-12 text-pth-cyan animate-spin mb-6" />
              <h2 className="text-2xl font-heading font-bold text-pth-navy mb-2">Working out your results...</h2>
              <p className="text-slate-500">Just a moment</p>
            </motion.div>
          )}

          {/* RESULT */}
          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-100 text-center"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-pth-cyan/10 text-pth-cyan font-bold text-xs tracking-wider uppercase mb-6">
                Your Starting Point
              </span>
              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-pth-navy mb-2">
                {pattern}
              </h1>
              <p className="text-lg font-semibold text-pth-cyan mb-6">
                {{
                  'The Explorer': 'Ready to discover',
                  'The Regrouper': 'Finding the way back',
                  'The Builder': 'Learning by doing',
                  'The Spark': 'Talent not yet lit',
                  'The Pathfinder': 'Ready for what’s next',
                }[pattern as string]}
              </p>

              {awaitingGuardianConsent && (
                <div className="bg-pth-cyan/5 border border-pth-cyan/20 rounded-2xl p-5 mb-6 text-left flex items-start gap-3">
                  <Mail className="w-5 h-5 text-pth-cyan shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-slate-700">
                    We've emailed your parent/guardian to confirm before we save your details or get in touch. Once they confirm, you're all set.
                  </p>
                </div>
              )}

              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 mb-10 text-left border border-slate-200">
                {pattern === 'The Explorer' && (
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong>You're not sure yet what you want, and that's a completely normal place to start.</strong> Before skills or opportunity, it helps to know what you actually bring and what you value. Discover Bootcamp is built exactly for this — identity work first, direction second.
                  </p>
                )}
                {pattern === 'The Regrouper' && (
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong>You've got a sense of direction — right now, the hard part is staying with it.</strong> That's real, and it doesn't mean starting over. A bit of structure and the right support can help you find your footing again.
                  </p>
                )}
                {pattern === 'The Builder' && (
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong>You know who you are and you keep going when it's hard — now it's about building real skill.</strong> Our Upskill Accelerators are built for exactly this: practical, real-world skills in a track that fits where you want to go.
                  </p>
                )}
                {pattern === 'The Spark' && (
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong>You're ready — you just haven't had the platform yet.</strong> You've got direction, resilience, and real skills. What's missing is the opportunity to actually show what you can do. That's exactly what our micro-opportunities and employer partners are for.
                  </p>
                )}
                {pattern === 'The Pathfinder' && (
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong>You're in a strong position.</strong> You've got direction, resilience, real skills, and experience putting them to use. You're ready for bigger opportunities — and could even mentor others just starting out.
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <p className="text-slate-600 font-medium">Ready for your next step?</p>
                <Link
                  to="/programmes"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-pth-navy text-white font-bold hover:bg-pth-navy/90 transition-all shadow-md w-full sm:w-auto"
                >
                  Explore our programmes
                </Link>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
