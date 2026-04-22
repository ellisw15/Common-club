import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafe Menu | The Common",
  description:
    "Specialty coffee, high-grade matcha, cold-pressed juices and seasonal food at The Common cafe, Stoneygate, Leicester.",
};

const menuSections = [
  {
    category: "Hot Drinks",
    items: [
      { name: "Specialty Flat White", desc: "Single origin espresso, steamed whole milk", price: "£3.80" },
      { name: "Oat Flat White", desc: "Single origin espresso, Oatly barista", price: "£4.20" },
      { name: "Ceremonial Matcha Latte", desc: "Premium ceremonial grade, your choice of milk", price: "£4.50" },
      { name: "Dirty Matcha", desc: "Ceremonial matcha over a shot of espresso", price: "£4.80" },
      { name: "Turmeric Latte", desc: "House spice blend, oat milk, honey", price: "£4.20" },
      { name: "Filter Coffee", desc: "Rotating single origin, black", price: "£3.00" },
      { name: "Herbal Tea", desc: "Selection of loose-leaf teas", price: "£3.00" },
    ],
  },
  {
    category: "Cold Drinks",
    items: [
      { name: "Cold Brew", desc: "12-hour steeped, served over ice", price: "£3.80" },
      { name: "Iced Matcha", desc: "Ceremonial matcha, oat milk, ice", price: "£4.80" },
      { name: "Cold-Press: Green", desc: "Cucumber, apple, spinach, ginger, lemon", price: "£5.50" },
      { name: "Cold-Press: Glow", desc: "Carrot, orange, turmeric, ginger", price: "£5.50" },
      { name: "Cold-Press: Reset", desc: "Beetroot, apple, celery, lemon", price: "£5.50" },
      { name: "Still / Sparkling Water", desc: "", price: "£1.50" },
    ],
  },
  {
    category: "Food",
    items: [
      { name: "Acai Bowl", desc: "Frozen acai, banana, almond milk, topped with granola, fresh fruit, honey", price: "£9.00" },
      { name: "Avocado Toast", desc: "Sourdough, smashed avocado, chilli flakes, lemon, microgreens", price: "£8.50" },
      { name: "Protein Pot", desc: "Soft-boiled eggs, edamame, quinoa, tahini, sesame", price: "£8.00" },
      { name: "Seasonal Granola", desc: "House-made granola, coconut yoghurt, seasonal compote", price: "£6.50" },
      { name: "Energy Balls", desc: "Oat, cacao, dates, almond butter — 2 per serving", price: "£3.50" },
      { name: "Banana Bread", desc: "House-baked, walnut, oat topping", price: "£3.50" },
      { name: "Seasonal Salad", desc: "Ask your server for today's bowl", price: "£9.50" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 lg:px-10 bg-[#C4A882]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#7C6548] font-medium mb-4">
            Upstairs
          </p>
          <h1
            className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] text-[#1A1814]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Cafe Menu
          </h1>
          <p className="mt-4 text-base text-[#1A1814]/65 max-w-xl font-light leading-relaxed">
            High-grade matcha, specialty coffee, cold-pressed juices and seasonal
            food. Everything is made with the same intention we bring to the studio.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-20">
          {menuSections.map((section) => (
            <div key={section.category}>
              <div className="flex items-center gap-6 mb-8">
                <h2
                  className="text-2xl font-light text-[#1A1814] shrink-0"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {section.category}
                </h2>
                <div className="flex-1 h-px bg-[#E8E0D4]" />
              </div>
              <div className="flex flex-col gap-px bg-[#E8E0D4]">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-[#FAF7F2] px-6 py-5 flex items-start justify-between gap-6"
                  >
                    <div>
                      <p className="text-sm font-medium text-[#1A1814]">{item.name}</p>
                      {item.desc && (
                        <p className="text-xs text-[#1A1814]/45 font-light mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    <span className="text-sm font-medium text-[#7C6548] shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="py-12 px-6 lg:px-10 bg-[#F0EDE8] text-center">
        <p className="text-sm text-[#1A1814]/45 max-w-lg mx-auto leading-relaxed font-light">
          Our seasonal menu rotates regularly. Please speak to a member of the cafe team
          for allergen information. All prices include VAT.
        </p>
      </section>
    </>
  );
}
