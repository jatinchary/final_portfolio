"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";

const projects = [
  {
    title: "success story",
    description: "A website where people share their success stories.",
    image:
      "https://img.freepik.com/premium-photo/book-cover-with-title-success_759387-7.jpg?size=626&ext=jpg",
    technologies: ["React.js", "TypeScript", "Prisma", "PostgreSQL", "Hono"],
    github: "https://github.com/jatinchary/medium",
    demo: "https://succussstory-one-blush.vercel.app/",
  },
  {
    title: "Paytm Clone",
    description:
      "Developed a Paytm-like wallet application for simulated money transfers between users with 100% success rate.",
    image:
      "https://assetscdn1.paytm.com/images/catalog/view_item/764072/1615964143086.png",
    technologies: ["React", "Node.js", "MongoDb", "Express", "Tailwind"],
    github: "https://github.com/jatinchary/paytem-karo",
    demo: "",
  },
  {
    title: "Spotify Clone",
    description:
      "Created a Spotify-like application with features including user authentication, music search, playlist management, and playback, optimized by 50%.",
    image:
      "https://brandingforum.org/wp-content/uploads/2023/10/spotify-logo-1024x651.webp",
    technologies: ["React", "Express", "MongoDb", "Tailwind"],
    github: "https://github.com/jatinchary/spotify_frontend",
    demo: "",
  },
  {
    title: "Visual Context Captioning [PUBLICATION]",
    description:
      "Uses a fusion of CNNs and Transformers to generate concise and accurate captions for visual content. Combines CNNs for visual feature extraction and Transformers for sequence processing to enhance accessibility.",
    image:
      "https://media.mobidev.biz/2021/07/deep-learning-image-captioning-example-1.jpg?strip=all&lossy=1&ssl=1",
    technologies: ["CNN", "Transformer", "TensorFlow", "Python"],
    github: "https://github.com/jatinchary/visual-context-captioning",
    demo: "https://www.ijcrt.org/papers/IJCRT2403596.pdf",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Full-Stack Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  {project.demo ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
