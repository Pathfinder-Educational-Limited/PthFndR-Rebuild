import { useState } from 'react';

export default function BalanceHowTo() {
  const [selected, setSelected] = useState(false);
  const [added, setAdded] = useState(false);
  const [message, setMessage] = useState('First, choose group A below.');
  const control = 'min-h-11 rounded-xl border border-slate-300 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800';
  return <details className="mt-5 rounded-2xl border border-slate-300 bg-white p-4" open>
    <summary className="cursor-pointer text-lg font-semibold">How to play · try a quick example</summary>
    <p className="mt-3 text-sm">Divide the board into four groups: <strong>A, B, C and D</strong>. The numbers in each group must add up to the target.</p>
    <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
      <li>Choose a letter above the board, then tap squares to add them to that group.</li>
      <li>Each group includes its matching <strong>★ square</strong>. These starting squares are fixed, and their numbers count towards the total.</li>
      <li>Keep each group joined through touching edges: up, down, left or right. <strong>Diagonals do not count.</strong> Every square in a group must connect back to its star through that group.</li>
      <li>Assign every square to one group, then press <strong>Check balance</strong> (or <strong>Check and save</strong> in Saved daily).</li>
    </ol>
    <p className="mt-3 text-sm">To change a square, choose another letter and tap it. To clear it, tap again with its current letter selected. You can also use Undo.</p>
    <div className="mt-4 rounded-xl bg-[#fcfaf6] p-3" aria-label="Untimed learning example">
      <h3 className="font-semibold">Try one move · target 10</h3>
      <p className="mt-2 text-sm">This small example shows just group A. Its star is worth 7. Add the neighbouring 3 to reach 10.</p>
      <button type="button" aria-pressed={selected} onClick={() => { setSelected(true); setMessage('A selected. Now tap the square with 3.'); }} className={control + ' mt-3 ' + (selected ? 'bg-[#24342f] text-white' : 'bg-white')}>Choose A</button>
      <div className="mt-3 grid max-w-48 grid-cols-2 gap-2" role="group" aria-label="Example squares">
        <button type="button" aria-label="Fixed A star, value 7" onClick={() => { setSelected(true); setMessage('The star stays in group A. Its 7 already counts towards 10. Tap 3 to add it.'); }} className={control + ' bg-emerald-100'}><span className="block text-xs">A ★</span><span className="text-2xl font-semibold">7</span></button>
        <button type="button" aria-label={added ? 'Value 3, assigned to A' : 'Value 3, unassigned'} aria-pressed={added} onClick={() => { if (!selected) { setMessage('Choose A first, then tap 3.'); return; } setAdded(!added); setMessage(added ? 'Square cleared. A is back to 7/10. Tap 3 to add it again.' : 'Balanced! 7 + 3 = 10. The squares share an edge. Tap 3 again to practise clearing it.'); }} className={control + (added ? ' bg-emerald-100' : ' bg-white')}><span className="block min-h-4 text-xs">{added ? 'A' : ''}</span><span className="text-2xl font-semibold">3</span></button>
      </div>
      <p className="mt-3 text-sm font-semibold">A: {added ? 10 : 7}/10</p>
      <p role="status" className="mt-2 text-sm">{message}</p>
      <button type="button" className={control + ' mt-3 bg-white'} onClick={() => { setSelected(false); setAdded(false); setMessage('First, choose group A below.'); }}>Restart example</button>
      <p className="mt-3 text-xs text-slate-600">No timer or score here. On the real board, balance all four groups and use every square. You can close these instructions when ready.</p>
    </div>
  </details>;
}
