import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Library Management System",
      description: "Cloud-native application with full DevOps practices: Docker containers, Kubernetes orchestration, and complete automation via Terraform and Jenkins CI/CD.",
      image: "/attached_assets/library.png",
      tags: ["Docker", "Kubernetes", "AWS EKS", "Terraform"],
      github: "https://github.com/Ahmedyehia12/LibraryManagmentSystem",
      demo: null
    },
    {
      title: "Neural Network Techniques Explorer",
      description: "Interactive toolkit implementing 6 ANN methods (RBF, PCA, SOM, ART1, Fuzzy, Genetic) with Streamlit GUI for visualization and experimentation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Streamlit", "Neural Networks"],
      github: "https://github.com/MarwanMohammed2500/RBF-Calculator",
      demo: null
    },
    {
      title: "Smart Door/Lock System",
      description: "AI-powered smart lock with face recognition, backup password system, and IoT connectivity. Features ESP32 integration and Telegram notifications.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Computer Vision", "ESP32", "IoT"],
      github: null,
      demo: null
    },
    {
      title: "Egyptian ID OCR Model",
      description: "Specialized OCR model for extracting information from Egyptian national ID cards. Combines optimized pretrained models with custom-trained components.",
      image: "https://egyptianstreets.com/wp-content/uploads/2022/07/unnamed-3.png",
      tags: ["Computer Vision", "OCR", "Model Training"],
      github: "https://github.com/NASO7Y/OCR_Egyptian_ID",
      demo: null
    },
    {
      title: "MLPy - ML Algorithms from Scratch",
      description: "Open-source educational project implementing machine learning algorithms from scratch, comparing performance with established libraries like Scikit-Learn.",
      image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Machine Learning", "Python", "Education"],
      github: "https://github.com/MarwanMohammed2500/MLPy",
      demo: null
    },
    {
      title: "Sudoku Generator & Solver",
      description: "Intelligent Sudoku solver using backtracking algorithms (DFS) with puzzle generation capabilities. Includes board validation and console visualization.",
      image: "https://images.unsplash.com/photo-1731320965510-0c48cf81bd56?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Algorithms", "Python", "DFS"],
      github: "https://github.com/MarwanMohammed2500/Sudoku-Solver",
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Showcasing my work in AI, MLOps, and intelligent systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    {project.github ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, "_blank")}
                        className="flex-1 border border-blue-300"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled className="flex-1">
                        Private Repository
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, "_blank")}
                        className="flex-1"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Research */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Research & Publications</h3>
          <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold mb-4">Simulating Non-Linear Behavior in Logistic Regression</h4>
              <p className="text-muted-foreground mb-4">
                Explored feature engineering techniques to improve logistic regression performance by 6% (F1-score) 
                and 4% (accuracy) through log-odds binning and one-hot encoding transformations.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Feature Engineering</Badge>
                  <Badge variant="secondary">Logistic Regression</Badge>
                  <Badge variant="secondary">Research</Badge>
                </div>
                <Button variant="outline" onClick={() => window.open("https://medium.com/@marwanmohammed1886/engineering-non-linearity-into-logistic-regression-like-a-decision-tree-729652ccc085", "_blank")}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read Article
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
