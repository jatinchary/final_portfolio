"use client";

import { useState } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const { setTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/#about" className="hover:text-primary">
              About
            </Link>
            <Link href="/#experience" className="hover:text-primary">
              Experience
            </Link>
            <Link href="/#projects" className="hover:text-primary">
              Projects
            </Link>
            <Link href="/#skills" className="hover:text-primary">
              Skills
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/80 backdrop-blur-sm">
            <Link
              href="/#about"
              className="block px-3 py-2 hover:text-primary"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/#experience"
              className="block px-3 py-2 hover:text-primary"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              href="/#projects"
              className="block px-3 py-2 hover:text-primary"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/#skills"
              className="block px-3 py-2 hover:text-primary"
              onClick={toggleMenu}
            >
              Skills
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}