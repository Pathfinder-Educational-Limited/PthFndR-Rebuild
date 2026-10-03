"""Generate or exhaustively verify the finite 4x4 Balance puzzle bank.
Usage: python3 scripts/balance-puzzles.py [--generate]
Difficulty labels use candidate counts as a provisional proxy, not playtesting.
"""
import json, random, sys
from pathlib import Path
BANK = Path(__file__).resolve().parents[1] / 'src/features/balance/puzzles.ts'
NEIGH = [sum(1 << j for j in range(16) if abs(i//4-j//4)+abs(i%4-j%4)==1) for i in range(16)]
def connected(mask):
    seen = todo = mask & -mask
    while todo:
        bit = todo & -todo; todo -= bit
        new = NEIGH[bit.bit_length()-1] & mask & ~seen
        seen |= new; todo |= new
    return seen == mask
CONNECTED = [m for m in range(1, 65536) if connected(m)]
def solve(p):
    anchors=p['anchors']; anchor_mask=sum(1<<i for i in anchors)
    candidates=[[] for _ in anchors]
    for mask in CONNECTED:
        a=mask & anchor_mask
        if not a or a & (a-1): continue
        if sum(p['nums'][i] for i in range(16) if mask>>i&1)==p['target']:
            candidates[anchors.index(a.bit_length()-1)].append(mask)
    solutions=[]
    def visit(region,used,parts):
        if len(solutions)>1: return
        if region==4:
            if used==65535: solutions.append(parts)
            return
        for mask in candidates[region]:
            if not mask & used: visit(region+1,used|mask,parts+[mask])
    visit(0,0,[])
    return solutions, sum(map(len,candidates))
def load():
    return json.loads(BANK.read_text().split(' = ',1)[1].rstrip(';\n'))
def generate():
    rng=random.Random(20261003); bank=load()[:3]
    seen={tuple(p['nums']+p['anchors']) for p in bank}
    for attempt in range(10000):
        if len(bank)==30: break
        anchors=sorted(rng.sample(range(16),4)); target=rng.choice([10,12,14,16,18,20,22,24])
        regions=[-1]*16
        for r,i in enumerate(anchors): regions[i]=r
        while -1 in regions:
            options=[(i,regions[j]) for i in range(16) if regions[i]==-1 for j in range(16) if NEIGH[i]>>j&1 and regions[j]>=0]
            i,r=rng.choice(options); regions[i]=r
        if any(not 2<=regions.count(r)<=6 for r in range(4)): continue
        nums=[0]*16
        for r in range(4):
            cuts=sorted(rng.sample(range(1,target),regions.count(r)-1))
            values=[b-a for a,b in zip([0]+cuts,cuts+[target])];rng.shuffle(values)
            for i,v in zip([i for i in range(16) if regions[i]==r],values):nums[i]=v
        if max(nums)>12 or tuple(nums+anchors) in seen:continue
        p=dict(nums=nums,target=target,anchors=anchors)
        solutions,count=solve(p)
        if len(solutions)!=1:continue
        p['solution']=[next(r for r,m in enumerate(solutions[0]) if m>>i&1) for i in range(16)]
        p['candidates']=count;bank.append(p);seen.add(tuple(nums+anchors))
    assert len(bank)==30,'Generation budget exhausted'
    for i,p in enumerate(bank):
        p['id']=f'balance-{i+1:03d}'
        p['difficulty']='Easy' if p['candidates']<30 else 'Medium' if p['candidates']<60 else 'Hard'
    BANK.write_text('export const puzzles = '+json.dumps(bank,indent=2)+';\n')
if '--generate' in sys.argv:generate()
bank=load()
assert len(bank)==30
assert len({p['id'] for p in bank})==30
for p in bank:
    assert len(p['nums'])==16 and all(isinstance(v,int) and v>0 for v in p['nums'])
    assert len(set(p['anchors']))==4
    solutions,_=solve(p)
    assert len(solutions)==1,p['id']
    expected=[next(r for r,m in enumerate(solutions[0]) if m>>i&1) for i in range(16)]
    assert expected==p['solution'],p['id']
print(f'Verified {len(bank)} distinct boards: each stored solution is the unique valid partition.')
