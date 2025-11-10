import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Layers, Shield, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";

const Brolaegning = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Brolægning - Professionel belægning af terrasser og indkørsler | Eksperten.Online</title>
        <meta name="description" content="Holdbare og æstetiske belægninger til stier, indkørsler og terrasser. Ekspert brolægning i Nordsjælland med garanti for kvalitet." />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[hsl(var(--hero-dark))] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Hammer className="h-12 w-12 text-lime" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Brolægning
              </h1>
            </div>
            <p className="text-xl text-white/90">
              Professionel belægning af stier, indkørsler, terrasser og andre udearealer med fokus på holdbarhed og æstetik
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Kvalitetsbrolægning kræver erfaring, præcision og grundigt forberedelsesarbejde. Vi leverer holdbare belægninger der både ser fantastiske ud og kan modstå vejr, vind og daglig brug i mange år fremover.
            </p>
            <p className="text-lg leading-relaxed">
              Vores erfarne håndværkere sikrer korrekt fundament, præcis afvanding og fagmæssig udførelse, så du får en belægning der holder, og som du kan være stolt af.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Vi lægger alle typer belægning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-6 w-6 text-lime" />
                  Traditionel brolægning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Granitskærver og brosten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Betonfliser i mange designs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Klinker og tegl</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Natursten som granit og sandsten</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hammer className="h-6 w-6 text-lime" />
                  Anvendelsesområder
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Terrasser og opholdsarealer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Indkørsler og parkeringspladser</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Gangstier og havegange</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Trapper og niveauspring</span>
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
            Vores arbejdsproces
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Opmåling og rådgivning</h3>
                <p className="text-muted-foreground">
                  Vi besigter området, tager præcise mål og rådgiver om materialevalg, mønstre og design der passer til din ejendom og budget.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Forberedelse af underlaget</h3>
                <p className="text-muted-foreground">
                  Vi graver ud til korrekt dybde, etablerer stabilt fundament med sten og sand, og sikrer ordentlig afvanding med fald væk fra bygninger.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Præcis brolægning</h3>
                <p className="text-muted-foreground">
                  Fliser eller sten lægges efter snor med præcise fuger. Vi sikrer pænt mønster, lige linjer og jævn overflade gennem hele området.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fugning og komprimering</h3>
                <p className="text-muted-foreground">
                  Fuger fyldes med sand eller specialfuge, og belægningen vibreres eller komprimeres for maksimal stabilitet og holdbarhed.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Afslutning og oprydning</h3>
                <p className="text-muted-foreground">
                  Kantsten sættes, overflødig jord og materialer fjernes, og området rengøres grundigt. Du får instruktioner i pleje og vedligeholdelse.
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
            Hvorfor vælge professionel brolægning?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lang holdbarhed</h3>
              <p className="text-white/90">
                Korrekt fundament og udførelse sikrer en belægning der holder i årtier
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Perfekt afvanding</h3>
              <p className="text-white/90">
                Vi sikrer korrekt fald så vand ledes væk og undgår problemer med frost
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Æstetisk resultat</h3>
              <p className="text-white/90">
                Professionel udførelse giver præcise linjer og et smukt, ensartet udtryk
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
                <CardTitle>Hvor længe holder brolægning?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ved korrekt udførelse og vedligeholdelse holder brolægning typisk 30-50 år eller mere. Kvaliteten af fundamentet og materialevalget er afgørende for holdbarheden.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kan brolægning laves om vinteren?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ja, men vi anbefaler forår og sommer for optimal udførelse. Frost kan påvirke fundamentet, så vi vurderer konkret om forholdene tillader vinterarbejde.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hjælper I med valg af materialer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Absolut! Vi rådgiver om materialer baseret på anvendelse, trafik, æstetik og budget. Vi viser prøver og hjælper dig med at træffe det rigtige valg.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hvad koster brolægning?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Prisen afhænger af område, materialer, jordbund og kompleksitet. Vi laver altid et uforpligtende tilbud baseret på dine konkrete ønsker og forhold.
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
              Få en smuk og holdbar belægning
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Kontakt os for et uforpligtende tilbud på professionel brolægning
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

export default Brolaegning;
