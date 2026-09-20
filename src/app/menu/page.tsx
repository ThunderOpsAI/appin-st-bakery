import BakeryMenu from "@/components/BakeryMenu";
import BakeryGallery from "@/components/BakeryGallery";
import ScrollReveal from "@/components/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu & Gallery | Appin Street Bakery",
  description: "Explore our daily bakery menu and view photos of our fresh pies, pasties, and cakes.",
};

export default function MenuPage() {
  return (
    <div className="space-y-20 py-20">
      {/* Daily Menu Section */}
      <ScrollReveal>
        <section id="daily-menu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BakeryMenu />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <BakeryGallery />
      </ScrollReveal>
    </div>
  );
}
