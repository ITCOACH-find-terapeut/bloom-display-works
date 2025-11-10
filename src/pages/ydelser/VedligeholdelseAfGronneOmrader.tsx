import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sprout } from "lucide-react";
import { Helmet } from "react-helmet";

const VedligeholdelseAfGronneOmrader = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Vedligeholdelse af grønne områder | Eksperten.Online</title>
        <meta name="description" content="Professionel vedligeholdelse af fællesarealer og større grønne områder til erhverv og boligforeninger i Nordsjælland." />
      </Helmet>
      
      <Navigation />

      <section className="bg-[hsl(var(--hero-dark))] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Sprout className="h-12 w-12 text-lime" />
              <h1 className="text-4xl md:text-5xl font-bold">Vedligeholdelse af grønne områder</h1>
            </div>
            <p className="text-xl text-white/90">
              Professionel og regelmæssig pleje af fællesarealer, parkområder og større grønne områder for erhverv og boligforeninger
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">
              Vi tilbyder skræddersyede vedligeholdelsesløsninger til erhvervsejendomme, boligforeninger og kommuner. Med faste serviceaftaler sikrer vi, at jeres grønne områder altid fremstår velholdte og indbydende.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[hsl(var(--hero-dark))] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Få en vedligeholdelsesaftale</h2>
            <p className="text-xl mb-8 text-white/90">Kontakt os for at høre om vores løsninger til erhverv og boligforeninger</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-hover text-white text-lg font-semibold" asChild>
                <a href="tel:71411573">Ring: 71 41 15 73</a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-accent text-lg font-semibold" asChild>
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

export default VedligeholdelseAfGronneOmrader;
