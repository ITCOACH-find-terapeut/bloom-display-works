import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Axe, Shield, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";

const Traefaeldning = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Træfældning - Sikker og professionel træfældning | Eksperten.Online</title>
        <meta name="description" content="Sikker fældning af træer uanset størrelse og placering. Professionel træfældning med certificerede operatører i Nordsjælland." />
      </Helmet>
      
      <Navigation />

      <section className="bg-[hsl(var(--hero-dark))] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Axe className="h-12 w-12 text-lime" />
              <h1 className="text-4xl md:text-5xl font-bold">Træfældning</h1>
            </div>
            <p className="text-xl text-white/90">
              Sikker og professionel fældning af træer - uanset størrelse, placering eller kompleksitet
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Træfældning kræver ekspertise, det rette udstyr og stor opmærksomhed på sikkerhed. Vi udfører sikker fældning af alle trætyper - fra små haveganer til store træer tæt på bygninger.
            </p>
            <p className="text-lg leading-relaxed">
              Vores erfarne team har certificering og erfaring til at håndtere selv de mest udfordrende fældninger, og vi tager altid hensyn til omgivelser og sikkerhed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Vores træfældningsydelser</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Axe className="h-6 w-6 text-lime" />
                  Komplet træfældning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Fældning af træer i alle størrelser</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Fjernelse af stubbe med stubbefræser</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Flisning og bortskaffelse af affald</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-lime" />
                  Specialfældninger
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Træer tæt på bygninger</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Klatrerfældning med sikret nedtagning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Nødfældning af farlige træer</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[hsl(var(--secondary))] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Sikkerhed først</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certificeret personale</h3>
              <p className="text-white/90">Vores operatører er uddannede og certificerede</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professionelt udstyr</h3>
              <p className="text-white/90">Vi bruger moderne og velbeliggende maskiner</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fuld forsikring</h3>
              <p className="text-white/90">Vi er fuldt forsikrede for din tryghed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[hsl(var(--hero-dark))] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Brug for træfældning?</h2>
            <p className="text-xl mb-8 text-white/90">Kontakt os for sikker og professionel træfældning</p>
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

export default Traefaeldning;
