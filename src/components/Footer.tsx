import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Eng. Tom Illa</h3>
              <p className="text-primary-foreground/80">
                Civil & Structural Engineer specializing in infrastructure design and project management.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:tomilla.engineer@example.com" className="p-3 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+254700123456" className="p-3 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80">
              © {currentYear} Eng. Tom Illa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
