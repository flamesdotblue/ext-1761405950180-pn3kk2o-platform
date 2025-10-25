import HeroCover from './components/HeroCover';
import ControlPanel from './components/ControlPanel';
import LiveStream from './components/LiveStream';
import FeaturesGrid from './components/FeaturesGrid';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative w-full">
        <HeroCover />
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="-mt-10 relative z-10">
          <ControlPanel />
        </section>

        <section className="py-10">
          <LiveStream />
        </section>

        <section className="pb-16">
          <FeaturesGrid />
        </section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        Built for live hackathon discovery and tracking. Data shown is simulated for demo.
      </footer>
    </div>
  );
}

export default App;
