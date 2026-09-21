import Image from "next/image";

const FEATURED_BAKES = [
  { src: "https://images.unsplash.com/photo-1608039783021-6116a558f0c5?q=80&w=1200&auto=format&fit=crop", label: "The hot counter", title: "Hand-crimped, proper pies", copy: "Golden pastry, rich gravy, and enough filling to make lunch count." },
  { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop", label: "Before dawn", title: "Crusty loaves every morning", copy: "Baked early for sandwiches, toast, and the drive home." },
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop", label: "Sweet finish", title: "Slices worth stopping for", copy: "Classic vanilla slice, hedgehog, caramel, and a little nostalgia." },
];

export default function BakeryGallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
        <div><span className="text-xs font-black uppercase tracking-[0.18em] theme-accent">Made here, early</span><h2 className="display-type text-4xl sm:text-5xl font-black mt-2">A little look inside the counter</h2></div>
        <p className="theme-muted max-w-sm text-sm leading-relaxed">The good stuff changes by the tray, but the rule stays the same: bake it fresh, serve it proud.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {FEATURED_BAKES.map((bake) => (
          <article key={bake.title} className="theme-surface group overflow-hidden rounded-[1.75rem] border shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="aspect-[1.28] overflow-hidden"><Image src={bake.src} alt="" width={720} height={560} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
            <div className="p-5"><span className="text-[10px] font-black uppercase tracking-[0.16em] theme-accent">{bake.label}</span><h3 className="display-type text-2xl font-bold mt-1">{bake.title}</h3><p className="theme-muted text-sm leading-relaxed mt-2">{bake.copy}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
