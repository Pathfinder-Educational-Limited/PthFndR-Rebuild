export function validateBoard(values: number[], anchors: number[], target: number, assignment: number[]): boolean {
  if (assignment.length !== 16 || assignment.some(r => !Number.isInteger(r) || r < 0 || r > 3)) return false;
  return anchors.every((anchor, region) => {
    if (assignment[anchor] !== region) return false;
    const cells = assignment.flatMap((r, i) => r === region ? [i] : []);
    if (cells.reduce((sum, i) => sum + values[i], 0) !== target) return false;
    const seen = new Set([anchor]);
    const queue = [anchor];
    while (queue.length) {
      const i = queue.pop()!;
      for (const j of cells) {
        if (!seen.has(j) && Math.abs(Math.floor(i / 4) - Math.floor(j / 4)) + Math.abs(i % 4 - j % 4) === 1) {
          seen.add(j); queue.push(j);
        }
      }
    }
    return seen.size === cells.length;
  });
}
export const dayKey = () => new Date().toISOString().slice(0, 10);
export const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
