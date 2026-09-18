import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Appin Street Bakery | Wangaratta Early Morning Bakery & Tradie Smoko",
  description: "Wangaratta's community bakery open from 6:30am. Signature meat pies, pasties, gourmet sausage rolls, Italian crusty loaves, made-to-order sandwiches, and vanilla slice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-[#fcf9f2] text-stone-900 selection:bg-amber-500 selection:text-white">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center font-black text-xl text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                  🥖
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black text-amber-950 tracking-tight leading-tight block">
                    Appin Street Bakery
                  </span>
                  <p className="text-xs text-amber-800 font-semibold">
                    Open from 6:30am Daily · 98 Appin Street, Wangaratta
                  </p>
                </div>
              </a>

              {/* Mobile Call Button */}
              <a
                href="tel:0357212496"
                className="md:hidden px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-full shadow transition-colors"
              >
                📞 Call
              </a>
            </div>

            {/* Desktop Navigation & Actions */}
            <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 pt-2 md:pt-0 border-t border-amber-100 md:border-none text-xs sm:text-sm font-semibold">
              <nav className="flex items-center gap-3 sm:gap-5 text-stone-700">
                <a href="/#daily-menu" className="hover:text-amber-700 transition-colors">Daily Menu</a>
                <a href="/#smoko" className="hover:text-amber-700 transition-colors">Smoko Pre-Orders</a>
                <a href="/#catering" className="hover:text-amber-700 transition-colors">Bulk &amp; Catering</a>
                <a href="/#hours" className="hover:text-amber-700 transition-colors">Hours &amp; Location</a>
              </nav>

              <div className="hidden lg:flex items-center gap-2 bg-amber-50 border border-amber-300/80 px-3 py-1 rounded-full text-xs text-amber-900">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Early Open 6:30 AM</span>
              </div>

              <a
                href="tel:0357212496"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm rounded-full shadow-md shadow-amber-600/20 hover:scale-105 active:scale-95 transition-all"
              >
                <span>📞 (03) 5721 2496</span>
              </a>
            </div>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        {/* Brand Footer */}
        <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-black text-base text-white">
                    🥖
                  </div>
                  <span className="text-xl font-black text-white">Appin Street Bakery</span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed mb-4">
                  Wangaratta&apos;s proud community bakery. Baking fresh bread, pies, pasties, salad rolls, and classic bakery slices before dawn since day one.
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
                  ⚡ Tradie Smoko Ready at 6:30 AM
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-4">Location &amp; Access</h4>
                <p className="text-sm text-stone-200 font-semibold mb-1">98 Appin Street</p>
                <p className="text-xs text-stone-400 mb-2">Wangaratta, VIC 3677</p>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Easy street parking right outside for tradie utes, trailers, and family vehicles.
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-4">Opening Hours</h4>
                <ul className="text-xs text-stone-300 space-y-1.5">
                  <li className="flex justify-between">
                    <span className="text-stone-400">Mon – Fri:</span>
                    <span className="font-semibold text-white">6:30 AM – 5:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-stone-400">Saturday:</span>
                    <span className="font-semibold text-white">6:30 AM – 1:30 PM</span>
                  </li>
                  <li className="flex justify-between text-amber-400 font-semibold">
                    <span>Sunday:</span>
                    <span>CLOSED</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-4">Pre-Orders &amp; Canteens</h4>
                <p className="text-sm text-stone-300 mb-1">
                  Phone: <a href="tel:0357212496" className="text-white hover:underline font-bold">(03) 5721 2496</a>
                </p>
                <p className="text-xs text-stone-400 mb-3">
                  Email: <a href="mailto:appinbakery@bigpond.com" className="text-amber-300 hover:underline">appinbakery@bigpond.com</a>
                </p>
                <p className="text-xs text-stone-400">
                  Catering for local Wangaratta footy, netball &amp; cricket clubs, school carnivals, and morning work crews.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
              &copy; 2026 Appin Street Bakery. All rights reserved. 98 Appin Street, Wangaratta VIC 3677.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
