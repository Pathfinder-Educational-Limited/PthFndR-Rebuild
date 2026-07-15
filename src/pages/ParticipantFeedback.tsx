import SEO from '../components/SEO';
import { Star, Check, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ParticipantFeedback() {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skills = [
    "Product Design",
    "User Testing",
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Data Analysis"
  ];

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically send data to a backend
    setIsSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Post-Opportunity Reflection | PthFndR"
        description="Reflect on your experience and add it to your portfolio."
      />

      <div className="bg-pth-cream min-h-screen py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold text-pth-navy mb-2">Reflect on your experience</h1>
            <p className="text-slate-600">
              Please share your feedback on <span className="font-bold text-pth-navy">Product Design Beta Testing Session</span>
            </p>
          </div>

          {!isSubmitted ? (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Rating */}
                <div>
                  <label className="block text-lg font-bold text-pth-navy mb-4">Rate your experience</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star 
                          size={40} 
                          fill={(hoverRating || rating) >= star ? '#F59E0B' : 'transparent'}
                          className={(hoverRating || rating) >= star ? 'text-[#F59E0B]' : 'text-slate-300'} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reflection */}
                <div>
                  <label htmlFor="reflection" className="block text-lg font-bold text-pth-navy mb-4">
                    What did you learn?
                  </label>
                  <textarea
                    id="reflection"
                    rows={5}
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pth-green resize-none text-slate-700 bg-slate-50 focus:bg-white transition-colors"
                    placeholder="Share your thoughts, challenges you overcame, and key takeaways..."
                    required
                  ></textarea>
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-lg font-bold text-pth-navy mb-4">
                    Skills you developed:
                  </label>
                  <p className="text-sm text-slate-500 mb-4">Select the skills you actively used or improved during this opportunity.</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skills.map(skill => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                          selectedSkills.includes(skill)
                            ? 'border-pth-green bg-pth-green/10 text-pth-navy shadow-sm'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-pth-green hover:bg-slate-50'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedSkills.includes(skill) ? 'border-pth-green bg-pth-green' : 'border-slate-300'
                        }`}>
                          {selectedSkills.includes(skill) && <Check size={12} className="text-white" />}
                        </div>
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={rating === 0}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-sm ${
                      rating === 0 
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                        : 'bg-pth-green text-white hover:bg-[#36b666] hover:shadow-md'
                    }`}
                  >
                    Submit Reflection
                  </button>
                  {rating === 0 && (
                    <p className="text-center text-sm text-red-500 mt-3">Please provide a rating before submitting.</p>
                  )}
                </div>

              </form>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-slate-100 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-pth-green mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-heading font-bold text-pth-navy mb-4">Thanks for your feedback!</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-md">
                Your reflection has been submitted to the organisation and this experience has been <span className="font-bold text-pth-navy">automatically added to your portfolio</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm justify-center">
                <Link to="/dashboard" className="bg-pth-green text-white px-8 py-4 rounded-xl font-bold hover:bg-[#36b666] transition-colors shadow-sm flex items-center justify-center gap-2">
                  <Briefcase size={20} /> View in your portfolio
                </Link>
                <Link to="/opportunities" className="bg-slate-100 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors flex items-center justify-center">
                  Find more
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
