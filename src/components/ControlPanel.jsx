import { useState } from 'react';
import { Filter, Globe, Clock, RefreshCw } from 'lucide-react';

export default function ControlPanel({ onFiltersChange }) {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('global');
  const [timeline, setTimeline] = useState('upcoming');
  const [autoRefresh, setAutoRefresh] = useState(true);

  const handleApply = () => {
    onFiltersChange?.({ query, region, timeline, autoRefresh });
  };

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-white/70">
          <Filter className="h-4 w-4" />
          <span>Stream Controls</span>
        </div>
        <button
          type="button"
          onClick={handleApply}
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-sm transition hover:bg-white/20"
        >
          <RefreshCw className="h-4 w-4" /> Apply
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: AI, Web3, ML, climate..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
          />
        </label>

        <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2">
          <Globe className="h-4 w-4 text-white/60" />
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full bg-transparent text-sm outline-none"
          >
            <option className="bg-black" value="global">Global</option>
            <option className="bg-black" value="americas">Americas</option>
            <option className="bg-black" value="europe">Europe</option>
            <option className="bg-black" value="apac">APAC</option>
            <option className="bg-black" value="remote">Remote</option>
          </select>
        </label>

        <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2">
          <Clock className="h-4 w-4 text-white/60" />
          <select
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full bg-transparent text-sm outline-none"
          >
            <option className="bg-black" value="upcoming">Upcoming</option>
            <option className="bg-black" value="live">Live Now</option>
            <option className="bg-black" value="deadline">Closing Soon</option>
          </select>
        </label>

        <label className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm">
          <span className="flex items-center gap-2 text-white/80">
            <RefreshCw className="h-4 w-4" /> Auto-refresh
          </span>
          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={(e) => setAutoRefresh(e.target.checked)}
            className="h-4 w-4 accent-emerald-500"
          />
        </label>
      </div>
    </div>
  );
}
