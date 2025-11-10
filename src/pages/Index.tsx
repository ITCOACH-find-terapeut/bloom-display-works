import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, TreeDeciduous, Hammer, Leaf, Users, Award } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <TreeDeciduous className="h-8 w-8" />,
      title: "Beplantning",
      description: "Ekspertvalg af planter og træer til din have"
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Beskæring",
      description: "Professionel beskæring af træer og buske"
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Brolægning",
      description: "Flotte og holdbare belægninger til haven"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Havearbejde",
      description: "Alt havearbejde udført professionelt"
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Erfarne fagfolk",
      description: "Vi har mange års erfaring inden for anlægsgartnerarbejde"
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Kvalitetsgaranti",
      description: "Vi garanterer høj kvalitet i alt vores arbejde"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vores ydelser
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vi tilbyder et bredt udvalg af professionelle haveservices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-lime">
                <CardHeader>
                  <div className="text-lime mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-lime hover:bg-lime/90 text-foreground text-lg font-semibold"
              asChild
            >
              <a href="/ydelser">Se alle ydelser</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-lime mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <ProjectGallery />

      {/* CTA Section */}
      <section className="py-16 bg-hero-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar til at transformere din have?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontakt os i dag for et uforpligtende tilbud
          </p>
          <Button
            asChild
            size="lg"
            className="bg-lime hover:bg-lime/90 text-foreground text-lg font-semibold"
          >
            <a href="mailto:Eksperten_Anlgsgartneri@yahoo.com">
              Få et tilbud
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
