import assert from 'node:assert/strict';
import { puzzles } from '../src/features/balance/puzzles';
import { dailyPuzzleIndex, validateBoard } from '../src/features/balance/logic';

assert.equal(dailyPuzzleIndex('2026-10-03', 30), Math.floor(Date.parse('2026-10-03') / 86400000) % 3);
const start = Date.parse('2026-10-04');
const indices = Array.from({ length: 30 }, (_, i) => dailyPuzzleIndex(new Date(start + i * 86400000).toISOString().slice(0, 10), puzzles.length));
assert.equal(new Set(indices).size, 30);
assert.equal(indices[0], 3);
assert.equal(dailyPuzzleIndex('2026-11-03', 30), 3);
for (const p of puzzles) {
  assert(validateBoard(p.nums, p.anchors, p.target, p.solution));
  assert(!validateBoard(p.nums, p.anchors, p.target, Array(16).fill(0)));
  assert(!validateBoard(p.nums, p.anchors, p.target, Array(16).fill(-1)));
}
console.log('Daily schedule and validation passed for all 30 boards.');
