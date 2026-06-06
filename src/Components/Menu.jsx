import SectionLabel from "./SectionLabel";

const categories = [
  {
    title: "Coffee Classics",
    items: [
      ["Classic Cappuccino", "₹260"],
      ["Hazelnut Velvet Latte", "₹320"],
      ["Caramel Cloud Latte", "₹340"],
      ["Mocha Melt", "₹330"],
    ],
  },
  {
    title: "Cold Brews",
    items: [
      ["Vanilla Cold Brew Float", "₹395"],
      ["Iced Americano", "₹240"],
      ["Cold Brew Tonic", "₹310"],
      ["Creamy Iced Latte", "₹290"],
    ],
  },
  {
    title: "Fresh Bakes",
    items: [
      ["Butter Croissant", "₹210"],
      ["Chocolate Cookie", "₹160"],
      ["Banana Walnut Bread", "₹190"],
      ["Cinnamon Roll", "₹230"],
    ],
  },
  {
    title: "Brunch Plates",
    items: [
      ["Avocado Toast", "₹480"],
      ["Berry Pancake Stack", "₹420"],
      ["Sourdough Sandwich", "₹390"],
      ["Herbed Mushroom Toast", "₹410"],
    ],
  },
];

const specials = [
  {
    tag: "Best Seller",
    name: "Hazelnut Velvet Latte",
    desc: "Double shot espresso, steamed milk, house hazelnut syrup, and cocoa dust.",
    price: "₹320",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80",
  },
  {
    tag: "Chef Pick",
    name: "Avocado Toast",
    desc: "Sourdough, smashed avocado, feta, chilli flakes, and fresh microgreens.",
    price: "₹480",
    img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80",
  },
  {
    tag: "New",
    name: "Cold Brew Float",
    desc: "Slow-steeped cold brew with vanilla ice cream and sea salt foam.",
    price: "₹395",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
  },
];

export default function MenuPage() {
  return (
    <div className="bg-[#FFF7EC] text-[#2B170A]">
      {/* HERO */}
      <section className="relative min-h-[75vh] px-6 md:px-16 pt-32 pb-20 overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#E8B573]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#8B451F]/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/70 border border-[#E8D2B8] rounded-full px-5 py-2 mb-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B66A2C]" />
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#8A562F]">
              Fresh From The Counter
            </span>
          </div>

          <h1 className="font-playfair text-6xl md:text-8xl leading-[0.95] tracking-tight !text-[#2B170A] mb-7">
            Our Café
            <br />
            Menu.
          </h1>

          <p className="text-[#7A5A3A] text-lg leading-relaxed max-w-xl">
            From smooth espresso to buttery croissants and warm brunch plates,
            everything is crafted to make your café break feel special.
          </p>
        </div>

        <div className="relative z-10">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&q=80"
            alt="Coffee menu"
            className="w-full h-[520px] object-cover rounded-[3rem] shadow-2xl"
          />

          <div className="absolute -bottom-8 left-8 bg-[#2B170A] text-white rounded-[2rem] p-6 shadow-2xl">
            <p className="text-white/55 text-sm">Today’s Special</p>
            <h3 className="font-playfair text-2xl">Caramel Cloud Latte</h3>
            <p className="text-[#E8B573] font-bold mt-1">₹340</p>
          </div>
        </div>
      </section>

      {/* SPECIALS */}
      <section className="px-6 md:px-16 pb-24">
        <SectionLabel>Customer Favourites</SectionLabel>

        <h2 className="font-playfair text-5xl text-[#2B170A] mb-12">
          Most loved this week.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {specials.map((item, index) => (
            <div
              key={item.name}
              className={`bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#E8D2B8] hover:-translate-y-2 hover:shadow-2xl transition group ${
                index === 1 ? "md:mt-10" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <span className="absolute top-4 left-4 bg-[#8B451F] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                  {item.tag}
                </span>
              </div>

              <div className="p-7">
                <div className="flex justify-between gap-4 items-start mb-3">
                  <h3 className="font-playfair text-2xl text-[#2B170A]">
                    {item.name}
                  </h3>
                  <span className="text-[#8B451F] font-bold text-xl">
                    {item.price}
                  </span>
                </div>

                <p className="text-[#7A5A3A] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL MENU */}
      <section className="bg-[#2B170A] px-6 md:px-16 py-24">
        <div className="mb-12">
          <SectionLabel>Full Menu</SectionLabel>
          <h2 className="font-playfair text-5xl text-white mt-3">
            Something warm for every mood.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-[#FFF7EC] rounded-[2rem] p-7 md:p-9 shadow-2xl"
            >
              <h3 className="font-playfair text-3xl text-[#2B170A] mb-7">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.items.map(([name, price]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-5 border-b border-[#E8D2B8] pb-4"
                  >
                    <div>
                      <h4 className="font-semibold text-[#2B170A]">{name}</h4>
                      <p className="text-sm text-[#7A5A3A]">
                        Freshly prepared at BrewHaven.
                      </p>
                    </div>

                    <span className="font-playfair text-2xl text-[#8B451F]">
                      {price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-24">
        <div className="relative overflow-hidden rounded-[3rem] min-h-[420px] flex items-center p-8 md:p-16 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&q=80"
            alt="Cafe table"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#2B170A]/90 via-[#2B170A]/70 to-transparent" />

          <div className="relative z-10 max-w-xl">
            <p className="text-[#E8B573] uppercase tracking-[0.25em] text-xs font-bold mb-4">
              Hungry Already?
            </p>

            <h2 className="font-playfair text-5xl md:text-6xl text-white leading-tight mb-6">
              Good coffee tastes better when shared.
            </h2>

            <p className="text-white/70 leading-relaxed mb-8">
              Visit us for breakfast, brunch, evening coffee, or a slow weekend
              catch-up with your favourite people.
            </p>

            <button className="bg-[#E8B573] text-[#2B170A] px-8 py-4 rounded-full font-bold hover:bg-white transition">
              Reserve a Table
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}