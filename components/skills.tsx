"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const skillCategories = [
  {
    title: "Blockchain & Web3",
    skills: [
      { name: "Solidity", icon: "/icons/solidity.svg" },
      { name: "Rust", icon: "/icons/rust.svg" },
      { name: "Ethereum", icon: "/icons/ethereum.svg" },
      { name: "Solana", icon: "/icons/solana.svg" },
      { name: "Web3.js", icon: "/icons/web3.svg" },
      { name: "Ethers.js", icon: "/icons/ethereum.svg" },
      { name: "Foundry", icon: "/icons/foundry.png" }
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "React Native", icon: "/icons/react.svg" },
      { name: "Redux", icon: "/icons/redux.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      { name: "ShadCN", icon: "/icons/shadcn.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Hono", icon: "/icons/hono.svg" },
      { name: "Express", icon: "/icons/express.svg" },
      { name: "Laravel", icon: "/icons/laravel.svg" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "Redis", icon: "/icons/redis.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "Linux", icon: "/icons/linux.svg" },
      { name: "Git", icon: "/icons/git.svg" },
      { name: "AWS", icon: "/icons/aws.svg" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "PHP", icon: "/icons/php.svg" },
      { name: "C++", icon: "/icons/cpp.svg" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        className="flex flex-col items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="relative w-12 h-12 bg-muted rounded-lg p-2">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <span className="text-sm text-center">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}