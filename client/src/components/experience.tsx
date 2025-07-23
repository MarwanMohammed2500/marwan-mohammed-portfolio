import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Prezza",
      type: "Remote • Contract",
      period: "Jan 2025 - Present",
      current: true,
      description: "Joined mid-development to help scale infrastructure, troubleshooting issues while keeping teams aligned. Cross-functional work including Django development to meet project deadlines."
    },
    {
      title: "Student Guide",
      company: "CLS - Egyptian Ministry of Communication",
      type: "On-Site • Part Time",
      period: "Feb 2025 - Present",
      current: true,
      description: "Helping students navigate their career paths in DECI program, creating supportive environments for skill development and career growth."
    },
    {
      title: "Software Engineer & Data Analyst",
      company: "Al-Adel Charitable Association",
      type: "On-Site • Contract",
      period: "Jul 2024 - Nov 2024",
      current: false,
      description: "Led full lifecycle development of custom management system and built data dashboards for informed decision-making. Focused on iterative improvements for performance and usability."
    },
    {
      title: "DevOps Intern",
      company: "Banque Misr • Al-Rowad Program",
      type: "Hybrid • Internship",
      period: "Aug 2024 - Sep 2024",
      current: false,
      description: "Selected for prestigious internship program. Gained exposure to enterprise DevOps practices, inspiring my current pursuit of MLOps career path."
    }
  ];

  const volunteerExperiences = [
    {
      title: "Vice-President - AI Entrepreneurship Club",
      period: "Oct 2023 - Oct 2024",
      description: "Rebuilt organizational structure, supervised 7 communities and 5 committees. Led strategic oversight and hands-on execution of events and programs."
    },
    {
      title: "Head of HR Committee - AI Entrepreneurship Club",
      period: "Feb 2023 - Sept 2024",
      description: "Led all HR operations while wearing multiple hats (from graphic design and video editing to copywriting and casually coding a few tools too)"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground">
            My professional journey in tech and data science
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-primary/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "" : "md:justify-end"
                }`}
              >
                <div
                  className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-background z-10 ${
                    exp.current ? "bg-primary" : "bg-zinc-400 dark:bg-zinc-600"
                  }`}
                />

                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:w-1/2 md:pr-8" : "md:w-1/2 md:pl-8"}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        {exp.current && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteer Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Volunteer Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {volunteerExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{exp.title}</h4>
                    <p className="text-primary text-sm mb-3">{exp.period}</p>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
