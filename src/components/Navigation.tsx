import { useState } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import ekspertenLogo from "@/assets/eksperten-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={ekspertenLogo} alt="Eksperten.Online" className="h-12 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink
              to="/"
              className="text-primary-foreground hover:text-accent transition-colors font-heading font-medium"
              activeClassName="text-accent font-semibold"
            >
              Forside
            </NavLink>
            <NavLink
              to="/ydelser"
              className="text-primary-foreground hover:text-accent transition-colors font-heading font-medium"
              activeClassName="text-accent font-semibold"
            >
              Ydelser
            </NavLink>
            <NavLink
              to="/serviceaftaler"
              className="text-primary-foreground hover:text-accent transition-colors font-heading font-medium"
              activeClassName="text-accent font-semibold"
            >
              Serviceaftaler
            </NavLink>
            <NavLink
              to="/om-os"
              className="text-primary-foreground hover:text-accent transition-colors font-heading font-medium"
              activeClassName="text-accent font-semibold"
            >
              Om os
            </NavLink>
          </div>

          {/* Contact CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:71411573"
              className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>71 41 15 73</span>
            </a>
            <Button 
              asChild
              variant="default" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-heading font-semibold"
            >
              <a href="mailto:Eksperten_Anlgsgartneri@yahoo.com">
                Kontakt os
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground"
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
                className="text-primary-foreground hover:text-accent transition-colors py-2 font-heading font-medium"
                activeClassName="text-accent font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Forside
              </NavLink>
              <NavLink
                to="/ydelser"
                className="text-primary-foreground hover:text-accent transition-colors py-2 font-heading font-medium"
                activeClassName="text-accent font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Ydelser
              </NavLink>
              <NavLink
                to="/serviceaftaler"
                className="text-primary-foreground hover:text-accent transition-colors py-2 font-heading font-medium"
                activeClassName="text-accent font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviceaftaler
              </NavLink>
              <NavLink
                to="/om-os"
                className="text-primary-foreground hover:text-accent transition-colors py-2 font-heading font-medium"
                activeClassName="text-accent font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Om os
              </NavLink>
              <div className="flex flex-col gap-3 pt-4 border-t border-primary-foreground/20">
                <a
                  href="tel:71411573"
                  className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>71 41 15 73</span>
                </a>
                <Button 
                  asChild
                  variant="default" 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-heading font-semibold w-full"
                >
                  <a href="mailto:Eksperten_Anlgsgartneri@yahoo.com">
                    Kontakt os
                  </a>
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