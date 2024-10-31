"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  // Handlers for button clicks
  const handleGithubClick = () => {
    window.open("https://github.com/jatinchary", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/l-jatin-chary-6b3870295/", "_blank");
  };

  const handleMailClick = () => {
    window.location.href = "mailto:charyjatin@gmail.com";
  };
  const handleResume=()=>{
    window.open("https://drive.google.com/file/d/1Uf_vc7v7Jwoap-OP0Yke8VqLXzvFooUR/view?usp=drive_link","_blank");
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
             <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
             L Jatin
            </h1>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Full Stack Developer
            </h1>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl">
              Building robust and scalable applications with modern technologies.
              Passionate about creating exceptional user experiences.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" onClick={handleGithubClick}>
                  <GithubIcon className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" onClick={handleLinkedInClick}>
                  <LinkedinIcon className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" onClick={handleMailClick}>
                  <MailIcon className="mr-2 h-5 w-5" />
                  Contact
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" onClick={handleResume}>
                <img src="https://img.icons8.com/?size=100&id=R9cokz2UAdyo&format=png&color=000000" className="mr-2 h-5 w-5" />
                  Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="https://wallpapers.com/images/featured/kid-goku-pictures-drrtt5vmc1ndmwl0.jpg"
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
