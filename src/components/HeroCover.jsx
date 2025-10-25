import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function HeroCover() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
            Live stream enabled
          </div>
          <h1 className="font-[650] tracking-tight text-4xl sm:text-5xl md:text-6xl">
            Real-time Hackathon Scraping & Discovery
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Monitor hackathons as they appear across the web. Stream updates, filter by region and tech stack, and never miss a submission deadline again.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#stream"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 font-medium text-black transition hover:bg-emerald-400"
            >
              <Rocket className="h-4 w-4" />
              Start Watching
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
