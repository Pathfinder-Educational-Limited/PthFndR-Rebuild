import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

type Step = 'intro' | 'q1' | 'q2' | 'q3' | 'q4' | 'lead' | 'calculating' | 'result';

type Pattern = 'The Seeker' | 'The Powerhouse' | 'The Hidden Gem' | 'The Fragmented Professional' | 'The Aligned Leader';

export default function Assessment() {
  const [step, setStep] = useState<Step>('intro');
  const [scores, setScores] = useState({
    identity: 0,
    character: 0,
    competence: 0,
    impact: 0,
  });
  const [leadData, setLeadData] = useState({ name: '', email: '' });
  const [pattern, setPattern] = useState<Pattern | null>(null);

  const handleScore = (domain: keyof typeof scores, value: number) => {
    setScores((prev) => ({ ...prev, [domain]: value }));
    const nextSteps: Record<string, Step> = {
      q1: 'q2',
      q2: 'q3',
      q3: 'q4',
      q4: 'lead',
    };
    setTimeout(() => setStep(nextSteps[step as string]), 400);
  };

  const calculatePattern = () => {
    const { identity: i, character: c, competence: comp, impact: imp } = scores;
    
    if (i >= 4 && c >= 4 && comp >= 4 && imp >= 4) return 'The Aligned Leader';
    if (i >= 4 && (c <= 3 || comp <= 3 || imp <= 3)) return 'The Seeker';
    if (i <= 3 && (c >= 4 || comp >= 4)) return 'The Powerhouse';
    if (i >= 4 && c >= 4 && comp >= 4 && imp <= 3) return 'The Hidden Gem';
    
    return 'The Fragmented Professional';
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('calculating');
    
    setTimeout(() => {
      setPattern(calculatePattern());
      setStep('result');
    }, 2500);
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
        title="Diagnostic Assessment | PthFndR" 
        description="Discover your Professional Alignment. Take the 2-minute Trapezium Diagnostic."
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
                Free Diagnostic Tool
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-pth-navy mb-6">
                Discover Your Professional Alignment
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Are you a Seeker, a Powerhouse, or a Hidden Gem? Take the 2-minute Trapezium Model™ Diagnostic to uncover your alignment pattern and identify your exact next steps for career growth.
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
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Identity (KNOW)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-pth-navy leading-tight">
                "I have a clear understanding of my professional purpose and can easily articulate my unique value to others."
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
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Character (BE)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-pth-navy leading-tight">
                "I am able to maintain momentum, resilience, and 'staying power' during challenging professional transitions or setbacks."
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
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Competence (BE)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-pth-navy leading-tight">
                "I possess the technical skills and industry-specific 'vocational vocabulary' required to excel in my target sector."
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
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Impact (DO)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-pth-navy leading-tight">
                "My current work allows me to create tangible results and influence outcomes beyond my immediate daily tasks."
              </h2>
              {renderLikert('impact')}
            </motion.div>
          )}

          {/* LEAD CAPTURE */}
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
                  Assessment Complete!
                </h2>
                <p className="text-slate-300 mb-8 max-w-md mx-auto">
                  Enter your details below to unlock your personalized Trapezium Alignment Pattern and actionable next steps.
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
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={leadData.email}
                      onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                      className="w-full rounded-xl border-0 bg-white/5 py-3 px-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-pth-cyan"
                      placeholder="jane@organization.com"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 py-4 px-4 rounded-xl bg-pth-gradient text-pth-navy font-bold hover:opacity-90 transition-all mt-6"
                  >
                    Reveal My Results <ChevronRight className="w-5 h-5" />
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
              <h2 className="text-2xl font-heading font-bold text-pth-navy mb-2">Analyzing your responses...</h2>
              <p className="text-slate-500">Mapping against the Trapezium Model™</p>
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
                Your Alignment Pattern
              </span>
              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-pth-navy mb-6">
                {pattern}
              </h1>
              
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 mb-10 text-left border border-slate-200">
                {pattern === 'The Seeker' && (
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong>Clarity without Capacity.</strong> You have a strong sense of your professional identity and purpose, but you may be lacking the specific technical competencies or resilience strategies needed to translate that purpose into tangible impact. Your next step is to focus on the "BE" and "DO" pillars.
                  </p>
                )}
                {pattern === 'The Powerhouse' && (
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong>Strength without Direction.</strong> You possess excellent technical skills and strong character, but you may be struggling to articulate your unique value proposition. You are highly capable, but without a clear "Identity" (KNOW), you risk being misaligned in your career.
                  </p>
                )}
                {pattern === 'The Hidden Gem' && (
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong>The Complete Package, Unrecognized.</strong> You have strong identity, character, and competence. However, you are currently in an environment (or lacking the network) that prevents you from creating measurable "Impact" (DO). You need a platform to showcase your value.
                  </p>
                )}
                {pattern === 'The Fragmented Professional' && (
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong>Inconsistent Alignment.</strong> Your scores indicate a mix of strengths and gaps across the Trapezium domains. You would benefit from a systematic, end-to-end development approach to build a cohesive professional narrative.
                  </p>
                )}
                {pattern === 'The Aligned Leader' && (
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong>High Alignment.</strong> You score highly across Identity, Character, Competence, and Impact. You are well-positioned to not only succeed in your own career but to act as a mentor and leader for others navigating their professional journeys.
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <p className="text-slate-600 font-medium">Ready to bridge your gaps?</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-pth-navy text-white font-bold hover:bg-pth-navy/90 transition-all shadow-md w-full sm:w-auto"
                >
                  Book a Framework Briefing
                </Link>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
