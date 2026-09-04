interface JourneyIndicatorProps {
  identityScore: number;
  characterScore: number;
  competenceScore: number;
  impactScore: number;
}

const DIMENSIONS = [
  { key: 'identityScore', label: 'Identity', sublabel: 'Direction', color: 'bg-identity-blue', stage: 'KNOW' },
  { key: 'characterScore', label: 'Character', sublabel: 'Persistence', color: 'bg-character-green', stage: 'BE' },
  { key: 'competenceScore', label: 'Competence', sublabel: 'Practical capability', color: 'bg-competence-orange', stage: 'BE / DO' },
  { key: 'impactScore', label: 'Impact', sublabel: 'Exposure', color: 'bg-impact-purple', stage: 'DO' },
] as const;

// Honest, lightweight developmental view of the four Trapezium dimensions — deliberately no
// XP, streaks, points, or artificial completion percentages, per the Gate C instruction.
// Scores are self-reported assessment signals, shown as-is, not as verified progress.
export function JourneyIndicator(props: JourneyIndicatorProps) {
  const scores: Record<string, number> = {
    identityScore: props.identityScore,
    characterScore: props.characterScore,
    competenceScore: props.competenceScore,
    impactScore: props.impactScore,
  };

  return (
    <div className="space-y-4">
      {DIMENSIONS.map((dim) => {
        const value = scores[dim.key];
        return (
          <div key={dim.key}>
            <div className="flex items-center justify-between mb-1.5">
              <div>
                <span className="text-sm font-semibold text-slate-700">{dim.label}</span>
                <span className="text-xs text-slate-400 ml-2">{dim.sublabel}</span>
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{dim.stage}</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${dim.color} rounded-full transition-all`}
                style={{ width: `${(value / 5) * 100}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
