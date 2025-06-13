import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">
            Bridging DevOps expertise with machine learning and intelligent systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Currently pursuing my Bachelor's in Computer Science at Menofia University with a focus on Intelligent Systems. 
              My unique combination of DevOps experience and machine learning expertise allows me to build end-to-end AI solutions 
              that are not only innovative but also scalable and maintainable.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I take a hands-on, results-driven approach to every challenge, whether it's optimizing ML workflows, 
              building intelligent systems, or deploying models at scale. My experience spans from traditional software 
              development to cutting-edge AI research and implementation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-sm text-muted-foreground">B.S. Computer Science</p>
                  <p className="text-sm text-muted-foreground">Menofia University</p>
                  <p className="text-sm text-muted-foreground">GPA: 3.48/4.0</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <p className="text-sm text-muted-foreground">Arabic (Native)</p>
                  <p className="text-sm text-muted-foreground">English (C2 Proficient)</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern technology and AI visualization"
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
