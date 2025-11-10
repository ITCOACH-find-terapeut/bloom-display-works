import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fence, Hammer, Shield, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";

const OpsaetningHegn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Opsætning af hegn - Professionel hegnsmontage | Eksperten.Online</title>
        <meta name="description" content="Professionel opsætning af hegn i alle materialer. Træhegn, metalhegn, hegnslåger og reparation af eksisterende hegn i Nordsjælland." />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[hsl(var(--hero-dark))] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Fence className="h-12 w-12 text-lime" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Opsætning af hegn
              </h1>
            </div>
            <p className="text-xl text-white/90">
              Professionel opsætning og vedligeholdelse af hegn i alle materialer og designs
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Et godt hegn giver privatliv, afgrænsning og æstetisk værdi til din ejendom. Vi sørger for professionel opsætning med solid fundering og præcis montering, så dit hegn står stødt i mange år.
            </p>
            <p className="text-lg leading-relaxed">
              Uanset om du ønsker et klassisk trætremme hegn, moderne metalhegn eller lebegn, har vi erfaring med alle typer og kan rådgive om det bedste valg til dit behov.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Fences */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Hegnstyper vi opsætter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fence className="h-6 w-6 text-lime" />
                  Trætremme hegn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Klassisk trætremme i forskellige højder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Imprægneret eller naturligt træ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Skråt, lodret eller krydstremme</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-lime" />
                  Metalhegn & trådspænding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Maskehegn og ståltrådshegn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Moderne metalpaneler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Smidesjernsinspirede hegn</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hammer className="h-6 w-6 text-lime" />
                  Specialhegn & låger
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Lebegn og hække med støttehegn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Hegnslåger i matchende design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Reparation af eksisterende hegn</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Sådan opsætter vi dit hegn
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Opmåling og planlægning</h3>
                <p className="text-muted-foreground">
                  Vi opmåler området, kontrollerer skel og rådgiver om hegnstype, højde og materialer efter dit ønske og reglerne.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fundamentering af stolper</h3>
                <p className="text-muted-foreground">
                  Stolper graves ned og støbes i beton for maksimal stabilitet. Vi sikrer korrekt dybde og lige linjer.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Montering af hegn</h3>
                <p className="text-muted-foreground">
                  Når fundamentet er hærdet, monteres hegnspaneler eller tremmer præcist efter snor med ensartede mellemrum.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Afslutning og finish</h3>
                <p className="text-muted-foreground">
                  Låger monteres, alle skruer strammes, og hegnet efterbehandles om nødvendigt. Området ryddes og efterlades pænt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[hsl(var(--secondary))] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Fordele ved professionel hegnsopsætning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Solid konstruktion</h3>
              <p className="text-white/90">
                Korrekt fundamentering og montering sikrer et hegn der holder i mange år
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Præcis linjeføring</h3>
              <p className="text-white/90">
                Vi sørger for lige linjer og ensartet højde hele vejen
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hammer className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professionel rådgivning</h3>
              <p className="text-white/90">
                Vi hjælper med valg af materialer og design der passer til din ejendom
              </p>
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
                <CardTitle>Skal jeg have tilladelse til at opsætte hegn?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Det afhænger af højde og placering. Vi rådgiver om reglerne i din kommune og hjælper med nødvendige ansøgninger hvis det kræves.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hvor længe holder et træhegn?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Et godt imprægneret træhegn holder typisk 15-25 år ved korrekt vedligeholdelse. Vi anbefaler behandling med træbeskyttelse hvert 3-5 år.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kan I reparere mit eksisterende hegn?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ja, vi udfører reparationer som udskiftning af råd ne stolper eller tremmer, montering af nye låger og generel renovering af hegn.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hvad koster det at få opsat hegn?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Prisen afhænger af længde, type, højde og jordbund. Vi laver altid et uforpligtende tilbud baseret på dine konkrete ønsker.
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
              Få et solidt og smukt hegn
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Kontakt os for et uforpligtende tilbud på professionel hegnsopsætning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-hover text-white text-lg font-semibold" asChild>
                <a href="tel:71411573">Ring: 71 41 15 73</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent text-lg font-semibold" asChild>
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

export default OpsaetningHegn;