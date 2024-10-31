import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Wallstreet Consulting Services",
    period: "AUG 2024 - Present",
    description: [
      "Engineered scalable web applications leveraging Reactjs for frontend development, PHP/Laravel for backend functionality, and SQL for efficient database management, optimizing performance by 30% and enhancing user experience through responsive design and RESTful APIs.",
      "Enhanced performance by 40% and user experience through collaborative problem-solving in agile environments.",
      "Mentored 5 trainees as a Frontend Developer, teaching React.js, JavaScript, Tailwind CSS, and Material UI, increasing team productivity by 30%."
    ]
  }
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
                <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
