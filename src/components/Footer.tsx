import { Mail, Phone, MapPin } from "lucide-react";
import ekspertenLogo from "@/assets/eksperten-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--navy-dark))] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={ekspertenLogo} alt="Eksperten.Online" className="h-10 w-auto" />
            </div>
            <p className="text-white/80 font-body">
              Din professionelle anlægsgartner i Birkerød, Nordsjælland
            </p>
            <p className="text-white/80 text-sm mt-2 font-body">
              CVR: 44840715
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">Links</h3>
            <ul className="space-y-2 font-body">
              <li>
                <a href="/" className="text-white/80 hover:text-accent transition-colors">
                  Forside
                </a>
              </li>
              <li>
                <a href="/ydelser" className="text-white/80 hover:text-accent transition-colors">
                  Ydelser
                </a>
              </li>
              <li>
                <a href="/serviceaftaler" className="text-white/80 hover:text-accent transition-colors">
                  Serviceaftaler
                </a>
              </li>
              <li>
                <a href="/om-os" className="text-white/80 hover:text-accent transition-colors">
                  Om os
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">Kontakt</h3>
            <ul className="space-y-3 font-body">
              <li>
                <a
                  href="tel:71411573"
                  className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  71 41 15 73
                </a>
              </li>
              <li>
                <a
                  href="mailto:Eksperten_Anlgsgartneri@yahoo.com"
                  className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Eksperten_Anlgsgartneri@yahoo.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="h-5 w-5" />
                Birkerød, Nordsjælland
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 font-body">
          <p>&copy; {new Date().getFullYear()} Eksperten.Online. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;