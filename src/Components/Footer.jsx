export default function Footer({ setActivePage }) {
  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#1C1008]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 py-16">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="font-playfair text-cream text-2xl font-bold mb-3">
            Brew<span className="text-caramel italic">Haven</span>
          </div>
          <p className="text-cream/40 text-sm leading-relaxed font-light max-w-xs">
            A craft café rooted in community, quality, and the belief that the best conversations happen over good coffee.
          </p>
          <div className="flex gap-3 mt-6">
            {["in", "tw", "ig", "fb"].map((s) => (
              <button
                key={s}
                className="w-9 h-9 rounded-full border border-cream/15 text-cream/50 text-xs font-bold hover:bg-caramel hover:border-caramel hover:text-white transition-all duration-300"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-cream font-bold text-xs tracking-[0.15em] uppercase mb-4">Explore</h4>
          <ul className="space-y-2">
            {[["Home","home"],["About Us","about"],["Our Menu","menu"],["Contact","contact"]].map(([label, page]) => (
              <li key={page}>
                <button
                  onClick={() => navigate(page)}
                  className="text-cream/40 text-sm font-light hover:text-caramel transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-cream font-bold text-xs tracking-[0.15em] uppercase mb-4">Newsletter</h4>
          <p className="text-cream/35 text-xs mb-4 font-light">Weekly specials, events & seasonal menus.</p>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full bg-cream/6 border border-cream/12 text-cream text-sm px-3 py-2.5 rounded-sm mb-2 outline-none focus:border-caramel/50 placeholder:text-cream/25 transition-colors"
          />
          <button className="w-full bg-caramel text-white text-xs font-bold tracking-widest uppercase py-2.5 rounded-sm hover:bg-caramel-dark transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      <div className="border-t border-cream/5 px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-cream/25 text-xs">© 2024 BrewHaven Café · Hyderabad · All rights reserved</p>
        <p className="text-cream/25 text-xs">Made with ☕ and good intentions</p>
      </div>
    </footer>
  );
}