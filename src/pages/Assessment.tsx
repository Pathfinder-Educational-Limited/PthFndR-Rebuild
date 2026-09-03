import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Loader2, Mail, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { getSupabaseClient } from '../services/supabaseClient';

type Step =
  | 'intro'
  | 'q1' | 'q2' | 'q3' | 'q4'
  | 'age'
  | 'too-young'
  | 'calculating'
  | 'result';

type Pattern = 'The Explorer' | 'The Spark' | 'The Builder' | 'The Regrouper' | 'The Pathfinder';

const ARCHETYPE_CTA: Record<Pattern, { label: string; to: string }> = {
  'The Explorer': { label: 'Explore what fits you', to: '/programmes/discover-bootcamp' },
  'The Regrouper': { label: 'Take your next step', to: '/programmes/discover-bootcamp' },
  'The Builder': { label: 'Build something real', to: '/programmes/upskill-accelerators' },
  'The Spark': { label: 'Show what you can do', to: '/opportunities' },
  'The Pathfinder': { label: 'Find your next challenge', to: '/opportunities' },
};

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
  const [stepHistory, setStepHistory] = useState<Step[]>([]);
  const [ageBracket, setAgeBracket] = useState<'18+' | '16-17' | null>(null);
  const [detailsSubmitted, setDetailsSubmitted] = useState(false);
  const [resultId, setResultId] = useState<string | null>(null);
  const [showDimensions, setShowDimensions] = useState(false);

  const goBack = () => {
    setStepHistory((prev) => {
      const history = [...prev];
      const last = history.pop();
      if (last) setStep(last);
      return history;
    });
  };

  const handleScore = (domain: keyof typeof scores, value: number) => {
    setScores((prev) => ({ ...prev, [domain]: value }));
    const nextSteps: Record<string, Step> = {
      q1: 'q2',
      q2: 'q3',
      q3: 'q4',
      q4: 'age',
    };
    const currentStep = step;
    setTimeout(() => {
      setStepHistory((prev) => [...prev, currentStep]);
      setStep(nextSteps[currentStep as string]);
    }, 400);
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

  // Shows the result immediately for anyone 16+ — no email or guardian details required.
  // Data collection (see handleLeadSubmit / handleGuardianSubmit below) is entirely optional
  // and only ever offered AFTER the result is already visible.
  const goToResult = (bracket: '18+' | '16-17') => {
    setStepHistory((prev) => [...prev, 'age']);
    setStep('calculating');
    const result = calculatePattern();
    // Save a real, structured, anonymous assessment result immediately — no name or email
    // required. If this person registers later, YoungPersonSignup.tsx links this row to
    // their real account using the id stored in localStorage below.
    (async () => {
      try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase
          .from('assessment_result')
          .insert([{
            pattern: result,
            identity_score: scores.identity,
            character_score: scores.character,
            competence_score: scores.competence,
            impact_score: scores.impact,
            age_bracket: bracket,
          }])
          .select('id')
          .single();
        if (!error && data) {
          setResultId(data.id);
          localStorage.setItem('pthfndr_assessment_result_id', data.id);
        }
      } catch (err) {
        console.warn('[Assessment] Failed to save structured result:', err);
      }
    })();
    setTimeout(() => {
      setPattern(result);
      setStep('result');
    }, 1200);
  };

  // 18+ pathway: only runs if the person opts in to having their result emailed/saved.
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadData.name,
          email: leadData.email,
          pattern,
          scores,
        }),
      });
    } catch (err) {
      console.warn('[Assessment] Failed to save lead:', err);
    }
    setDetailsSubmitted(true);
  };

  // 13-17 pathway: request guardian consent, don't save/activate the young
  // person's record yet. They still get to see their own result on screen —
  // what's gated is us keeping their details or getting in touch.
  const handleGuardianSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          payload: { pattern, scores },
        }),
      });
    } catch (err) {
      console.warn('[Assessment] Failed to send guardian consent request:', err);
    }
    setAwaitingGuardianConsent(true);
    setDetailsSubmitted(true);
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
        url="https://pthfndr.org/assessment"
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

              <div className="flex justify-center mb-6">
                <Logo size="sm" href="/" />
              </div>

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
                onClick={() => { setStepHistory((prev) => [...prev, 'intro']); setStep('q1'); }}
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
              <button
                onClick={goBack}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-pth-navy transition-colors mb-6"
              >
                <ArrowLeft size={16} aria-hidden="true" /> Back
              </button>
              <div className="flex items-center justify-between gap-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-identity-blue/10 text-identity-blue flex items-center justify-center font-bold">1</span>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Direction</span>
                </div>
                <Logo size="sm" href="/" />
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
              <button
                onClick={goBack}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-pth-navy transition-colors mb-6"
              >
                <ArrowLeft size={16} aria-hidden="true" /> Back
              </button>
              <div className="flex items-center justify-between gap-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-character-green/10 text-character-green flex items-center justify-center font-bold">2</span>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Staying power</span>
                </div>
                <Logo size="sm" href="/" />
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
              <button
                onClick={goBack}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-pth-navy transition-colors mb-6"
              >
                <ArrowLeft size={16} aria-hidden="true" /> Back
              </button>
              <div className="flex items-center justify-between gap-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-competence-orange/10 text-competence-orange flex items-center justify-center font-bold">3</span>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Skills</span>
                </div>
                <Logo size="sm" href="/" />
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
              <button
                onClick={goBack}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-pth-navy transition-colors mb-6"
              >
                <ArrowLeft size={16} aria-hidden="true" /> Back
              </button>
              <div className="flex items-center justify-between gap-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-impact-purple/10 text-impact-purple flex items-center justify-center font-bold">4</span>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Real-world chances</span>
                </div>
                <Logo size="sm" href="/" />
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
              <button
                onClick={goBack}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-pth-navy transition-colors mb-6"
              >
                <ArrowLeft size={16} aria-hidden="true" /> Back
              </button>
              <div className="flex justify-center mb-6">
                <Logo size="sm" href="/" />
              </div>
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
                  onClick={() => { setAgeBracket('18+'); goToResult('18+'); }}
                  className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 hover:border-pth-cyan hover:bg-pth-cyan/5 font-bold text-pth-navy transition-all"
                >
                  I'm 18 or over
                </button>
                <button
                  onClick={() => { setAgeBracket('16-17'); goToResult('16-17'); }}
                  className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 hover:border-pth-cyan hover:bg-pth-cyan/5 font-bold text-pth-navy transition-all"
                >
                  I'm 16-17
                </button>
                <button
                  onClick={() => { setStepHistory((prev) => [...prev, 'age']); setStep('too-young'); }}
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
              <div className="flex justify-center mb-6">
                <Logo size="sm" href="/" />
              </div>
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

              {awaitingGuardianConsent && detailsSubmitted && (
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

              {!detailsSubmitted && ageBracket === '18+' && (
                <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 mb-10 text-left border border-slate-200">
                  <h4 className="font-heading font-bold text-pth-navy mb-1">Want this emailed to you?</h4>
                  <p className="text-sm text-slate-600 mb-4">Along with your recommended next step. Totally optional.</p>
                  <form onSubmit={handleLeadSubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      value={leadData.name}
                      onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                      placeholder="First name"
                      className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-pth-cyan focus:border-transparent"
                    />
                    <input
                      type="email"
                      required
                      value={leadData.email}
                      onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-pth-cyan focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl bg-pth-navy text-white font-bold hover:bg-pth-navy/90 transition-all"
                    >
                      Email me my result <ChevronRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              )}

              {!detailsSubmitted && ageBracket === '16-17' && (
                <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 mb-10 text-left border border-slate-200">
                  <p className="text-sm text-slate-600 mb-4">
                    You can see this result without doing anything else, that part's just for you.
                    If you want us to save it and be able to follow up about programmes, we'll ask a
                    parent or guardian to confirm first. That's required for anyone under 18, so it's
                    something schools and local authorities we work with can rely on.
                  </p>
                  <form onSubmit={handleGuardianSubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      value={guardianData.minorName}
                      onChange={(e) => setGuardianData({ ...guardianData, minorName: e.target.value })}
                      placeholder="Your first name"
                      className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-pth-cyan focus:border-transparent"
                    />
                    <input
                      type="email"
                      required
                      value={guardianData.minorEmail}
                      onChange={(e) => setGuardianData({ ...guardianData, minorEmail: e.target.value })}
                      placeholder="Your email"
                      className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-pth-cyan focus:border-transparent"
                    />
                    <input
                      type="text"
                      required
                      value={guardianData.guardianName}
                      onChange={(e) => setGuardianData({ ...guardianData, guardianName: e.target.value })}
                      placeholder="Parent/guardian name"
                      className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-pth-cyan focus:border-transparent"
                    />
                    <input
                      type="email"
                      required
                      value={guardianData.guardianEmail}
                      onChange={(e) => setGuardianData({ ...guardianData, guardianEmail: e.target.value })}
                      placeholder="Parent/guardian email"
                      className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-pth-cyan focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl bg-pth-navy text-white font-bold hover:bg-pth-navy/90 transition-all"
                    >
                      Send for approval <ChevronRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              )}

              {(() => {
                const signals: string[] = [];
                if (scores.identity >= 4) signals.push('A clear sense of direction');
                if (scores.character >= 4) signals.push('Real staying power');
                if (scores.competence >= 4) signals.push('Practical skills to build on');
                if (scores.impact >= 4) signals.push('Some real-world experience already');
                return signals.length > 0 ? (
                  <div className="mb-8 text-left">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">You already have</h3>
                    <ul className="space-y-2">
                      {signals.map((signal) => (
                        <li key={signal} className="flex items-center gap-2 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-pth-cyan shrink-0" aria-hidden="true" />
                          {signal}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null;
              })()}
              <div className="space-y-4 mb-6">
                <p className="text-slate-600 font-medium">Your next move</p>
                <Link
                  to={ARCHETYPE_CTA[pattern as Pattern].to}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-pth-navy text-white font-bold hover:bg-pth-navy/90 transition-all shadow-md w-full sm:w-auto"
                >
                  {ARCHETYPE_CTA[pattern as Pattern].label}
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setShowDimensions((v) => !v)}
                className="text-sm text-slate-400 hover:text-pth-navy underline transition-colors"
              >
                {showDimensions ? 'Hide' : 'See how we got this result'}
              </button>
              {showDimensions && (
                <div className="mt-4 grid grid-cols-2 gap-3 text-left">
                  <div className="text-sm"><span className="font-bold text-pth-navy">Direction:</span> {scores.identity}/5</div>
                  <div className="text-sm"><span className="font-bold text-pth-navy">Staying power:</span> {scores.character}/5</div>
                  <div className="text-sm"><span className="font-bold text-pth-navy">Skills:</span> {scores.competence}/5</div>
                  <div className="text-sm"><span className="font-bold text-pth-navy">Real-world chances:</span> {scores.impact}/5</div>
                </div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
