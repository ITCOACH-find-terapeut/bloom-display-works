import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet";

const Serviceaftaler = () => {
  const benefits = [
    "Fast kontaktperson, der kender din have",
    "Prioriteret service ved akutte behov",
    "Forudsigeligt budget hele året",
    "Regelmæssig pleje sikrer en flot have året rundt",
    "Fleksible aftaler tilpasset dine behov",
    "Professionelt udstyr og materialer inkluderet"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Serviceaftaler - Fast Havepleje | Eksperten.Online</title>
        <meta name="description" content="Få din have plejet professionelt hele året med en serviceaftale. Tilbud til privat og erhverv. Regelmæssig pleje giver en smuk have året rundt." />
        <meta name="keywords" content="serviceaftale, havepleje, fast aftale, erhverv, boligforening, haveservice" />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Serviceaftaler
            </h1>
            <p className="text-xl text-white/90 font-body">
              Få en flot og velholdt have hele året med vores serviceaftaler
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Hvorfor vælge en serviceaftale?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-body">
                Med en serviceaftale hos Eksperten.Online sikrer du, at din have altid ser flot ud. 
                Vi planlægger og udfører alle nødvendige opgaver, så du kan nyde din have uden bekymringer.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="rounded-full bg-accent/20 p-1 mt-1">
                      <Check className="h-5 w-5 text-accent" />
                    </div>
                    <p className="text-lg font-body">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-2 border-accent">
              <CardHeader className="bg-accent/10">
                <CardTitle className="text-2xl font-heading">Tilpassede løsninger</CardTitle>
                <CardDescription className="text-base font-body">
                  Vi tilpasser serviceaftalen efter dine specifikke behov
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-lg mb-6 font-body">
                  Hver have er unik, og derfor skræddersyr vi en serviceaftale, der passer præcis til dine behov. 
                  Det kan omfatte:
                </p>
                <ul className="space-y-3 mb-6 font-body">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Ugentlig, hver 14. dag eller månedlig pleje</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Sæsonbestemte opgaver som forårsklargøring og efterårsbeskæring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Græsslåning, hækklipning og ukrudtsbekæmpelse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Gødning og planteværn</span>
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-heading font-semibold w-full md:w-auto"
                  asChild
                >
                  <a href="tel:71411573">Få et tilbud</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Interesseret i en serviceaftale?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-body">
            Kontakt os for en uforpligtende snak om, hvordan vi kan hjælpe dig
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg font-heading font-semibold"
            asChild
          >
            <a href="tel:71411573">Ring til os: 71 41 15 73</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Serviceaftaler;