import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "End-to-End MLOps Pipeline: Deep Learning Deployment",
      description: "A practical MLOps-focused project demonstrating the full lifecycle of a deep learning model using FashionMNIST — from modular model design to deployment with FastAPI, Docker, and Kubernetes. Emphasis is on production-readiness, reproducibility, and clean backend workflows.",
      image: "attached_assets/inference.png",
      tags: ["PyTorch", "FastAPI", "Docker", "Kubernetes", "TensorBoard", "TorchScript", "Matplotlib", "Modular ML Design"],
      github: "https://github.com/MarwanMohammed2500/End-to-End-MLOps-Pipeline-Deep-Learning-Deployment",
      demo: null
    },
    {
      title: "Neural Network Techniques Explorer",
      description: "Interactive toolkit implementing 6 ANN methods (RBF, PCA, SOM, ART1, Fuzzy, Genetic) with Streamlit GUI for visualization and experimentation.",
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Python", "Streamlit", "Neural Networks", "Git"],
      github: "https://github.com/MarwanMohammed2500/RBF-Calculator",
      demo: null
    },
    {
      title: "Smart Door/Lock System",
      description: "A smart lock system with real-time face recognition, backup password access, and IoT connectivity using ESP32. The system sends intrusion alerts via Telegram and can integrate with broader home security networks. Ideal for residential or high-security environments as a first layer of defense against unauthorized access.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Computer Vision", "ESP32", "IoT"],
      github: null,
      demo: null
    },
    {
      title: "Scalable Question Generation System",
      description: "An MCQ Generation System that combines document loading, embeddings, and large language model prompting into an end-to-end pipeline with a simple Streamlit interface. This is not a production-ready platform, but a functional demo that shows how such a system could be built and scaled.",
      image: "https://i.postimg.cc/MHVvrq0T/q-gen-screenshot.png",
      tags: ["LangChain", "Streamlit", "Google Gemini embeddings", "in-memory vector storage", "File ingestion", "RegEx"],
      github: "https://github.com/MarwanMohammed2500/Scalable_Question_Generation_System",
      demo: null
    },
    {
      title: "Egyptian ID OCR Model",
      description: "A specialized OCR pipeline for extracting structured data from Egyptian national ID cards, combining fine-tuned pretrained models with custom-trained components. Ideal for governmental and private institutions seeking to automate data entry, improve accuracy, and ensure data integrity when processing ID-based information.",
      image: "https://egyptianstreets.com/wp-content/uploads/2022/07/unnamed-3.png",
      tags: ["Computer Vision", "OCR", "Model Training"],
      github: "https://github.com/NASO7Y/OCR_Egyptian_ID",
      demo: null
    },
    {
      title: "Celebrity Face Recognition CV Model",
      description: "A real-time video recognition system using InsightFace's antelopev2 and Deep SORT. While built with celebrities for demo purposes, the system demonstrates core technologies used in automated security systems, access control, and smart surveillance.",
      image: "https://plus.unsplash.com/premium_photo-1700830452915-434970100217?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Computer Vision", "Pretrained Models", "Video and Image Processing", "Embedding Similarity", "Deep Learning Interface", "Object Tracking"],
      github: "https://github.com/MarwanMohammed2500/Celebrity_Face_Recognition",
      demo: null
    },
    {
      title: "ML Web App for Predicting Ad Campaign Responses",
      description: "Deployed a modified logistic regression model in a web app to predict user response to ads based on age and salary. Helps optimize ad spend by enabling more targeted and cost-efficient marketing campaigns.",
      image: "https://images.unsplash.com/photo-1656164630621-8974e3a7e85c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Python", "Django", "Docker", "Git", "Supervised model training"],
      github: "https://github.com/MarwanMohammed2500/Ad-Campaign-Demographical-Prediction",
      demo: null
    },
    {
      title: "Sudoku Generator & Solver",
      description: "Intelligent Sudoku solver using backtracking algorithms (DFS) with puzzle generation capabilities. Includes board validation and console visualization.",
      image: "https://images.unsplash.com/photo-1731320965510-0c48cf81bd56?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Algorithms", "Python", "DFS"],
      github: "https://github.com/MarwanMohammed2500/Sudoku-Solver",
      demo: null
    },
    {
      title: "Cloud-Native Library Management System",
      description: "Cloud-native application with full DevOps practices: Docker containers, Kubernetes orchestration, and complete automation via Terraform and Jenkins CI/CD.",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Docker", "Kubernetes", "AWS EKS", "Terraform"],
      github: "https://github.com/Ahmedyehia12/LibraryManagmentSystem",
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
                        View Project
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
