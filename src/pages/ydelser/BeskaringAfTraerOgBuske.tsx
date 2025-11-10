import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, TreeDeciduous, Calendar, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";

const BeskaringAfTraerOgBuske = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Beskæring af træer og buske - Professionel træpleje | Eksperten.Online</title>
        <meta name="description" content="Professionel beskæring af træer og buske for sundere planter og en pæn have året rundt. Ekspertservice i Nordsjælland og København." />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[hsl(var(--hero-dark))] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Scissors className="h-12 w-12 text-lime" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Beskæring af træer og buske
              </h1>
            </div>
            <p className="text-xl text-white/90">
              Professionel beskæring for sundere planter, bedre vækst og en velplejet have gennem hele året
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Korrekt beskæring er afgørende for dine planters sundhed og udseende. Vi sikrer, at dine træer og buske får den rette behandling på det rigtige tidspunkt, så de kan trives og blomstre optimalt.
            </p>
            <p className="text-lg leading-relaxed">
              Vores erfarne gartnere har dyb forståelse for forskellige plantearters behov og beskærer efter faglig bedste praksis for at fremme vækst, blomstring og langsigtet sundhed.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Vores beskæringsydelser
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TreeDeciduous className="h-6 w-6 text-lime" />
                  Træbeskæring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Formål-beskæring af frugttræer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Sikkerhedsbeskæring af store træer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Kronereduktion og udtynding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Fjernelse af døde eller syge grene</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scissors className="h-6 w-6 text-lime" />
                  Hækklipning og buske
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Præcis hækklipning med skarpe linjer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Formbeskæring af prydbuske</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Roser og blomstrende buske</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 flex-shrink-0" />
                    <span>Foryngelseskær af ældre buske</span>
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
            Sådan foregår beskæringen
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Vurdering af planterne</h3>
                <p className="text-muted-foreground">
                  Vi inspicerer dine træer og buske og vurderer deres tilstand, vækstmønster og beskæringsbehov baseret på arten og årstiden.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Planlægning af snit</h3>
                <p className="text-muted-foreground">
                  Vi planlægger beskæringen for at opnå den ønskede form, fjerne problematiske grene og fremme sund vækst uden at skade planten.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professionel udførelse</h3>
                <p className="text-muted-foreground">
                  Vi bruger skarpt, steriliseret værktøj og korrekt snitføring for at minimere sår og fremme hurtig heling. Sikkerhed har højeste prioritet.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Oprydning og bortskaffelse</h3>
                <p className="text-muted-foreground">
                  Alt afklippet materiale samles op og fjernes fra stedet. Vi efterlader din have ren og pæn efter beskæringen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timing */}
      <section className="py-16 bg-[hsl(var(--secondary))] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Hvornår skal der beskæres?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5" />
                  Vinter (dec-feb)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/90">
                <p className="text-sm">
                  Frugttræer, roser og løvfældende træer i dvale. God oversigt uden blade.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5" />
                  Forår (mar-maj)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/90">
                <p className="text-sm">
                  Hække, buske efter blomstring, og let vedligeholdelse af træer.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5" />
                  Sommer (jun-aug)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/90">
                <p className="text-sm">
                  Hække, formklipning og sommerbeskæring af frugttræer for bedre frugt.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5" />
                  Efterår (sep-nov)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/90">
                <p className="text-sm">
                  Let vedligeholdelse, hække og forberedelse til vinteren.
                </p>
              </CardContent>
            </Card>
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
                <CardTitle>Hvor ofte skal mine buske beskæres?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Det afhænger af arten. Hække klippes typisk 1-2 gange om året, mens blomstrende buske ofte kun behøver beskæring hvert 2-3 år. Vi anbefaler den optimale frekvens for dine specifikke planter.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kan I beskære store træer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ja, vi har erfaring og udstyr til beskæring af store træer. Vi arbejder sikkert og følger alle regler for arbejde i højden. Ved meget store træer kan vi kræve specialudstyr.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hvad gør I med det afklippede materiale?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Vi samler alt affald op og fjerner det fra stedet. Større grene kan flises og bruges som mulch i haven, hvis du ønsker det. Ellers sørger vi for korrekt bortskaffelse.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Er beskæring skadeligt for planterne?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Korrekt beskæring på det rigtige tidspunkt er tværtimod sundt og stimulerer vækst. Vi beskærer fagligt korrekt for at undgå skader og fremme planters sundhed og udseende.
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
              Professionel beskæring af dine træer og buske
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Kontakt os for ekspert beskæring der sikrer smukke og sunde planter
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

export default BeskaringAfTraerOgBuske;
