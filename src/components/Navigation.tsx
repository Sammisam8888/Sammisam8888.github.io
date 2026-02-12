
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "HOME" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#skills", label: "SKILLS" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#about", label: "ABOUT" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <>
      <nav 
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
            scrolled ? "py-4" : "py-6"
         }`}
      >
        <div 
          className={`mx-auto transition-all duration-500 ${
            scrolled 
               ? "max-w-4xl bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 shadow-lg" 
               : "container px-4 bg-transparent border-transparent"
          } flex justify-between items-center`}
        >
          <a href="#" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity text-black">
            S.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium tracking-widest text-gray-500 hover:text-black transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1 text-gray-500 hover:text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
         className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-transform duration-500 md:hidden flex items-center justify-center ${
            isOpen ? "translate-x-0" : "translate-x-full"
         }`}
      >
         <div className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-2xl font-bold text-gray-500 hover:text-black transition-colors tracking-tight"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <button 
                className="mt-8 p-4 rounded-full bg-black/5 text-black hover:bg-black/10 transition-colors"
                onClick={() => setIsOpen(false)}
            >
                <X size={24} />
            </button>
         </div>
      </div>
    </>
  );
};
