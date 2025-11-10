import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, TreeDeciduous, Hammer, Leaf, Shovel, Axe, Fence, Sprout } from "lucide-react";

const Ydelser = () => {
  const services = [
    {
      icon: <TreeDeciduous className="h-10 w-10" />,
      title: "Beplantning",
      description: "Ekspertvalg og plantning af træer, buske og planter, der passer til din have og klimaet"
    },
    {
      icon: <Scissors className="h-10 w-10" />,
      title: "Beskæring af træer og buske",
      description: "Professionel beskæring for sundere planter og en pæn have året rundt"
    },
    {
      icon: <Hammer className="h-10 w-10" />,
      title: "Brolægning",
      description: "Holdbare og æstetiske belægninger til stier, indkørsler og terrasser"
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Havearbejde",
      description: "Alt almindeligt havearbejde - fra ukrudtsbekæmpelse til græsslåning"
    },
    {
      icon: <Fence className="h-10 w-10" />,
      title: "Støttemur",
      description: "Professionel anlæggelse af støttemure i forskellige materialer"
    },
    {
      icon: <Axe className="h-10 w-10" />,
      title: "Træfældning",
      description: "Sikker fældning af træer, uanset størrelse og placering"
    },
    {
      icon: <Sprout className="h-10 w-10" />,
      title: "Vedligeholdelse af grønne områder",
      description: "Regelmæssig pleje af fællesarealer og større grønne områder"
    },
    {
      icon: <Shovel className="h-10 w-10" />,
      title: "Anlægning af græsplæne",
      description: "Nyt græs ved såning eller rullegræs for øjeblikkelig grøn have"
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
              Vores ydelser
            </h1>
            <p className="text-xl text-white/90">
              Vi tilbyder et komplet udvalg af professionelle anlægsgartnertjenester til private og erhverv
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:border-lime border-2 h-full">
                <CardHeader>
                  <div className="text-lime mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="border-lime text-lime hover:bg-lime hover:text-foreground w-full"
                  >
                    Læs mere
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mangler du en specifik ydelse?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Vi udfører også andre typer havearbejde. Kontakt os for at høre mere om mulighederne
            </p>
            <Button
              size="lg"
              className="bg-lime hover:bg-lime/90 text-foreground text-lg font-semibold"
            >
              Kontakt os
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ydelser;
