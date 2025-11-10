import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TreeDeciduous, Sprout, Leaf, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";

const Beplantning = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Beplantning - Professionel plantning af træer og buske | Eksperten.Online</title>
        <meta name="description" content="Ekspertvalg og plantning af træer, buske og planter, der passer til din have og klimaet. Få professionel rådgivning om beplantning i Nordsjælland." />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[hsl(var(--hero-dark))] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <TreeDeciduous className="h-12 w-12 text-lime" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Beplantning
              </h1>
            </div>
            <p className="text-xl text-white/90">
              Vi hjælper dig med at vælge og plante de rigtige træer, buske og planter, der trives i din have og passer til det danske klima
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              At vælge de rigtige planter til din have kræver erfaring og kendskab til både jordbund, lysforhold og det danske klima. Vi hjælper dig med at skabe en smuk og harmonisk have, hvor hver plante får optimale vækstbetingelser.
            </p>
            <p className="text-lg leading-relaxed">
              Vores erfarne gartnere rådgiver dig om valg af træer, buske, stauder og blomster, der ikke kun ser fantastiske ud, men også trives gennem alle årstider.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Hvad vi tilbyder
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sprout className="h-6 w-6 text-lime" />
                  Ekspertrådgivning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Analyse af jordbund og lysforhold</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Valg af arter der passer til din have</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Farvesammensætning og årstidsvariation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Råd om vedligeholdelse og pleje</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-lime" />
                  Professionel plantning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Korrekt plantedybde og afstand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Forbedring af jord med kompost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Etablering af støttepæle hvor nødvendigt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Grundig vanding og efterbehandling</span>
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
            Sådan foregår processen
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Konsultation og besigtigelse</h3>
                <p className="text-muted-foreground">
                  Vi besøger din have og vurderer jordbund, lysforhold og eksisterende planter. Vi diskuterer dine ønsker og vision for haven.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Plantevalg og design</h3>
                <p className="text-muted-foreground">
                  Vi udarbejder et forslag med konkrete plantevalg, placering og plejeinstruktioner. Du får præsenteret billeder og information om hver plante.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Indkøb af planter</h3>
                <p className="text-muted-foreground">
                  Vi bestiller kvalitetsplanter fra vores leverandører og sikrer, at de er sunde og klar til plantning på aftalt tidspunkt.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professionel plantning</h3>
                <p className="text-muted-foreground">
                  Vi forbereder jorden, planter efter bedste praksis og sørger for korrekt vanding. Du får instruktioner i efterfølgende pleje.
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
            Fordele ved professionel beplantning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rigtige plantevalg</h3>
              <p className="text-white/90">
                Undgå fejlkøb og få planter der rent faktisk trives i din have
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professionel udførelse</h3>
              <p className="text-white/90">
                Korrekt plantning giver planterne den bedste start og øger overlevelse
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Harmonisk havedesign</h3>
              <p className="text-white/90">
                Skab en smuk helhed med planter der komplementerer hinanden
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
                <CardTitle>Hvornår er den bedste tid at plante?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Efterår og tidligt forår er generelt de bedste tidspunkter. Træer og buske plantes bedst fra oktober til april, mens stauder kan plantes både forår og efterår. Vi rådgiver om det optimale tidspunkt for dine specifikke planter.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Leverer I også planterne?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ja, vi indkøber og leverer alle planter fra kvalitetsleverandører. Vi sikrer, at planterne er sunde og kommer direkte fra planteskole til din have.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Får jeg hjælp til vedligeholdelse?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Absolut! Vi giver dig grundige instruktioner i pleje og vedligeholdelse af dine nye planter. Vi tilbyder også serviceaftaler hvis du ønsker professionel løbende pleje.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hvad hvis planterne ikke trives?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Vi giver garanti på vores plantning og planter efter korrekt metode. Hvis en plante ikke skulle trives, kontakt os, så vurderer vi situationen og finder en løsning.
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
              Klar til en smuk og frodig have?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Kontakt os i dag for en uforpligtende konsultation om beplantning af din have
            </p>
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

export default Beplantning;
