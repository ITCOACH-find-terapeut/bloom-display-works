import { Button } from "./ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
const Hero = () => {
  return <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBackground} alt="Professional landscaping" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(var(--hero-dark))]/85"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Din professionelle anlægsgartner
          </h1>
          
          <p className="text-xl md:text-2xl text-accent font-heading font-semibold mb-4">
            Nordsjælland • Sjælland • København
          </p>
          
          <p className="text-2xl md:text-3xl text-white font-heading font-bold mb-8 bg-accent/20 backdrop-blur-sm inline-block px-6 py-3 rounded-lg">10% på udvalgte jobs resten af 2025!</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-heading font-semibold" asChild>
              <a href="tel:71411573" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                71 41 15 73
              </a>
            </Button>
            
            <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg font-heading font-semibold">
              <a href="mailto:Eksperten_Anlgsgartneri@yahoo.com" className="flex items-center gap-2">
                Få et tilbud
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Contact Bubble - Desktop */}
      <div className="hidden xl:block absolute bottom-10 left-10 z-10">
        <div className="bg-accent rounded-full p-8 max-w-xs shadow-2xl">
          <p className="text-accent-foreground font-heading font-bold text-lg mb-2">
            Ønsker du at høre mere?
          </p>
          <p className="text-accent-foreground font-body">
            Kontakt os endelig for et uforpligtende tilbud!
          </p>
        </div>
      </div>
    </section>;
};
export default Hero;