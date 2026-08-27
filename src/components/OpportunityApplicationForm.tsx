import React, { useState } from 'react';
import { getSupabaseClient } from '../services/supabaseClient';

interface Props {
  opportunityId: string;
  opportunityTitle: string;
  onSuccess: () => void;
}

export default function OpportunityApplicationForm({
  opportunityId,
  opportunityTitle,
  onSuccess,
}: Props) {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    age: '',
    postcode: '',
    why_applying: '',
    what_you_bring: '',
    availability: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const supabase = getSupabaseClient();
    const { error: sbError } = await supabase
      .from('opportunity_applications')
      .insert([
        {
          opportunity_id: opportunityId,
          first_name: form.first_name,
          last_name: form.last_name,
          email: form.email,
          phone: form.phone || null,
          age: form.age ? parseInt(form.age) : null,
          postcode: form.postcode || null,
          why_applying: form.why_applying,
          what_you_bring: form.what_you_bring || null,
          availability: form.availability || null,
        },
      ]);

    setSubmitting(false);

    if (sbError) {
      setError('Something went wrong. Please try again or email us directly.');
      return;
    }

    onSuccess();
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-[#0C2A5C] mb-2">Apply for this opportunity</h2>
      <p className="text-gray-600 mb-6 text-sm">
        {opportunityTitle} — this programme is free for you. No cost, ever.
      </p>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First name *</label>
            <input
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last name *</label>
            <input
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email address *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age *</label>
            <input
              name="age"
              type="number"
              min={16}
              max={24}
              value={form.age}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Postcode (optional)</label>
          <input
            name="postcode"
            value={form.postcode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Why does this opportunity interest you? *
          </label>
          <textarea
            name="why_applying"
            value={form.why_applying}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What do you bring to this? (optional)
          </label>
          <textarea
            name="what_you_bring"
            value={form.what_you_bring}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            When are you available? (optional)
          </label>
          <input
            name="availability"
            value={form.availability}
            onChange={handleChange}
            placeholder="e.g. weekdays from late September"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={submitting || !form.first_name || !form.last_name || !form.email || !form.age || !form.why_applying}
          className="w-full bg-[#0C2A5C] text-white py-3 rounded font-semibold hover:bg-[#2B9E82] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Submitting...' : 'Submit application'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Your information is stored securely and used only to match you with opportunities.
          We will never share it without your permission.
        </p>
      </div>
    </div>
  );
}
