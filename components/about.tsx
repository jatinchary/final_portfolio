import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              I am a passionate Full Stack Developer with extensive experience in building
              modern web applications. My journey in software development has equipped me
              with a deep understanding of both front-end and back-end technologies.
              I specialize in creating scalable solutions using React.js, Next.js,
              Node.js, and various other cutting-edge technologies.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              With a strong foundation in computer science and years of practical
              experience, I approach each project with a focus on writing clean,
              maintainable code and delivering exceptional user experiences. I am
              constantly learning and staying updated with the latest industry trends
              and best practices.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}