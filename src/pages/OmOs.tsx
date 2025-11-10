import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, MapPin, Heart } from "lucide-react";

const OmOs = () => {
  const values = [
    {
      icon: <Award className="h-10 w-10" />,
      title: "Kvalitet",
      description: "Vi leverer altid arbejde af høj kvalitet og står ved vores løfter"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Professionalisme",
      description: "Vores team består af uddannede og erfarne anlægsgartnere"
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Kundetilfredshed",
      description: "Din tilfredshed er vores højeste prioritet"
    },
    {
      icon: <MapPin className="h-10 w-10" />,
      title: "Lokal forankring",
      description: "Vi kender området og betjener hele Nordsjælland, Sjælland og København"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Om os
            </h1>
            <p className="text-xl text-white/90">
              Havens Nøgle ApS - Din pålidelige partner inden for anlægsgartnerarbejde
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Hvem er vi?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-4">
                  Havens Nøgle ApS er en professionel anlægsgartnerfirma med base i Nordsjælland. 
                  Vi har mange års erfaring inden for alle typer havearbejde og anlægsgartnerarbejde.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Vores team består af dygtige og erfarne fagfolk, der brænder for at skabe smukke 
                  haver og grønne områder. Vi tager hver opgave seriøst og stræber altid efter at 
                  levere det bedste resultat til vores kunder.
                </p>
                <p className="text-lg text-muted-foreground">
                  Vi betjener private husstande, virksomheder og boligforeninger i hele Nordsjælland, 
                  Sjælland og Københavnsområdet.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Vores værdier</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="border-2 hover:border-lime transition-colors">
                    <CardHeader>
                      <div className="text-lime mb-3">{value.icon}</div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Special Offer */}
            <Card className="bg-lime/10 border-2 border-lime">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Særtilbud 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-center mb-4">
                  <strong className="text-2xl text-lime">10% rabat</strong> på alle brolægningsarbejder i hele 2025!
                </p>
                <p className="text-center text-muted-foreground">
                  Kontakt os i dag for at høre mere og få et uforpligtende tilbud
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vil du vide mere om os?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vi er altid klar til at besvare dine spørgsmål og give dig et godt råd
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-lime hover:bg-lime/90 text-foreground text-lg font-semibold"
              asChild
            >
              <a href="tel:61426494">Ring til os</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-lg font-semibold"
            >
              Send en mail
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OmOs;
