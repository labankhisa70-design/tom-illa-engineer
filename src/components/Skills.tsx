import { Ruler, Building2, HardHat, ClipboardCheck, Map, Wrench, Building, Construction } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Ruler,
      title: "Structural Design",
      description: "AutoCAD, Revit, STAAD Pro",
    },
    {
      icon: Building2,
      title: "Structural Analysis",
      description: "Advanced structural calculations & modeling",
    },
    {
      icon: Construction,
      title: "Highway & Road Engineering",
      description: "Road design & rehabilitation projects",
    },
    {
      icon: Building,
      title: "Bridge Design",
      description: "Reinforced concrete & steel bridges",
    },
    {
      icon: HardHat,
      title: "Construction Supervision",
      description: "On-site management & quality control",
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "Planning, execution & delivery",
    },
    {
      icon: Map,
      title: "Surveying & Site Investigation",
      description: "Topographic surveys & soil analysis",
    },
    {
      icon: Wrench,
      title: "Reinforced Concrete & Steel Design",
      description: "Structural integrity & optimization",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Skills & Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Comprehensive engineering capabilities across multiple disciplines
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-primary">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
