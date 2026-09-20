import BulkOrderForm from "@/components/BulkOrderForm";
import ScrollReveal from "@/components/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering & Pre-Orders | Appin Street Bakery",
  description: "Pre-order your tradie smoko boxes or arrange bulk catering for clubs and events in Wangaratta.",
};

export default function CateringPage() {
  return (
    <div className="space-y-20 py-20">
      {/* Smoko & Bulk Pre-Orders Section */}
      <ScrollReveal>
        <section id="smoko" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </ScrollReveal>

      {/* Community & Event Catering Section */}
      <ScrollReveal>
        <section id="catering" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="theme-surface rounded-[2rem] p-8 sm:p-12 border shadow-md">
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
                  className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl shadow hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
                >
                  📞 (03) 5721 2496
                </a>
                <a
                  href="mailto:appinbakery@bigpond.com"
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-xs rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
