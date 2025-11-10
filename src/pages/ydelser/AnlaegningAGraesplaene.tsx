import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shovel } from "lucide-react";
import { Helmet } from "react-helmet";

const AnlaegningAGraesplaene = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Anlægning af græsplæne | Eksperten.Online</title>
        <meta name="description" content="Ny græsplæne ved såning eller rullegræs. Professionel anlæggelse af smukke og holdbare græsplæner i Nordsjælland." />
      </Helmet>
      
      <Navigation />

      <section className="bg-[hsl(var(--hero-dark))] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Shovel className="h-12 w-12 text-lime" />
              <h1 className="text-4xl md:text-5xl font-bold">Anlægning af græsplæne</h1>
            </div>
            <p className="text-xl text-white/90">
              Vi anlægger smukke og holdbare græsplæner ved såning eller rullegræs - perfekte grønne plæner der holder i mange år
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">
              En smuk græsplæne starter med grundigt forarbejde og korrekt udførelse. Vi sikrer optimal jordforberedelse, valg af den rigtige græstype og professionel etablering for en plæne der trives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[hsl(var(--hero-dark))] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Få en smuk ny græsplæne</h2>
            <p className="text-xl mb-8 text-white/90">Kontakt os for rådgivning om græsplæneanlæg</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-lime hover:bg-lime/90 text-foreground text-lg font-semibold" asChild>
                <a href="tel:71411573">Ring: 71 41 15 73</a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-semibold" asChild>
                <a href="mailto:Eksperten_Anlgsgartneri@yahoo.com">Send email</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnlaegningAGraesplaene;
