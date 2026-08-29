import { useState, useEffect, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getSupabaseClient } from '../services/supabaseClient';
import { CheckCircle2 } from 'lucide-react';

interface AvailableDate {
  id: string;
  date: string;
  label: string | null;
}

export default function PostOpportunity() {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [dates, setDates] = useState<AvailableDate[]>([]);
  const [selectedDateIds, setSelectedDateIds] = useState<string[]>([]);

  const [form, setForm] = useState({
    title: '',
    category: '',
    description: '',
    duration: '',
    location: '',
    reward: '',
    skills_developed: '',
    requirements: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const supabase = getSupabaseClient();

    supabase.auth.getSession().then(({ data }) => {
      setAuthed(!!data.session);
      setCheckingAuth(false);
    });

    supabase
      .from('available_dates')
      .select('id, date, label')
      .eq('is_active', true)
      .order('date')
      .then(({ data }) => {
        if (data) setDates(data as AvailableDate[]);
      });
  }, []);

  const toggleDate = (id: string) => {
    setSelectedDateIds((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (selectedDateIds.length === 0) {
      setError('Select at least one available date.');
      return;
    }

    setSubmitting(true);

    try {
      const supabase = getSupabaseClient();
      const { data: sessionData } = await supabase.auth.getSession();
      const organisationId = sessionData.session?.user.id;

      if (!organisationId) {
        setError('You need to be signed in to post an opportunity.');
        setSubmitting(false);
        return;
      }

      const { data: newOpportunity, error: insertError } = await supabase
        .from('opportunities')
        .insert([
          {
            organisation_id: organisationId,
            title: form.title,
            category: form.category,
            description: form.description,
            duration: form.duration,
            location: form.location,
            reward: form.reward || null,
            skills_developed: form.skills_developed
              .split('\n')
              .map((s) => s.trim())
              .filter(Boolean),
            requirements: form.requirements
              .split('\n')
              .map((s) => s.trim())
              .filter(Boolean),
          },
        ])
        .select('id')
        .single();

      if (insertError || !newOpportunity) {
        setError('Something went wrong. Please try again.');
        setSubmitting(false);
        return;
      }

      const dateRows = selectedDateIds.map((date_id) => ({
        opportunity_id: newOpportunity.id,
        date_id,
      }));

      const { error: datesError } = await supabase
        .from('opportunity_dates')
        .insert(dateRows);

      if (datesError) {
        setError('Your opportunity was saved, but there was a problem saving the dates. Please contact us to confirm.');
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Post opportunity error:', err);
      setSubmitting(false);
    }
  };

  if (checkingAuth) return null;

  if (!authed) {
    return (
      <div className="bg-pth-cream min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-heading font-bold text-pth-navy mb-4">
          Sign in to post an opportunity
        </h1>
        <p className="text-slate-600 mb-8 max-w-md">
          You need an organisation account to post opportunities.
        </p>
        <div className="flex gap-4">
          <Link to="/login" className="inline-flex items-center gap-2 bg-pth-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-pth-navy/90 transition-colors">
            Sign in
          </Link>
          <Link to="/for-organisations/signup" className="inline-flex items-center gap-2 bg-pth-green text-white px-6 py-3 rounded-xl font-bold hover:bg-[#4ea858] transition-colors">
            Create account
          </Link>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="bg-pth-cream min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl p-10 border border-slate-100 shadow-sm text-center">
          <CheckCircle2 className="text-pth-green mx-auto mb-6" size={48} />
          <h1 className="text-2xl font-heading font-bold text-pth-navy mb-4">
            Submitted for review
          </h1>
          <p className="text-slate-600">
            Thanks for posting. Our team will review your opportunity before it goes live — we'll be in touch soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Post an Opportunity | PthFndR"
        description="Post a new opportunity for young people."
      />
      <div className="bg-pth-cream min-h-screen py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold text-pth-navy mb-2">
              Post an opportunity
            </h1>
            <p className="text-slate-600">
              Every opportunity is reviewed by our team before it goes live.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-pth-navy mb-1.5">Title *</label>
              <input
                id="title"
                type="text"
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="e.g. Website UX Review"
                className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-pth-green focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-pth-navy mb-1.5">Category *</label>
              <input
                id="category"
                type="text"
                required
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                placeholder="e.g. UX & Content Review, Placement, Focus Group"
                className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-pth-green focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-pth-navy mb-1.5">What will they do? *</label>
              <textarea
                id="description"
                required
                rows={4}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 focus:ring-2 focus:ring-pth-green focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="duration" className="block text-sm font-semibold text-pth-navy mb-1.5">Duration *</label>
                <input
                  id="duration"
                  type="text"
                  required
                  value={form.duration}
                  onChange={(e) => setForm({ ...form, duration: e.target.value })}
                  placeholder="e.g. 1 day"
                  className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-pth-green focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-pth-navy mb-1.5">Location *</label>
                <input
                  id="location"
                  type="text"
                  required
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  placeholder="e.g. Heron House, Manchester"
                  className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-pth-green focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="reward" className="block text-sm font-semibold text-pth-navy mb-1.5">
                Reward <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                id="reward"
                type="text"
                value={form.reward}
                onChange={(e) => setForm({ ...form, reward: e.target.value })}
                placeholder="e.g. £20-30 voucher, or leave blank if unpaid"
                className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-pth-green focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="skills_developed" className="block text-sm font-semibold text-pth-navy mb-1.5">
                Skills they'll develop <span className="text-slate-400 font-normal">(one per line)</span>
              </label>
              <textarea
                id="skills_developed"
                rows={3}
                value={form.skills_developed}
                onChange={(e) => setForm({ ...form, skills_developed: e.target.value })}
                placeholder={'UX testing\nStructured feedback'}
                className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-pth-green focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="requirements" className="block text-sm font-semibold text-pth-navy mb-1.5">
                Requirements <span className="text-slate-400 font-normal">(one per line)</span>
              </label>
              <textarea
                id="requirements"
                rows={3}
                value={form.requirements}
                onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                placeholder={'Aged 16-24\nBased in or able to travel to Manchester'}
                className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-pth-green focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-pth-navy mb-2">Available dates *</label>
              <div className="space-y-2">
                {dates.map((d) => (
                  <label key={d.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedDateIds.includes(d.id)}
                      onChange={() => toggleDate(d.id)}
                      className="w-5 h-5 rounded border-slate-300 text-pth-green focus:ring-pth-green"
                    />
                    <span className="text-slate-700">
                      {new Date(d.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                      {d.label && <span className="text-slate-400"> — {d.label}</span>}
                    </span>
                  </label>
                ))}
                {dates.length === 0 && (
                  <p className="text-sm text-slate-400">No dates currently available. Please check back soon.</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl bg-pth-navy text-white font-bold hover:bg-pth-navy/90 transition-all disabled:opacity-50"
            >
              {submitting ? 'Submitting...' : 'Submit for review'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
