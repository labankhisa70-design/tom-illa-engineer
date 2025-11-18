import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import projectRoad from "@/assets/project-road.jpg";
import projectBuilding from "@/assets/project-building.jpg";
import projectBridge from "@/assets/project-bridge.jpg";
import projectHousing from "@/assets/project-housing.jpg";
import projectSurvey from "@/assets/project-survey.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  image: string;
  details: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Highway Rehabilitation Project",
      description: "Complete rehabilitation of 15km highway section including pavement reconstruction and drainage systems.",
      location: "Nairobi-Mombasa Highway, Kenya",
      image: projectRoad,
      details: "This comprehensive highway rehabilitation project involved complete reconstruction of a 15km section of the major Nairobi-Mombasa corridor. The project included pavement design, drainage system improvements, and implementation of modern road safety features. Completed within budget and ahead of schedule.",
    },
    {
      id: 2,
      title: "Multi-Storey Commercial Building",
      description: "Design and construction supervision of a modern 12-storey commercial complex.",
      location: "Nairobi CBD, Kenya",
      image: projectBuilding,
      details: "Structural design and construction supervision for a state-of-the-art 12-storey commercial building in Nairobi's central business district. The project featured advanced steel and concrete composite systems, modern MEP integration, and sustainable design principles. Total built-up area: 25,000 sqm.",
    },
    {
      id: 3,
      title: "Reinforced Concrete Bridge",
      description: "Design and construction of a 45m span reinforced concrete bridge over river.",
      location: "Machakos County, Kenya",
      image: projectBridge,
      details: "Complete structural design and construction supervision of a 45-meter span reinforced concrete bridge. The project included detailed foundation design, structural analysis, and implementation of modern construction techniques. The bridge serves as a critical connection for the local community.",
    },
    {
      id: 4,
      title: "Residential Housing Development",
      description: "Master planning and structural design for 200-unit residential estate.",
      location: "Kiambu County, Kenya",
      image: projectHousing,
      details: "Comprehensive structural design and planning for a 200-unit residential development featuring modern housing units, infrastructure planning, and sustainable community amenities. The project includes roads, drainage, water supply, and electrical infrastructure.",
    },
    {
      id: 5,
      title: "Site Surveying & Analysis",
      description: "Topographic survey and geotechnical investigation for industrial park development.",
      location: "Thika, Kenya",
      image: projectSurvey,
      details: "Extensive site investigation including topographic surveys, geotechnical analysis, and soil testing for a proposed industrial park development. The survey covered 50 hectares and provided critical data for foundation design and site planning.",
    },
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
              Featured Projects
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              A selection of successful engineering projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-bold text-xl text-primary">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <p className="text-sm font-medium text-accent">{project.location}</p>
                    <Button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg text-primary mb-2">Location</h4>
                  <p className="text-muted-foreground">{selectedProject.location}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-2">Project Overview</h4>
                  <p className="text-foreground leading-relaxed">{selectedProject.details}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Projects;
