import engineerPortrait from "@/assets/engineer-portrait.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img
                src={engineerPortrait}
                alt="Eng. Tom Illa"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="animate-slide-up space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                With over a decade of experience in civil and structural engineering,
                I specialize in designing innovative infrastructure solutions that
                prioritize safety, sustainability, and efficiency.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                My expertise spans across structural design, highway engineering,
                bridge construction, and project management. I have successfully
                delivered numerous projects ranging from commercial buildings to
                large-scale infrastructure developments.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4"></div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">10+ Years of Experience</h3>
                    <p className="text-muted-foreground">
                      Successfully completed over 50 engineering projects
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4"></div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Licensed Professional Engineer</h3>
                    <p className="text-muted-foreground">
                      Certified structural and civil engineering specialist
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4"></div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Dedicated to Excellence</h3>
                    <p className="text-muted-foreground">
                      Delivering innovative and reliable engineering solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
