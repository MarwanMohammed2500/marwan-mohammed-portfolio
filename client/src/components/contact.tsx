import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, FileUser, CalendarClock, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const handleOpenCV = async () => {
      window.open("https://docs.google.com/document/d/1CbIyCawneZVk16mW8cBuwLEU8ELdMP4AsgmO3NPkf68/edit?usp=sharing", '_blank'); 
    };
  const handleOpenFreelanceContract = async () => {
      window.open("https://docs.google.com/document/d/1Z09kmG1ZD0qbE8YVCyZwJ_-ipBA928fM_yc3W_K_iqU/edit?usp=sharing", '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8">
              I'm always interested in discussing new opportunities in Data Science, MLOps, and AI, or just having a nice chat about the tech industry or cars and bikes. 
              Whether you're looking for collaboration, have a project in mind, or just want to connect, 
              I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-primary w-6 mr-3" />
                <span>marwanmohammed056@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary w-6 mr-3" />
                <span><a href="https://wa.me/201018839464">01018839464</a></span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary w-6 mr-3" />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center">
                <CalendarClock className="text-primary w-6 mr-3" />
                <span><a href="https://calendar.app.google/MVFxdEbJPitdrkMd6">Book a meeting now!</a></span>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open("https://github.com/MarwanMohammed2500", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open("https://linkedin.com/in/marwan-mohammed1", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open("https://kaggle.com/marwanmohammedsayed", "_blank")}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336"/>
                </svg>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open("https://medium.com/@marwanmohammed1886", "_blank")}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
                </svg>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6">Resume</h4>
                <p className="text-muted-foreground mb-6">
                  Get a detailed overview of my experience, skills, and achievements.
                </p>
                <Button onClick={handleOpenCV} className="w-full mb-8">
                  <FileUser className="mr-2 h-4 w-4" />
                  CV/Resume
                </Button>

                <div className="p-4 bg-primary/10 rounded-lg">
                  <h5 className="font-semibold text-primary mb-2">Currently Open To:</h5>
                  <div className="space-y-1">
                    <Badge variant="outline" className="mr-2 mb-1">AI Research Opportunities</Badge>
                    <Badge variant="outline" className="mr-2 mb-1">MLOps Engineering Roles</Badge>
                    <Badge variant="outline" className="mr-2 mb-1">Data Science Positions</Badge>
                    <Badge variant="outline" className="mr-2 mb-1">Freelance Projects</Badge>
                    <Button onClick={handleOpenFreelanceContract} className="w-full mb-8">
                      <FileUser className="mr-2 h-4 w-4" />
                      Freelance Contract
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
