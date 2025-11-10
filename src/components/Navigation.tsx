import { useState } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import treeLogo from "@/assets/tree-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src={treeLogo} alt="Havens Nøgle ApS" className="h-12 w-auto" />
            <span className="text-white font-bold text-lg hidden sm:block">
              Havens Nøgle ApS
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink
              to="/"
              className="text-white hover:text-lime transition-colors"
              activeClassName="text-lime font-semibold"
            >
              Forside
            </NavLink>
            <NavLink
              to="/ydelser"
              className="text-white hover:text-lime transition-colors"
              activeClassName="text-lime font-semibold"
            >
              Ydelser
            </NavLink>
            <NavLink
              to="/serviceaftaler"
              className="text-white hover:text-lime transition-colors"
              activeClassName="text-lime font-semibold"
            >
              Serviceaftaler
            </NavLink>
            <NavLink
              to="/om-os"
              className="text-white hover:text-lime transition-colors"
              activeClassName="text-lime font-semibold"
            >
              Om os
            </NavLink>
          </div>

          {/* Contact CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:61426494"
              className="flex items-center gap-2 text-white hover:text-lime transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>61 42 64 94</span>
            </a>
            <Button variant="default" className="bg-lime hover:bg-lime/90 text-foreground font-semibold">
              Kontakt os
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                className="text-white hover:text-lime transition-colors py-2"
                activeClassName="text-lime font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Forside
              </NavLink>
              <NavLink
                to="/ydelser"
                className="text-white hover:text-lime transition-colors py-2"
                activeClassName="text-lime font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Ydelser
              </NavLink>
              <NavLink
                to="/serviceaftaler"
                className="text-white hover:text-lime transition-colors py-2"
                activeClassName="text-lime font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviceaftaler
              </NavLink>
              <NavLink
                to="/om-os"
                className="text-white hover:text-lime transition-colors py-2"
                activeClassName="text-lime font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Om os
              </NavLink>
              <div className="flex flex-col gap-3 pt-4 border-t border-primary-foreground/20">
                <a
                  href="tel:61426494"
                  className="flex items-center gap-2 text-white hover:text-lime transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>61 42 64 94</span>
                </a>
                <Button variant="default" className="bg-lime hover:bg-lime/90 text-foreground font-semibold w-full">
                  Kontakt os
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
