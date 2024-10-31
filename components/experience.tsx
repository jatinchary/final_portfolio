import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description: "Led development of enterprise applications using React, Next.js, and Node.js. Implemented microservices architecture and improved system performance.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2019 - 2021",
    description: "Developed and maintained multiple web applications. Worked with React, Laravel, and PostgreSQL.",
  },
  {
    title: "Software Engineer",
    company: "StartUp Tech",
    period: "2017 - 2019",
    description: "Built RESTful APIs and implemented front-end features using React and Express.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}