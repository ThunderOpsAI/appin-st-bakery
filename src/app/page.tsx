import HeroParallax from "@/components/HeroParallax";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <HeroParallax imageUrl="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1920&auto=format&fit=crop">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 text-white w-full">
          {/* Tradie Hook Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white font-bold text-xs sm:text-sm border border-white/25 backdrop-blur-md mb-4">
            <span>⚡ Tradies &amp; Crews: Hot pies &amp; smoko boxes ready from 6:30 AM!</span>
          </div>

          <h1 className="display-type text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.92] text-[#fff8ee] mb-6 max-w-4xl drop-shadow-md">
            Good food. <span className="text-amber-300">Early.</span> Always.
          </h1>

          <p className="text-base sm:text-xl font-medium text-stone-200 max-w-2xl mb-8 leading-relaxed drop-shadow">
            Fresh from the oven — Wangaratta&apos;s beloved community bakery since before you woke up. Hand-crimped meat pies, crisp Italian continental loaves, made-to-order salad rolls, and classic Vanilla Slice.
          </p>

          {/* Operational Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 text-xs sm:text-sm">
            <div className="flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-stone-700/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-stone-200">🕡 Open 6:30am Mon–Sat</span>
            </div>
            <div className="flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-stone-700/80">
              <span>📍</span>
              <span className="font-semibold text-stone-200">98 Appin Street, Wangaratta</span>
            </div>
            <a
              href="tel:0357212496"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-4 py-2 rounded-xl shadow hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
            >
              <span>📞</span>
              <span>(03) 5721 2496</span>
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/catering"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm rounded-xl shadow-lg shadow-amber-500/30 flex items-center gap-2 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
            >
              <span>🥧 Pre-Order Smoko Box</span>
            </a>
            <a
              href="/menu"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl backdrop-blur-md border border-white/20 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
            >
              Daily Menu ↓
            </a>
            <a
              href="/catering#catering"
              className="px-6 py-3.5 bg-stone-900/90 hover:bg-stone-800 text-amber-300 font-bold text-sm rounded-xl border border-amber-500/30 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
            >
              Club &amp; Event Catering ↓
            </a>
          </div>
        </div>
      </HeroParallax>

      {/* Tradie Smoko Banner */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bakery-glow theme-banner p-6 sm:p-8 rounded-[2rem] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-stone-950 text-amber-400 font-black text-2xl flex items-center justify-center shrink-0 shadow">
                🛠️
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-stone-950">
                  Tradies — Pre-Order Your Crew&apos;s Smoko Box!
                </h3>
                <p className="text-xs sm:text-sm font-medium text-stone-900/90 mt-0.5">
                  Call the afternoon before or order online. Pick up hot party pies, classic rolls, and cold drinks on your way to the job site at 6:30am.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:0357212496"
                className="px-6 py-3 bg-stone-950 hover:bg-stone-900 text-amber-300 font-black text-xs uppercase tracking-wider rounded-xl shadow hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
              >
                📞 Call (03) 5721 2496
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>


      {/* Hours & Location Section */}
      <ScrollReveal>
        <section id="hours" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 theme-surface rounded-[2rem] p-8 border shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  Visit The Bakery
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-amber-950 mt-3 mb-4">
                  Location &amp; Tradie Access
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  Located at <strong>98 Appin Street, Wangaratta</strong>. Easily accessible with wide, convenient street parking directly out the front for utes, commercial vans, and trailers. Pop in quickly on your morning run.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                  <p className="flex items-center gap-3">
                    <span className="text-amber-600 font-bold text-base">📍</span>
                    <span>98 Appin Street, Wangaratta, VIC 3677</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-amber-600 font-bold text-base">📞</span>
                    <a href="tel:0357212496" className="text-amber-800 font-bold hover:underline">(03) 5721 2496</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-amber-600 font-bold text-base">✉️</span>
                    <a href="mailto:appinbakery@bigpond.com" className="text-stone-600 hover:underline">appinbakery@bigpond.com</a>
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-amber-100">
                <a
                  href="https://maps.google.com/?q=98+Appin+Street+Wangaratta+VIC+3677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-amber-700 hover:text-amber-900 underline flex items-center gap-1.5"
                >
                  <span>🗺️ Open 98 Appin Street on Google Maps →</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 theme-dark rounded-[2rem] p-8 border shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                  Trading Schedule
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-6">
                  Trading Hours
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white text-sm block">Monday – Friday</span>
                      <span className="text-xs text-amber-400 font-medium">Early open for tradie smoko</span>
                    </div>
                    <span className="text-sm font-black text-stone-200">6:30 AM – 5:30 PM</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white text-sm block">Saturday</span>
                      <span className="text-xs text-amber-400 font-medium">Weekend sports &amp; morning tea rush</span>
                    </div>
                    <span className="text-sm font-black text-stone-200">6:30 AM – 1:30 PM</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800/80 flex items-center justify-between text-stone-500">
                    <div>
                      <span className="font-bold text-stone-400 text-sm block">Sunday</span>
                      <span className="text-xs">Bakers resting &amp; prep day</span>
                    </div>
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-500/80">CLOSED</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-800 text-xs text-stone-400">
                ⚡ Hot pies, sausage rolls, and fresh sandwiches available right from opening at 6:30 AM.
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
