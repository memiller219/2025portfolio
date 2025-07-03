import { cn } from "../lib/utils";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="flex justify-end  p-2">
        <div className="hidden m-auto pr-10 flex md:flex space-x-6">
          {navItems.map((links, key) => (
            <a
              key={key}
              href={links.href}
              className="text-white hover:text-primary/50 transition-colors duration-300 "
            >
              {links.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:flex md:hidden p-4 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((links, key) => (
              <a
                key={key}
                href={links.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                onClick={() => setIsMenuOpen(false)}
              >
                {links.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
