import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fence, Layers, Mountain, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";

const Stottemur = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Støttemur - Professionel anlæggelse af støttemure | Eksperten.Online</title>
        <meta name="description" content="Professionel anlæggelse af støttemure i forskellige materialer. Holdbare løsninger til niveauforskelle i haven. Ekspertservice i Nordsjælland." />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[hsl(var(--hero-dark))] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Fence className="h-12 w-12 text-lime" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Støttemur
              </h1>
            </div>
            <p className="text-xl text-white/90">
              Professionel anlæggelse af støttemure der håndterer niveauforskelle, stabiliserer skråninger og skaber funktionelle terrasseniveauer
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              En støttemur er ikke bare et funktionelt element - den kan også være et smukt designelement i haven. Vi anlægger støttemure der både er teknisk korrekte og æstetisk tiltalende.
            </p>
            <p className="text-lg leading-relaxed">
              Med erfaring i jordhåndtering, fundament og konstruktion sikrer vi, at din støttemur bliver stabil og holdbar gennem mange år, uanset hvilken stil og materialer du vælger.
            </p>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Materialevalg til støttemure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mountain className="h-6 w-6 text-lime" />
                  Natursten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Tidløs og klassisk stil med granit, sandsten eller kalksten
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Ekstremt holdbar</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Naturligt udtryk</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Unikt resultat</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-6 w-6 text-lime" />
                  Betonblokke
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Moderne løsning med specialdesignede betonblokke
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>God prisværdi</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Hurtig opførelse</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Mange designs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fence className="h-6 w-6 text-lime" />
                  Træ (pilotræ)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Varm og naturlig stil med trykimprægneret eller hårdt træ
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Naturligt look</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Fleksibel udformning</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Passer i de fleste haver</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-6 w-6 text-lime" />
                  Gabioner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Moderne trådkurve fyldt med sten
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Moderne design</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>God dræning</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Fleksibel højde</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mountain className="h-6 w-6 text-lime" />
                  Mursten/tegl
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Klassisk og elegant med murede elementer
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Traditionel stil</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Matcher ofte huset</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Langvarig holdbarhed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-6 w-6 text-lime" />
                  L-elementer (beton)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Præfabrikerede betonelementer til store højder
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Til store højder</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Meget stabil</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 flex-shrink-0" />
                    <span>Hurtig installation</span>
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
            Sådan anlægger vi støttemure
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Vurdering og planlægning</h3>
                <p className="text-muted-foreground">
                  Vi vurderer jordbund, højdeforskelle og belastning. Vi rådgiver om materialevalg og udformer løsningen i samarbejde med dig.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Udgravning og fundament</h3>
                <p className="text-muted-foreground">
                  Vi graver ud til korrekt dybde og etablerer stabilt fundament tilpasset belastningen og jordbundsforholdene.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dræning og bagfyld</h3>
                <p className="text-muted-foreground">
                  Vi etablerer drænlag bag muren for at lede vand væk og sikrer korrekt bagfyldning med grus for stabilitet.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Opbygning af mur</h3>
                <p className="text-muted-foreground">
                  Materialer samles eller mures med præcision, nivellering og korrekt hældning for maksimal styrke og æstetik.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Afslutning og efterbehandling</h3>
                <p className="text-muted-foreground">
                  Toppen afsluttes pænt, eventuel fugning udføres, og området rengøres. Vi sikrer at jorden pakkes godt og området er klar til brug.
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
            Fordele ved professionel støttemur
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Stabilitet og sikkerhed</h3>
                <p className="text-white/90">
                  Korrekt konstrueret fundament sikrer en stabil mur uden sætninger eller skred
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Holdbar løsning</h3>
                <p className="text-white/90">
                  Med korrekt dræning og materialevalg holder støttemuren i mange årtier
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Udnytter haven</h3>
                <p className="text-white/90">
                  Skab brugbare terrasseniveauer og gør skrånende områder funktionelle
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Æstetisk værdi</h3>
                <p className="text-white/90">
                  En flot støttemur er et designelement der løfter hele havens udseende
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
                <CardTitle>Hvor høj kan en støttemur være?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Det afhænger af materialet og jordbunden. Typisk kan vi bygge mure op til 2-3 meter. Ved større højder kan der være behov for særlige tilladelser og ingeniørberegninger.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skal der søges byggetilladelse?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  For mindre støttemure (under 1,5 meter) kræves normalt ikke tilladelse. Ved større mure eller hvis muren støder op til naboskel, skal der søges tilladelse. Vi rådgiver om reglerne.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hvad er den bedste løsning til min have?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Det afhænger af højdeforskelle, jordbund, budget og ønsket stil. Vi laver altid en grundig besigtigelse og rådgiver om den optimale løsning for netop din have.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kan planter vokse i/ved støttemuren?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ja! Mange støttemure kan designes med plantelommer eller beplantes foran. Natursten og visse betonblokke egner sig særligt godt til grøn integration.
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
              Få en stabil og smuk støttemur
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Kontakt os for rådgivning og tilbud på professionel støttemur
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

export default Stottemur;
