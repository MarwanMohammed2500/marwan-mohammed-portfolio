import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Lightbulb, Users, MessageCircle, Rocket, TrendingUp, Handshake } from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    {
      name: "Programming Languages",
      level: 95,
      description: "Python, C/C++, Bash, SQL, Object Oriented Programming (OOP)"
    },
    {
      name: "Machine Learning & Data Science",
      level: 90,
      description: "Scikit-Learn, PyTorch, NumPy, Pandas, Experiment Tracking (Manual, TensorBoard), Modular Design"
    },
    {
      name: "Data Analysis & Exploration",
      level: 90,
      description: "Data Visualization(Matplotlib, SeaBorn), Excel/Google Sheets, PowerBI"
    },
    {
      name: "MLOps",
      level: 90,
      description: "Docker, Kubernetes, Terraform, Django, CI/CD Pipelines(Jenkins, GitHub Actions), FastAPI"
    },
    {
      name: "Cloud Infrastructure",
      level: 80,
      description: "AWS (EC2, EKS, ECS, RDS)"
    },
    {
      name: "Robotics and IoT",
      level: 60,
      description: "Arduino, ESP32, ArdionoCloud, 3D Designing (Fusion360), IoT Communication, Embedded Systems"
    }
  ];

  const softSkills = [
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Complex technical challenges"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Team management & mentoring"
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description: "Technical & public speaking"
    },
    {
      icon: Rocket,
      title: "Adaptability",
      description: "Quick learning & flexibility"
    },
    {
      icon: TrendingUp,
      title: "Research & Development",
      description: "Innovation & experimentation"
    },
    {
      icon: Handshake,
      title: "Teamwork",
      description: "Collaborative development"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">
            My expertise across the AI and DevOps spectrum
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Core Technologies</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3 mb-1" />
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Professional Skills</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <skill.icon className="text-primary text-2xl mb-2" />
                      <h4 className="font-semibold mb-1">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
