import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Award, Users, Heart } from "lucide-react";
import { Helmet } from "react-helmet";

const OmOs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Om Os - Eksperten.Online Anlægsgartner | Erfaring & Kvalitet siden 1999</title>
        <meta name="description" content="Lær mere om Eksperten.Online - din lokale Anlægsgartner i Birkerød med over 20 års erfaring. Vi leverer kvalitet, professionalisme og kundetilfredshed." />
        <meta name="keywords" content="om os, Anlægsgartner, Birkerød, erfaring, kvalitet, professionalisme" />
      </Helmet>
      <Navigation />

      <section className="bg-[hsl(var(--hero-dark))] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Om os</h1>
            <p className="text-xl text-white/90 font-body">Din pålidelige partner i Anlægsgartnerarbejde</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6 font-body">
              Vi er en erfaren Anlægsgartnervirksomhed med base i Birkerød, der betjener hele Nordsjælland. Med mange års erfaring i branchen leverer vi professionelle løsninger til både private og erhvervskunder.
            </p>
            <p className="text-lg leading-relaxed font-body">
              Vores team består af dygtige fagfolk, der brænder for at skabe smukke og funktionelle uderum. Vi tager os af alt fra mindre havearbejde til store anlægsprojekter og tilbyder altid håndværk i højeste kvalitet.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading">Vores værdier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:border-accent transition-colors">
              <CardHeader>
                <ShieldCheck className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="font-heading">Kvalitet</CardTitle>
                <CardDescription className="font-body">Vi leverer håndværk i topklasse</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-accent transition-colors">
              <CardHeader>
                <Award className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="font-heading">Professionalisme</CardTitle>
                <CardDescription className="font-body">Erfarne fagfolk med stolthed i arbejdet</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-accent transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="font-heading">Samarbejde</CardTitle>
                <CardDescription className="font-body">Vi lytter og tilpasser os dine behov</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-accent transition-colors">
              <CardHeader>
                <Heart className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="font-heading">Kundetilfredshed</CardTitle>
                <CardDescription className="font-body">Din tilfredshed er vores succes</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-accent">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-heading">Særtilbud: 10% rabat på brolægning</CardTitle>
              <CardDescription className="text-lg font-body">
                Book din brolægning nu og få 10% rabat i hele 2025. Kontakt os for at høre mere om tilbuddet.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-heading font-semibold" asChild>
                <a href="tel:71411573">Ring for tilbud: 71 41 15 73</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-[hsl(var(--hero-dark))] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Lad os tale om dit projekt</h2>
            <p className="text-xl mb-8 text-white/90 font-body">Kontakt os i dag for et uforpligtende tilbud</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg font-heading font-semibold" asChild>
                <a href="tel:71411573">Ring: 71 41 15 73</a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-heading font-semibold" asChild>
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

export default OmOs;