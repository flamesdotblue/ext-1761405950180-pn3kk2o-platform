import { Activity, Shield, Clock, Globe } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: Activity,
      title: 'Real-time Ingestion',
      desc: 'Continuously monitors trusted sources for new hackathons and updates the stream instantly.'
    },
    {
      icon: Clock,
      title: 'Deadline Awareness',
      desc: 'Sort and filter by time remaining, with closing-soon highlights and reminders.'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      desc: 'Discover events across regions and remote-friendly competitions.'
    },
    {
      icon: Shield,
      title: 'Quality Signals',
      desc: 'Curated sources, de-duplication, and basic validation reduce noise and spam.'
    }
  ];

  return (
    <div id="features" className="">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-semibold">Why this stream?</h3>
        <p className="mt-2 text-white/70">A focused tool for hackathon hunters: fast, clean, and live.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <f.icon className="h-5 w-5 text-emerald-400" />
            <h4 className="mt-3 font-semibold">{f.title}</h4>
            <p className="mt-1 text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
