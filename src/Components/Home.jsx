import SectionLabel from "./SectionLabel";
import { useNavigate } from "react-router-dom";

const highlights = [
  { count: "4.9★", label: "Customer Rating" },
  { count: "48+", label: "Menu Items" },
  { count: "6+", label: "Years Brewing" },
];

const features = [
  {
    icon: "☕",
    title: "Signature Brews",
    desc: "Freshly roasted beans, slow-crafted espresso, and seasonal specials made with care.",
  },
  {
    icon: "🥐",
    title: "Fresh Bakes",
    desc: "Croissants, cookies, sourdough toast, and café bites baked fresh every morning.",
  },
  {
    icon: "🎶",
    title: "Warm Ambience",
    desc: "Soft lights, cozy corners, weekend music, and a space that feels like home.",
  },
];

const menuItems = [
  {
    tag: "Best Seller",
    name: "Hazelnut Velvet Latte",
    desc: "Espresso, steamed milk, hazelnut syrup and cocoa dust.",
    price: "₹320",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=700&q=80",
  },
  {
    tag: "Fresh Bake",
    name: "Butter Croissant",
    desc: "Flaky, golden, buttery and baked fresh every morning.",
    price: "₹210",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=80",
  },
  {
    tag: "Chef Choice",
    name: "Avocado Toast",
    desc: "Sourdough, avocado, feta, chilli flakes and microgreens.",
    price: "₹480",
    img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=700&q=80",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=700&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=80",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=80",
];

export default function HomePage({ setActivePage }) {
    const navigate = useNavigate()
//   const navigate = (page) => {
//     setActivePage(page);
//     window.scrollTo(0, 0);
//   };

  return (
    <div className="min-h-screen bg-[#FFF7EC] text-[#2B170A]">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-16 pt-32 pb-20">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#E8B573]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-[300px] h-[300px] bg-[#7A3E1D]/10 rounded-full blur-3xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-3 bg-white/70 border border-[#E8D2B8] rounded-full px-5 py-2 mb-7 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#B66A2C]" />
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#8A562F]">
                Est. 2026 · Hyderabad
              </span>
            </div>

            <h1 className="font-playfair text-7xl md:text-9xl font-bold leading-[0.9] tracking-[-0.05em] mb-7">
              <span className="text-[#2B170A]">Sip</span>{" "}
              <span className="text-[#C17A3D] italic">Slow.</span>
              <br />
              <span className="text-[#2B170A]">Stay</span>{" "}
              <span className="text-[#C17A3D] italic">Warm.</span>
              <br />
              <span className="text-[#2B170A]">Feel</span>{" "}
              <span className="text-[#C17A3D] italic">Home.</span>
            </h1>

            <p className="text-[#7A5A3A] text-lg leading-relaxed max-w-xl mb-9">
              A cozy neighbourhood café serving rich coffee, fresh bakes, and
              calm corners for conversations, work, and weekend plans.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/menu")}
                className="bg-[#8B451F] text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-[#8B451F]/20 hover:bg-[#5C2D14] hover:-translate-y-1 transition"
              >
                Explore Menu
              </button>

              <button
                onClick={() => navigate("about")}
                className="bg-white text-[#8B451F] border border-[#E6C9A8] px-8 py-4 rounded-full font-bold hover:bg-[#F7E5D0] hover:-translate-y-1 transition"
              >
                Our Story
              </button>
            </div>

            <div className="grid grid-cols-3 gap-5 max-w-lg mt-12">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/75 rounded-3xl p-5 border border-[#E8D2B8] shadow-sm"
                >
                  <h3 className="font-playfair text-3xl text-[#8B451F]">
                    {item.count}
                  </h3>
                  <p className="text-xs text-[#7A5A3A] font-semibold uppercase tracking-widest">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-8 bg-[#2B170A] text-white rounded-[2rem] p-6 z-20 shadow-2xl hidden md:block">
              <p className="text-sm text-white/60">Today’s Pick</p>
              <h3 className="font-playfair text-2xl">Caramel Cloud Latte</h3>
              <p className="text-[#E8B573] font-bold mt-1">₹340</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=80"
                alt="Cafe coffee"
                className="h-[520px] w-full object-cover rounded-t-full rounded-b-[2.5rem] shadow-2xl"
              />
              <div className="space-y-4 pt-16">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=80"
                  alt="Coffee cup"
                  className="h-64 w-full object-cover rounded-[2rem] shadow-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=700&q=80"
                  alt="Coffee beans"
                  className="h-56 w-full object-cover rounded-[2rem] shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-[#2B170A] text-white rounded-[2rem] p-8 hover:-translate-y-2 transition shadow-xl"
            >
              <div className="text-5xl mb-5">{item.icon}</div>
              <h3 className="font-playfair text-2xl mb-3">{item.title}</h3>
              <p className="text-white/65 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="bg-[#2B170A] px-6 md:px-16 py-24 relative overflow-hidden">
        <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-[#E8B573]/10 blur-3xl" />

        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Fresh From The Counter</SectionLabel>
            <h2 className="font-playfair text-5xl text-white mt-3">
              Café favourites you’ll crave again.
            </h2>
          </div>

          <button
            onClick={() => navigate("menu")}
            className="w-fit bg-[#E8B573] text-[#2B170A] px-7 py-3 rounded-full font-bold hover:bg-white transition"
          >
            View Full Menu
          </button>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-7">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-[#FFF7EC] rounded-[2rem] overflow-hidden shadow-2xl group"
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

      {/* AMBIENCE */}
      <section className="px-6 md:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="grid grid-cols-2 gap-4">
          {gallery.map((img, index) => (
            <img
              key={img}
              src={img}
              alt="Cafe ambience"
              className={`w-full object-cover rounded-[2rem] shadow-lg ${
                index % 2 === 0 ? "h-72" : "h-72 mt-10"
              }`}
            />
          ))}
        </div>

        <div>
          <SectionLabel>A Place To Pause</SectionLabel>

          <h2 className="font-playfair text-5xl text-[#2B170A] leading-tight mb-7">
            Built for slow mornings, warm evenings, and everything in between.
          </h2>

          <p className="text-[#7A5A3A] leading-loose mb-8">
            BrewHaven is more than a coffee stop. It is a soft-lit space with
            wooden tables, quiet corners, fresh aromas, and a team that
            remembers your usual order.
          </p>

          <div className="space-y-4 mb-9">
            {["Cozy seating", "Free Wi-Fi", "Fresh bakes daily"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-[#8B451F] text-white flex items-center justify-center">
                  ✓
                </span>
                <span className="font-semibold text-[#2B170A]">{item}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("contact")}
            className="bg-[#8B451F] text-white px-8 py-4 rounded-full font-bold hover:bg-[#5C2D14] transition"
          >
            Reserve a Table
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 pb-24">
        <div className="relative overflow-hidden rounded-[3rem] min-h-[440px] flex items-center p-8 md:p-16 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&q=80"
            alt="Cafe table"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#2B170A]/90 via-[#2B170A]/65 to-transparent" />

          <div className="relative z-10 max-w-xl">
            <p className="text-[#E8B573] uppercase tracking-[0.25em] text-xs font-bold mb-4">
              Visit Us Today
            </p>

            <h2 className="font-playfair text-5xl md:text-6xl text-white leading-tight mb-6">
              Your next coffee break deserves a better place.
            </h2>

            <p className="text-white/70 leading-relaxed mb-8">
              Come for the coffee, stay for the comfort. BrewHaven is open daily
              for breakfast, brunch, evening coffee, and weekend catch-ups.
            </p>

            <button
              onClick={() => navigate("contact")}
              className="bg-[#E8B573] text-[#2B170A] px-8 py-4 rounded-full font-bold hover:bg-white transition"
            >
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
