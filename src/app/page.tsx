import BakeryMenu from "@/components/BakeryMenu";
import BulkOrderForm from "@/components/BulkOrderForm";

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative mx-4 mt-4 lg:mx-8 lg:mt-6 rounded-3xl overflow-hidden shadow-2xl border border-amber-900/10 min-h-[480px] lg:min-h-[560px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-900/30" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-16 text-white w-full">
          {/* Tradie Hook Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/25 text-amber-300 font-bold text-xs sm:text-sm border border-amber-400/40 backdrop-blur-md mb-4">
            <span>⚡ Tradies &amp; Crews: Hot pies &amp; smoko boxes ready from 6:30 AM!</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white mb-4 drop-shadow-md">
            Appin Street Bakery
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
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-4 py-2 rounded-xl transition-colors shadow"
            >
              <span>📞</span>
              <span>(03) 5721 2496</span>
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#smoko"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm rounded-xl shadow-lg shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>🥧 Pre-Order Smoko Box</span>
            </a>
            <a
              href="#daily-menu"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl backdrop-blur-md border border-white/20 transition-all"
            >
              Daily Menu ↓
            </a>
            <a
              href="#catering"
              className="px-6 py-3.5 bg-stone-900/90 hover:bg-stone-800 text-amber-300 font-bold text-sm rounded-xl border border-amber-500/30 transition-all"
            >
              Club &amp; Event Catering ↓
            </a>
          </div>
        </div>
      </section>

      {/* Tradie Smoko Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-stone-950 p-6 sm:p-8 rounded-3xl shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
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
              className="px-6 py-3 bg-stone-950 hover:bg-stone-900 text-amber-300 font-black text-xs uppercase tracking-wider rounded-xl shadow transition-all hover:scale-105"
            >
              📞 Call (03) 5721 2496
            </a>
          </div>
        </div>
      </section>

      {/* Daily Menu Section */}
      <section id="daily-menu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <BakeryMenu />
      </section>

      {/* Smoko & Bulk Pre-Orders Section */}
      <section id="smoko" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            Feed The Crew Fast
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-amber-950 mt-2">
            Pre-Order Your Smoko Box 🥧
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            Skip the morning rush. Submit your crew or club pre-order below for easy pickup from 6:30 AM Monday through Saturday.
          </p>
        </div>

        <BulkOrderForm />
      </section>

      {/* Community & Event Catering Section */}
      <section id="catering" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-md">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              Community &amp; Club Partners
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight mt-2">
              Catering For Wangaratta &amp; Clubs
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
              For decades, Appin Street Bakery has fueled local football and netball clubs, cricket matches, school sports carnivals, and morning tea functions. We supply bulk freshly baked goods with special club and wholesale consideration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-amber-200/70 flex flex-col justify-between">
              <div>
                <span className="text-3xl mb-3 block">👷</span>
                <h3 className="font-black text-stone-900 text-lg mb-2">Work Crew Smoko Boxes</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Boxed packs of hot party pies, mini sausage rolls, cocktail pasties, and dipping sauce bottles. Packed hot and ready for your crew at 6:30 AM sharp.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-amber-200/60">
                <span className="text-xs font-bold text-amber-900">Pre-order by 3pm day prior</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-amber-200/70 flex flex-col justify-between">
              <div>
                <span className="text-3xl mb-3 block">🥪</span>
                <h3 className="font-black text-stone-900 text-lg mb-2">Corporate &amp; Function Platters</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Freshly filled gourmet crusty rolls and wrap platters, followed by mixed afternoon tea bite-sized slices (Vanilla Slice, Hedgehog, Caramel, Danish).
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-amber-200/60">
                <span className="text-xs font-bold text-amber-900">24 hours advance notice</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-amber-200/70 flex flex-col justify-between">
              <div>
                <span className="text-3xl mb-3 block">🏉</span>
                <h3 className="font-black text-stone-900 text-lg mb-2">Club &amp; School Canteens</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Bulk dozens of meat pies, pasties, jumbo sausage rolls, and crusty bread rolls for Wangaratta football, cricket, and netball clubs and school fundraisers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-amber-200/60">
                <span className="text-xs font-bold text-amber-900">Weekly club standing orders</span>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-black text-amber-950 text-sm sm:text-base">Have a large upcoming event?</h4>
              <p className="text-xs text-stone-600">Contact our bakery team directly to arrange quantities and standing delivery or collection schedules.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:0357212496"
                className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl shadow transition"
              >
                📞 (03) 5721 2496
              </a>
              <a
                href="mailto:appinbakery@bigpond.com"
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-xs rounded-xl transition"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section id="hours" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-amber-200/80 shadow-sm flex flex-col justify-between">
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

          <div className="lg:col-span-6 bg-stone-900 text-white rounded-3xl p-8 border border-stone-800 shadow-xl flex flex-col justify-between">
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
    </div>
  );
}
