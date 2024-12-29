"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";

const projects = [
  {
    title: "Crypto Wallet Generator",
    description: "Crypto Wallet Generator for Solana and Ethereum",
    image:
      "https://imgs.search.brave.com/aRo7hLQ6-Xk3LiiKiMCYrhwrXw5yZFpV4SQxvlxof9U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzg5LzM3Lzgz/LzM2MF9GXzE4OTM3/ODMzNF9jWTNRbUV0/V3dPNFVEbmJPbjNL/eVI5bnJqQnJ1c2R2/Sy5qcGc",
    technologies: ["React.js", "TypeScript", "web3.js", "tailwind"],
    github: "https://github.com/jatinchary/crypoto_hd_wallet",
    demo: "https://crypoto-hd-wallet.vercel.app/",
  },
  {
    title: "Solana Wallet Adapter",
    description:
      "A project to airdrop SOL, sign transactions, and send SOL on Solana Devnet using wallet integration.",
    image:
      "https://imgs.search.brave.com/qYKN0JGA2yg3l2difB1hURgVDzxcSr1WFmFQA8pGON4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbnph/LXh5ei5naXRodWIu/aW8vd2FsbGV0LWFk/YXB0ZXIvd2FsbGV0/cy5wbmc",
    technologies: [
      "React",
      "TypeScript",
      "web3.js",
      "Wallet adapter",
      "Tailwind",
    ],
    github: "https://github.com/jatinchary/crypto_wallet",
    demo: "https://crypto-wallet-amber.vercel.app/",
  },
  {
    title: "Solana Token Generator",
    description:
      "The Solana Token Generator allows users to easily create custom tokens on the Solana blockchain with unique names, symbols, and supply",
    image:
      "https://imgs.search.brave.com/u3VyX8CAsrxhJJL-I7qqqb0y22kJPLtofk5O0ekqbbo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zbWl0/aGlpLmlvL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzA4L3Rv/cC00LXNvbGFuYS10/b2tlbi1nZW5lcmF0/b3JzLWpwZy53ZWJw",
    technologies: ["React", "TypeScript", "Web3.js", "Tailwind"],
    github: "https://github.com/jatinchary/token_genrator-solana",
    demo: "https://token-genrator-solana.vercel.app/",
  },
  {
    title: "ERC-20 Token Creation in Ethereum",
    description:
      "ERC-20 Token Creation involves creating a custom token on Ethereum using the ERC-20 standard, enabling compatibility with wallets and dApps.",
    image:
      "https://imgs.search.brave.com/Fbz2Uj8i9fxN6guzOcyqGDmIobMhUGh43-t3pNfu4sU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Yml0Y29pbi5jb20v/c3RhdGljLzBiYjRm/NGNiNjE5MmNiZjdk/MWY2NzA5MTMyNGI1/MjYyL2IzMDEwL2dl/dC1zdGFydGVkLXdo/YXQtYXJlLWVyYy0y/MC10b2tlbnMucG5n",
    technologies: ["Solidity", "Foundry", "Rimix", "[SMART CONTRACT]"],
    github: "https://github.com/jatinchary/smart_coin",
    demo: "",
  },
];

export function Web3projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Web3 Projects</h2>
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
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
