import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, MessageCircle, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { PHONE_TEL_HREF, PHONE_WHATSAPP_HREF } from '../constants/contact';
import { ContactPageSchema } from '../components/SEOSchemas';

const TypeformStyleForm = () => {
  const [searchParams] = useSearchParams();
  const applyRole = searchParams.get('role');   // e.g. 'applicant' (from the Team page)
  const applyFor = searchParams.get('for');      // e.g. 'ESOL Facilitator'
  const isApplyFlow = applyRole === 'applicant';

  const [step, setStep] = useState(isApplyFlow ? 1 : 0);
  const [formData, setFormData] = useState({
    role: isApplyFlow ? 'applicant' : '',
    name: '',
    email: '',
    organisation: '',
    interest_in: applyFor || '',
    message: applyFor ? `I'd like to apply for: ${applyFor}.` : '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  type Question = { id: string; label: string; type: 'text' | 'email' | 'select' | 'textarea'; placeholder?: string; options?: { value: string; label: string; }[]; };
  const roleQuestions: Question[] = [
    { id: 'role', label: "First, what best describes you?", type: 'select', options: [
      { value: 'young_person', label: 'Young Person (16-25)' },
      { value: 'educator', label: 'Educator / Teacher' },
      { value: 'institution', label: 'Institution / Local Authority' },
      { value: 'employer', label: 'Employer' },
      { value: 'applicant', label: 'Joining the Team / Applying' },
    ]}
  ];

  const getQuestions = () => {
    if (!formData.role) return roleQuestions;
    const isApplicant = formData.role === 'applicant';

    let q = [...roleQuestions];
    q.push({ id: 'name', label: "Great! What's your name?", type: 'text', placeholder: 'Type your name here...', options: [] });
    q.push({ id: 'email', label: "And your email address?", type: 'email', placeholder: 'name@example.com', options: [] });

    if (formData.role !== 'young_person' && !isApplicant) {
      q.push({ id: 'organisation', label: "Which organisation are you with?", type: 'text', placeholder: 'Organisation name...', options: [] });
    }

    if (!isApplicant) {
      q.push({ id: 'interest_in', label: "What are you most interested in?", type: 'select', options: [
        { value: 'find-your-path', label: 'Find Your Path Assessment' },
        { value: 'institutional-solution', label: 'Institutional Solutions & Bootcamps' },
        { value: 'employalingua', label: 'EmployaLingua Platform' },
      ]});
    }

    q.push({
      id: 'message',
      label: isApplicant ? 'Which role are you applying for, and a bit about you?' : "Is there anything else you'd like to tell us?",
      type: 'textarea',
      placeholder: isApplicant ? 'The role + a short introduction...' : 'Tell us a bit about your goals...',
      options: [],
    });

    return q;
  };

  const questions = getQuestions();

  const handleNext = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentQ = questions[step];

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-20 text-center bg-slate-50 rounded-3xl border border-slate-200 shadow-sm min-h-[400px]">
        <div className="w-20 h-20 bg-pth-cyan/20 text-pth-cyan rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-pth-navy mb-4">Message Received</h3>
        <p className="text-lg text-slate-600 max-w-md mx-auto">Thank you for reaching out. We will be in touch shortly to discuss your path forward.</p>
      </div>
    );
  }

  return (
    <div className="relative bg-slate-50 rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-200 shadow-sm overflow-hidden min-h-[400px] flex flex-col justify-center">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-200">
        <div 
          className="h-full bg-pth-cyan transition-all duration-500 ease-out"
          style={{ width: `${((step) / questions.length) * 100}%` }}
        ></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-2xl mx-auto"
        >
          <form onSubmit={handleNext}>
            <label className="block text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-pth-navy mb-8 leading-tight">
              <span className="text-pth-cyan mr-4">{step + 1} <ArrowRight className="inline w-6 h-6 sm:w-8 sm:h-8 -mt-1" /></span>
              {currentQ.label}
            </label>
            
            {currentQ.type === 'textarea' ? (
              <textarea
                autoFocus
                rows={4}
                className="w-full bg-transparent border-b-2 border-slate-300 focus:border-pth-cyan text-xl sm:text-2xl text-slate-800 placeholder-slate-400 focus:outline-none resize-none py-2 transition-colors"
                placeholder={currentQ.placeholder}
                value={formData[currentQ.id as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [currentQ.id]: e.target.value })}
                required
              />
            ) : currentQ.type === 'select' ? (
              <div className="space-y-4">
                {currentQ.options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, [currentQ.id]: opt.value });
                      setTimeout(() => handleNext(), 150); // Auto-advance on select
                    }}
                    className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all text-xl ${
                      formData[currentQ.id as keyof typeof formData] === opt.value
                        ? 'border-pth-cyan bg-pth-cyan/10 text-pth-navy font-bold'
                        : 'border-slate-200 hover:border-pth-cyan hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            ) : (
              <input
                autoFocus
                type={currentQ.type}
                className="w-full bg-transparent border-b-2 border-slate-300 focus:border-pth-cyan text-xl sm:text-2xl text-slate-800 placeholder-slate-400 focus:outline-none py-2 transition-colors"
                placeholder={currentQ.placeholder}
                value={formData[currentQ.id as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [currentQ.id]: e.target.value })}
                required
              />
            )}

            <div className="mt-10 flex items-center gap-6">
              {currentQ.type !== 'select' && (
                <>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-pth-navy text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-pth-cyan transition-colors disabled:opacity-50"
                  >
                    {step === questions.length - 1 ? (isSubmitting ? 'Sending...' : 'Submit') : 'OK'}
                    {step < questions.length - 1 && <CheckCircle className="w-5 h-5" />}
                  </button>
                  {step < questions.length - 1 && (
                    <span className="text-base text-slate-500 font-medium">press Enter ↵</span>
                  )}
                </>
              )}
            </div>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | PthFndR"
        description="Contact PthFndR at DiSH Manchester. Closing the underemployment gap through the Trapezium Model™ and dignity-infused learning at Heron House."
        url="https://pthfndr.org/contact"
      />
      <ContactPageSchema />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-pth-soft-cyan py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-heading font-extrabold tracking-tight text-pth-navy sm:text-5xl lg:text-6xl">
              Connect with PthFndR at the <span className="text-pth-cyan">Digital Security Hub (DiSH)</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-pth-navy font-bold">
              Empowering Economic Dignity through Ginosko-Sterizo™
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-pth-navy/80 font-medium">
              Pathfinder Educational Limited (trading as PthFndR) is headquartered in the heart of Manchester’s innovation district. Our presence within the Digital Security Hub (DiSH) at Heron House allows us to bridge the gap between high-level technical innovation and the human development needed to sustain it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-heading font-bold tracking-tight text-pth-navy sm:text-4xl mb-6">
                Our Manchester Base of Operations
              </h2>
              <p className="text-lg text-slate-600 mb-12">
                We are strategically located to serve our partners in Local Government, FE Colleges, and the Manchester business community. As a mission-led Social Enterprise based in the DiSH ecosystem, we are committed to driving real change.
              </p>

              <dl className="space-y-8 text-base leading-7 text-slate-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pth-cyan/10">
                      <MapPin className="h-6 w-6 text-pth-cyan" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd className="flex flex-col justify-center">
                    <strong className="font-semibold text-pth-navy">Physical Address:</strong>
                    <a 
                      href="https://maps.google.com/?q=Heron+House,+Digital+Security+Hub+(DiSH),+47+Lloyd+Street,+Manchester,+M2+5LE" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-pth-cyan transition-colors"
                    >
                      Heron House, Digital Security Hub (DiSH)<br />
                      47 Lloyd Street,<br />
                      Manchester, M2 5LE
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pth-lime/10">
                      <Mail className="h-6 w-6 text-pth-lime" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd className="flex flex-col justify-center gap-2">
                    <div>
                      <strong className="font-semibold text-pth-navy block">General Inquiries:</strong>
                      <a href="mailto:hello@pthfndr.org" className="hover:text-pth-cyan font-medium transition-colors">
                        hello@pthfndr.org
                      </a>
                    </div>
                    <div>
                      <strong className="font-semibold text-pth-navy block">EmployaLingua Support:</strong>
                      <a href="mailto:support@employalingua.com" className="hover:text-pth-cyan font-medium transition-colors">
                        support@employalingua.com
                      </a>
                    </div>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Phone</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pth-cyan/10">
                      <Phone className="h-6 w-6 text-pth-cyan" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd className="flex flex-col justify-center">
                    <strong className="font-semibold text-pth-navy">Phone & WhatsApp:</strong>
                    <div className="flex flex-wrap gap-x-6 gap-y-1">
                      <a href={PHONE_TEL_HREF} aria-label="Call PthFndR" className="inline-flex items-center gap-1.5 hover:text-pth-cyan font-medium transition-colors">
                        <Phone className="w-4 h-4" aria-hidden="true" /> Call us
                      </a>
                      <a href={PHONE_WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" aria-label="Chat with PthFndR on WhatsApp" className="inline-flex items-center gap-1.5 hover:text-pth-cyan font-medium transition-colors">
                        <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp us
                      </a>
                    </div>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Hours</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-identity-blue/10">
                      <Clock className="h-6 w-6 text-identity-blue" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd className="flex flex-col justify-center">
                    <strong className="font-semibold text-pth-navy">Working Hours:</strong>
                    <span>Monday – Friday, 09:00 – 17:30</span>
                  </dd>
                </div>
              </dl>

              <div className="mt-12 pt-8 border-t border-slate-200">
                <a 
                  href="/about" 
                  className="inline-flex items-center gap-2 text-pth-cyan font-bold hover:text-pth-navy transition-colors"
                >
                  Read Our Story <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Why Place Matters */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center"
            >
              <h3 className="text-2xl font-heading font-bold text-pth-navy mb-6">
                Why "Place" Matters to Our Mission
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                At PthFndR, we believe that Economic Dignity requires proximity to growth. By anchoring our operations at DiSH, we ensure that our Trapezium Model™ and Ginosko-Sterizo™ frameworks are developed in conversation with the UK’s leading digital and security experts.
              </p>
              
              <div className="space-y-6">
                <p className="font-semibold text-pth-navy">
                  For our institutional partners, our location provides a professional setting for:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-none mt-1">
                      <div className="h-2 w-2 rounded-full bg-pth-cyan"></div>
                    </div>
                    <p className="text-slate-600">
                      <strong className="text-pth-navy">Strategic Briefings:</strong> Understanding the alignment between the MBacc and technical identity.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-none mt-1">
                      <div className="h-2 w-2 rounded-full bg-pth-lime"></div>
                    </div>
                    <p className="text-slate-600">
                      <strong className="text-pth-navy">Social Value Consultation:</strong> Deep dives into how we move 250,000 individuals out of the underemployment gap.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-none mt-1">
                      <div className="h-2 w-2 rounded-full bg-identity-blue"></div>
                    </div>
                    <p className="text-slate-600">
                      <strong className="text-pth-navy">Platform Demos:</strong> First-hand looks at how EmployaLingua builds vocational fluency for Manchester's key sectors.
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>

          {/* Typeform-style Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold tracking-tight text-pth-navy sm:text-4xl mb-4">
                Start a Conversation
              </h2>
              <p className="text-lg text-slate-600">
                Interested in partnering with PthFndR? Fill out the form below and we'll be in touch.
              </p>
            </div>
            
            <TypeformStyleForm />
          </motion.div>

        </div>
      </section>
    </>
  );
}
