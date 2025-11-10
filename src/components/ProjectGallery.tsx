import project1Before from "@/assets/project-1-before.jpg";
import project1After from "@/assets/project-1-after.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const ProjectGallery = () => {
  const projects = [
    { src: project1Before, alt: "Brolægningsprojekt - før" },
    { src: project1After, alt: "Brolægningsprojekt - efter" },
    { src: project2, alt: "Flisebelægning med træ" },
    { src: project3, alt: "Brolægning i gård" },
    { src: project4, alt: "Varmepumpe installation" },
    { src: project5, alt: "Dræning og kloakarbejde" },
    { src: project6, alt: "Græsplantning og terrassering" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Billeder fra Projekter
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Se eksempler på vores professionelle arbejde med brolægning, havearbejde og Anlægsgartneri i Nordsjælland
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{project.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
