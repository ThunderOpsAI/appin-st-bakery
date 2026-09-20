import type { Metadata } from "next";
import "./globals.css";
import ThemeLab from "@/components/ThemeLab";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Appin Street Bakery | Wangaratta Early Morning Bakery & Tradie Smoko",
  description: "Wangaratta's community bakery open from 6:30am. Signature meat pies, pasties, gourmet sausage rolls, Italian crusty loaves, made-to-order sandwiches, and vanilla slice.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="toasted">
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <header className="sticky top-0 z-50 bg-[var(--surface)]/90 backdrop-blur-xl border-b theme-border shadow-[0_8px_30px_-20px_var(--shadow-color)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="flex items-center justify-between">
                <a href="/" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl theme-accent-bg flex items-center justify-center font-black text-xl shadow-md group-hover:rotate-[-5deg] group-hover:scale-105 transition-transform">✦</div>
                  <div><span className="display-type text-xl sm:text-2xl font-black tracking-tight leading-tight block">Appin Street Bakery</span><p className="text-xs theme-accent font-semibold">Open from 6:30am · 98 Appin Street, Wangaratta</p></div>
                </a>
                <a href="tel:0357212496" className="md:hidden theme-button rounded-full px-3 py-1.5 font-bold text-xs">Call us</a>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 pt-2 md:pt-0 border-t theme-border md:border-none text-xs sm:text-sm font-semibold">
                <nav className="flex items-center gap-3 sm:gap-5 theme-muted"><a href="/menu">Daily Menu</a><a href="/catering">Smoko Pre-Orders</a><a href="/catering#catering">Bulk &amp; Catering</a><a href="/#hours">Hours &amp; Location</a></nav>
                <div className="hidden lg:flex items-center gap-2 theme-accent-soft px-3 py-1 rounded-full text-xs"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /><span>Early Open 6:30 AM</span></div>
                <a href="tel:0357212496" className="hidden md:inline-flex items-center gap-2 theme-button px-4 py-2 font-bold text-sm rounded-full">(03) 5721 2496</a>
              </div>
            </div>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="theme-dark border-t pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div><div className="flex items-center gap-3 mb-3"><div className="w-8 h-8 rounded-lg theme-accent-bg flex items-center justify-center font-black text-base">✦</div><span className="display-type text-xl font-black">Appin Street Bakery</span></div><p className="text-xs opacity-65 leading-relaxed mb-4">Wangaratta&apos;s proud community bakery. Baking fresh bread, pies, pasties, salad rolls, and classic bakery slices before dawn since day one.</p><div className="inline-block px-3 py-1 rounded-full theme-accent-soft text-xs font-bold border">Early morning smoko ready</div></div>
              <div><h4 className="text-xs uppercase tracking-widest theme-accent font-bold mb-4">Location &amp; Access</h4><p className="text-sm font-semibold mb-1">98 Appin Street</p><p className="text-xs opacity-65 mb-2">Wangaratta, VIC 3677</p><p className="text-xs opacity-65 leading-relaxed">Easy street parking right outside for tradie utes, trailers, and family vehicles.</p></div>
              <div><h4 className="text-xs uppercase tracking-widest theme-accent font-bold mb-4">Opening Hours</h4><ul className="text-xs space-y-1.5 opacity-80"><li className="flex justify-between"><span className="opacity-65">Mon – Fri:</span><span className="font-semibold">6:30 AM – 5:30 PM</span></li><li className="flex justify-between"><span className="opacity-65">Saturday:</span><span className="font-semibold">6:30 AM – 1:30 PM</span></li><li className="flex justify-between theme-accent font-semibold"><span>Sunday:</span><span>CLOSED</span></li></ul></div>
              <div><h4 className="text-xs uppercase tracking-widest theme-accent font-bold mb-4">Pre-Orders &amp; Canteens</h4><p className="text-sm mb-1">Phone: <a href="tel:0357212496" className="font-bold hover:underline">(03) 5721 2496</a></p><p className="text-xs opacity-65 mb-3">Email: <a href="mailto:appinbakery@bigpond.com" className="theme-accent hover:underline">appinbakery@bigpond.com</a></p><p className="text-xs opacity-65">Catering for local Wangaratta footy, netball &amp; cricket clubs, school carnivals, and morning work crews.</p></div>
            </div><div className="pt-8 border-t border-white/10 text-center text-xs opacity-45">&copy; 2026 Appin Street Bakery. All rights reserved. 98 Appin Street, Wangaratta VIC 3677.</div></div>
          </footer>
          <ThemeLab />
        </ThemeProvider>
      </body>
    </html>
  );
}
