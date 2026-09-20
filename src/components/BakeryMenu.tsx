"use client";

import { useState } from "react";

interface MenuItem {
  name: string;
  badge?: string;
  desc: string;
  price: string;
}

interface MenuCategory {
  id: string;
  label: string;
  icon: string;
  items: MenuItem[];
  note?: string;
}

const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "pies",
    label: "Meat Pies 🥧",
    icon: "🥧",
    note: "All pies baked fresh daily with flaky golden puff pastry crowns and rich shortcrust bases.",
    items: [
      {
        name: "Lamb & Rosemary Pie",
        badge: "House Signature",
        desc: "Tender slow-braised local lamb in rich rosemary and garlic gravy.",
        price: "$6.80",
      },
      {
        name: "Stockman's Pie",
        badge: "Tradie Favourite",
        desc: "Chunky Victorian beef steak, smoky diced bacon, sweet onion, and cracked black pepper.",
        price: "$6.80",
      },
      {
        name: "Steak & Mushroom Pie",
        desc: "Slow-simmered beef steak with tender sliced button mushrooms in savory dark gravy.",
        price: "$6.50",
      },
      {
        name: "Creamy Chicken & Vegetable",
        desc: "Tender chicken breast pieces, peas, corn, and diced carrots in a rich velvety white sauce.",
        price: "$6.50",
      },
      {
        name: "Potato / Cottage Pie",
        badge: "Topped with Mash",
        desc: "Traditional seasoned beef mince topped with golden baked mashed potatoes and melted cheddar.",
        price: "$6.50",
      },
      {
        name: "Traditional Mince Beef Pie",
        desc: "The classic Australian bakery staple. 100% Australian ground beef in hearty seasoned gravy.",
        price: "$5.80",
      },
      {
        name: "Family Take-Home Pies",
        badge: "Serves 4–5",
        desc: "Large family size pies ready to heat at home. Available in Chunky Beef, Lamb Rosemary, or Chicken Veg.",
        price: "$18.00",
      },
    ],
  },
  {
    id: "savouries",
    label: "Pasties & Sausage Rolls",
    icon: "🥐",
    note: "Golden rolled pastry hand-crimped daily before 6:00 AM.",
    items: [
      {
        name: "Traditional Cornish Pastie",
        badge: "Hand-Crimped",
        desc: "Diced beef steak, potatoes, pumpkin, swede, and onion wrapped in crisp golden pastry.",
        price: "$6.20",
      },
      {
        name: "Vegetable Pastie",
        badge: "Vegetarian",
        desc: "Wholesome seasonal diced root vegetables and garden herbs in flaky pastry.",
        price: "$6.00",
      },
      {
        name: "Classic Sausage Roll",
        badge: "Bakery Classic",
        desc: "Seasoned lean sausage meat with mild herbs and onions wrapped in crisp puff pastry.",
        price: "$4.50",
      },
      {
        name: "Gourmet Pork & Fennel Roll",
        badge: "Gourmet Choice",
        desc: "Premium pork mince infused with toasted fennel seeds, garlic, and fresh herbs.",
        price: "$5.50",
      },
      {
        name: "Party Pies & Mini Sausage Rolls",
        badge: "Dozen Pack",
        desc: "Pack of 12 bite-sized hot party savouries — ideal for kids parties or smoko sharing.",
        price: "$18.00 / doz",
      },
    ],
  },
  {
    id: "breads",
    label: "Artisan Breads & Rolls 🥖",
    icon: "🥖",
    note: "Baked from scratch each morning. Wangaratta's favourite crusty loaves.",
    items: [
      {
        name: "Italian Continental Crusty Loaf",
        badge: "Local Favourite",
        desc: "Traditional rustic European crust with a soft, airy, open crumb. Celebrating Wangaratta's Italian heritage.",
        price: "$5.50",
      },
      {
        name: "Traditional Sandwich Loaf",
        desc: "White, wholemeal, or honey multigrain square block loaf, sliced to your preference.",
        price: "$4.80",
      },
      {
        name: "Vienna Crusty Loaf",
        badge: "Sesame / Poppy",
        desc: "Classic pointed loaf with crisp scored crust and soft buttery crumb.",
        price: "$5.20",
      },
      {
        name: "Fresh Daily Bread Rolls",
        badge: "Knot, Round, Crusty",
        desc: "Baked fresh daily before dawn. Perfect for burgers, sandwiches, or soup dipping.",
        price: "$1.00 ea / $5.50 half-doz",
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Made-To-Order Sandwich Bar 🥗",
    icon: "🥪",
    note: "Custom-built on our fresh bakery rolls or soft wraps with our full refrigerated salad bar.",
    items: [
      {
        name: "Roast Chicken Salad Roll",
        badge: "Crowd Favourite",
        desc: "Shredded roast chicken breast, mayonnaise, crisp lettuce, tomato, cucumber, beetroot, and cheese.",
        price: "$9.50",
      },
      {
        name: "Shaved Leg Ham & Salad Roll",
        desc: "Smoky Australian ham off the bone with your choice of pickles, mustard, and crisp garden salads.",
        price: "$8.50",
      },
      {
        name: "Sliced Roast Beef & Seeded Mustard",
        desc: "Tender cold-sliced roast beef, cheddar cheese, tomato, onion, and whole grain mustard on crusty loaf.",
        price: "$9.50",
      },
      {
        name: "Curried Egg & Lettuce Roll",
        badge: "House Recipe",
        desc: "Farm eggs mashed with creamy spiced curry mayonnaise and crisp shredded iceberg lettuce.",
        price: "$8.00",
      },
      {
        name: "Tuna & Sweet Corn Salad Wrap",
        desc: "Seasoned flaked tuna with sweet corn, Spanish onion, lettuce, and cucumber in a soft flour wrap.",
        price: "$9.00",
      },
    ],
  },
  {
    id: "sweets",
    label: "Sweets & Slices 🍰",
    icon: "🍰",
    note: "Handmade old-fashioned bakery sweets, slices, and afternoon tea treats.",
    items: [
      {
        name: "Traditional Vanilla Slice",
        badge: "Legendary Classic",
        desc: "Thick, silky smooth vanilla custard layered between flaky butter puff pastry and topped with sweet passionfruit fondant icing.",
        price: "$5.50",
      },
      {
        name: "Hedgehog Slice",
        badge: "Best Seller",
        desc: "Crushed biscuits folded through rich cocoa fudge and topped with smooth milk chocolate.",
        price: "$4.80",
      },
      {
        name: "Caramel Slice",
        desc: "Shortbread biscuit base, thick creamy golden caramel layer, and dark chocolate topping.",
        price: "$4.80",
      },
      {
        name: "Apple Turnovers & Danish Pastries",
        desc: "Flaky layered pastry filled with spiced stewed apples, mock cream, or sweet fruit custard.",
        price: "$5.00",
      },
      {
        name: "Jam & Custard Filled Donuts",
        desc: "Soft cinnamon-dusted or iced yeast donuts generously injected with strawberry jam or vanilla custard.",
        price: "$4.00",
      },
      {
        name: "Neenish & Custard Tarts",
        badge: "Classic Tart",
        desc: "Shortcrust tartlets with traditional half-brown half-white chocolate icing or baked nutmeg custard.",
        price: "$4.50",
      },
      {
        name: "Custom Celebration Cakes",
        badge: "Pre-Order",
        desc: "Sponge, mud cake, or fresh cream cakes for birthdays, sports club milestones, and celebrations.",
        price: "Inquire for quote",
      },
    ],
  },
];

export default function BakeryMenu() {
  const [activeTab, setActiveTab] = useState("pies");
  const activeCategory = MENU_CATEGORIES.find((cat) => cat.id === activeTab) || MENU_CATEGORIES[0];

  return (
    <div className="theme-surface rounded-[2rem] p-6 sm:p-10 border shadow-lg">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
          Baked Fresh Daily from 6:30am
        </span>
        <h3 className="display-type text-4xl sm:text-5xl font-black theme-accent mt-2">
          Daily Bakery Menu
        </h3>
        <p className="text-stone-600 text-sm mt-1">
          Explore our hot savoury counter, crusty artisan loaves, custom sandwich bar, and nostalgic sweet treats.
        </p>
      </div>

      {/* Sticky Tab Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-amber-100 scrollbar-none">
        {MENU_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === cat.id
                ? "bg-amber-600 text-white shadow-md shadow-amber-600/30 scale-105"
                : "bg-stone-100 text-stone-700 hover:bg-amber-50 hover:text-amber-900"
            }`}
          >
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Category Note */}
      {activeCategory.note && (
        <div className="mb-6 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium flex items-center gap-2">
          <span>✨</span>
          <span>{activeCategory.note}</span>
        </div>
      )}

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeCategory.items.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#faf8f5] border border-amber-200/60 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                {item.badge ? (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    {item.badge}
                  </span>
                ) : (
                  <span />
                )}
                <span className="font-black text-amber-900 text-sm bg-white px-2.5 py-1 rounded-lg border border-amber-200 shadow-2xs">
                  {item.price}
                </span>
              </div>
              <h4 className="font-black text-stone-900 text-base mb-1">{item.name}</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">{item.desc}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between text-xs font-semibold text-amber-800">
              <span>Ready in-store</span>
              <a href="tel:0357212496" className="hover:underline text-[11px] text-stone-500">
                📞 Hold item
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
