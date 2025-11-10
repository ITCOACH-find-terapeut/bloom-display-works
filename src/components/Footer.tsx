import { Mail, Phone, MapPin } from "lucide-react";
import treeLogo from "@/assets/tree-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={treeLogo} alt="Havens Nøgle ApS" className="h-10 w-auto" />
              <span className="font-bold text-lg">Havens Nøgle ApS</span>
            </div>
            <p className="text-white/80">
              Din professionelle anlægsgartner i Nordsjælland, Sjælland og København
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white/80 hover:text-lime transition-colors">
                  Forside
                </a>
              </li>
              <li>
                <a href="/ydelser" className="text-white/80 hover:text-lime transition-colors">
                  Ydelser
                </a>
              </li>
              <li>
                <a href="/serviceaftaler" className="text-white/80 hover:text-lime transition-colors">
                  Serviceaftaler
                </a>
              </li>
              <li>
                <a href="/om-os" className="text-white/80 hover:text-lime transition-colors">
                  Om os
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:61426494"
                  className="flex items-center gap-2 text-white/80 hover:text-lime transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  61 42 64 94
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@havensnogle.dk"
                  className="flex items-center gap-2 text-white/80 hover:text-lime transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  info@havensnogle.dk
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="h-5 w-5" />
                Nordsjælland, Danmark
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Havens Nøgle ApS. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
