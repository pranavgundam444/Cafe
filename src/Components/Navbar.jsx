import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Menu", path: "/menu" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigateRouter = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (path) => {
    navigateRouter(path);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-5 md:px-8 ${
        scrolled
          ? "bg-brown/95 backdrop-blur-md py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      {/* Logo */}
      <button
        onClick={() => navigate("/")}
        className="font-playfair text-cream text-2xl font-bold tracking-tight"
      >
        Kapi <span className="text-caramel italic">Cafe</span>
      </button>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map((link) => (
          <li key={link.path}>
            <button
              onClick={() => navigate(link.path)}
              className="text-sm font-bold tracking-widest uppercase text-cream/80 hover:text-caramel"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <button
  onClick={() => navigate("/reserve")}
  className="hidden md:block bg-caramel text-cream-light text-sm font-bold tracking-widest uppercase px-5 py-2 rounded-sm"
>
  Reserve a Table
</button>

      {/* Mobile Hamburger */}

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-cream flex flex-col gap-1.5 z-50"
      >
        <span
          className={`block w-6 h-0.5 bg-red-300 transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-red-300 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-red-300 transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-brown/98 backdrop-blur-md py-6 flex flex-col items-center gap-5 md:hidden z-40">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className="text-sm font-bold tracking-widest uppercase text-cream/80 hover:text-caramel"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => navigate("/contact")}
            className="mt-2 bg-caramel text-white text-sm font-bold tracking-widest uppercase px-6 py-2 rounded-sm"
          >
            Reserve a Table
          </button>
        </div>
      )}
    </nav>
  );
}
