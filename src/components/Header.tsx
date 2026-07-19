"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Benefícios", href: "#benefits" },
  { name: "Formações", href: "#formations" },
  { name: "Projetos", href: "#projects" },
  { name: "Comunidade", href: "#community" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "border-b border-zinc-800 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-devclub.png"
              alt="DevClub"
              width={73}
              height={13}
              style={{
                width: "73px",
                height: "auto",
              }}
              priority
            />

            <div>
              <h1 className="text-xl font-black text-white">
                Dev<span className="text-yellow-400">Club</span>
              </h1>

              <p className="text-xs text-zinc-500">
                Formação Full Stack
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 transition hover:text-yellow-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#formations"
              className="rounded-full bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              Começar agora
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.25 }}
              className="border-t border-zinc-800 bg-black lg:hidden"
            >
              <nav className="flex flex-col px-6 py-6">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-zinc-800 py-4 text-lg text-zinc-300 transition hover:text-yellow-400"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="#formations"
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-full bg-yellow-400 py-4 text-center font-bold text-black transition hover:bg-yellow-300"
                >
                  Começar agora
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}