import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Shovel, Wind, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";

const Havearbejde = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Havearbejde - Professionel havepleje og vedligeholdelse | Eksperten.Online</title>
        <meta name="description" content="Alt almindeligt havearbejde fra ukrudtsbekæmpelse til græsslåning. Professionel havepleje i Nordsjælland og København." />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[hsl(var(--hero-dark))] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="h-12 w-12 text-lime" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Havearbejde
              </h1>
            </div>
            <p className="text-xl text-white/90">
              Vi tager os af alt almindeligt havearbejde, så du kan nyde din have uden bekymringer
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              En velplejet have kræver regelmæssig omsorg og vedligeholdelse. Vi tilbyder alle typer havearbejde - fra græsslåning og ukrudtsbekæmpelse til rengøring og generel havepleje.
            </p>
            <p className="text-lg leading-relaxed">
              Uanset om du har brug for hjælp til en enkelt opgave eller ønsker løbende vedligeholdelse, står vi klar til at gøre din have smuk og velholdt året rundt.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Vores havearbejde omfatter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="h-5 w-5 text-lime flex-shrink-0" />
                  Græsslåning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Regelmæssig plæneklipning for en pæn og ensartet græsplæne
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="h-5 w-5 text-lime flex-shrink-0" />
                  Ukrudtsbekæmpelse
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Fjernelse af ukrudt i beds, belægning og græsplæne
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="h-5 w-5 text-lime flex-shrink-0" />
                  Haveoprydn ing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Rydning af visne planter, blade og generel oprydning
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="h-5 w-5 text-lime flex-shrink-0" />
                  Hegnsvedligeholdelse
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Reparation og maling af hegn og låger
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="h-5 w-5 text-lime flex-shrink-0" />
                  Jordbearbejdning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Harvning, grubning og forberedelse af beds til såning/plantning
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="h-5 w-5 text-lime flex-shrink-0" />
                  Gødning og jordforbedring
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Tilførsel af kompost, gødning og næringsstoffer
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="h-5 w-5 text-lime flex-shrink-0" />
                  Løvrivning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Fjernelse af efterårsblade fra plæne og beds
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="h-5 w-5 text-lime flex-shrink-0" />
                  Renholdelse
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Fejning, vask af belægning og fjernelse af mos
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="h-5 w-5 text-lime flex-shrink-0" />
                  Snerydning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Rydning af sne og is om vinteren
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flexible Solutions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Fleksible løsninger der passer til dig
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shovel className="h-6 w-6 text-lime" />
                  Enkeltopgaver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Har du brug for hjælp til en specifik opgave? Vi kommer gerne og hjælper med præcis det, du har brug for.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Spring cleaning af haven</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Forberedelse til fest eller event</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Efterårsoprydning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="h-6 w-6 text-lime" />
                  Sæsonpakker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Få haven gjort klar til den nye sæson med vores målrettede sæsonpakker.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Forårsoprydning og start</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Sommervedligeholdelse</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Vinterforberedelse</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-lime" />
                  Serviceaftaler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Få en altid velplejet have med vores løbende serviceaftaler tilpasset dine behov.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Ugentlig, hver 14. dag eller månedlig</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Fast pris og forudsigelige udgifter</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Prioriteret service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[hsl(var(--secondary))] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Derfor vælge os til dit havearbejde
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Professionelt udstyr</h3>
                <p className="text-white/90">
                  Vi har alt det nødvendige værktøj og maskiner til opgaven
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Erfarne gartnere</h3>
                <p className="text-white/90">
                  Vores team har mange års erfaring med havepleje
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Fleksible aftaler</h3>
                <p className="text-white/90">
                  Vi tilpasser os dine behov og ønsker til opgaven
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Komplet service</h3>
                <p className="text-white/90">
                  Fra udførelse til bortskaffelse - vi klarer det hele
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Ofte stillede spørgsmål
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Skal jeg stille værktøj til rådighed?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Nej, vi medbringer alt nødvendigt professionelt udstyr. Du behøver ikke stille noget til rådighed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hvad gør I med haveaffald?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Vi samler alt haveaffald op og sørger for korrekt bortskaffelse. Vi kan også lade visse materialer blive som kompost, hvis du ønsker det.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kan I hjælpe med kortvarslede opgaver?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ja, vi forsøger altid at være fleksible. Kontakt os, så finder vi en løsning så hurtigt som muligt.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tilbyder I også havearbejde om vinteren?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ja, vi udfører havearbejde hele året. Om vinteren kan vi hjælpe med snerydning, beskæring og forberedelse til foråret.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[hsl(var(--hero-dark))] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Få hjælp til dit havearbejde
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Kontakt os i dag for et uforpligtende tilbud på havepleje
            </p>
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

export default Havearbejde;
