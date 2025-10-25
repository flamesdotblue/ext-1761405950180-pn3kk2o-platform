import { useEffect, useMemo, useRef, useState } from 'react';
import { Activity, Clock, Globe, RefreshCw } from 'lucide-react';

const TECH = ['AI', 'Web3', 'ML', 'Climate', 'Fintech', 'Open Source', 'Gaming', 'Robotics'];
const REGIONS = ['Global', 'Americas', 'Europe', 'APAC', 'Remote'];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function makeItem(id) {
  const tech = randomFrom(TECH);
  const region = randomFrom(REGIONS);
  const dur = Math.floor(Math.random() * 72) + 12;
  return {
    id,
    name: `${tech} Sprint #${String(id).padStart(3, '0')}`,
    region,
    tech,
    url: '#',
    deadlineInHours: dur,
    prizePool: `$${(Math.floor(Math.random() * 200) + 10)}k`,
    createdAt: Date.now(),
  };
}

export default function LiveStream() {
  const [items, setItems] = useState(() => Array.from({ length: 6 }, (_, i) => makeItem(i + 1)));
  const [autoRefresh, setAutoRefresh] = useState(true);
  const idRef = useRef(items.length + 1);

  useEffect(() => {
    if (!autoRefresh) return;
    const iv = setInterval(() => {
      setItems((prev) => {
        const next = [makeItem(idRef.current++), ...prev];
        return next.slice(0, 30);
      });
    }, 2500);
    return () => clearInterval(iv);
  }, [autoRefresh]);

  const enriched = useMemo(() => items.map((it) => ({
    ...it,
    age: Math.max(1, Math.round((Date.now() - it.createdAt) / 1000)),
  })), [items]);

  return (
    <div id="stream" className="">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/80">
          <Activity className="h-5 w-5 text-emerald-400" />
          <h2 className="text-lg font-semibold">Live Hackathon Stream</h2>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/60">{items.length} events</span>
        </div>
        <button
          onClick={() => setAutoRefresh((v) => !v)}
          className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition ${autoRefresh ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' : 'border-white/10 bg-white/5 text-white/80'}`}
        >
          <RefreshCw className={`h-4 w-4 ${autoRefresh ? 'animate-spin-slow' : ''}`} />
          {autoRefresh ? 'Auto-refresh On' : 'Auto-refresh Off'}
        </button>
      </div>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {enriched.map((it) => (
          <li key={it.id} className="group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
            <div className="flex items-start justify-between gap-3">
              <div>
                <a href={it.url} className="font-semibold hover:underline">{it.name}</a>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-0.5">
                    <Globe className="h-3 w-3" /> {it.region}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-0.5">
                    <Activity className="h-3 w-3" /> {it.tech}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-0.5">
                    <Clock className="h-3 w-3" /> Deadline in {it.deadlineInHours}h
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-emerald-300">{it.prizePool}</div>
                <div className="text-xs text-white/50">{it.age}s ago</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

