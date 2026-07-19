"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[120px] sm:h-[500px] sm:w-[500px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:justify-between lg:px-8">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-center lg:text-left"
        >
          <span className="inline-block rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-sm font-medium text-yellow-400">
            Formação completa em programação
          </span>

          <h1 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            Transforme sua carreira
            <br />
            através da programação
          </h1>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Aprenda programação do zero ao avançado criando projetos reais,
            desenvolvendo experiência prática e construindo um portfólio para o
            mercado de tecnologia.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#formations"
              className="flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              Conhecer formações
              <ArrowRight size={20} />
            </a>

            <a
              href="#projects"
              className="rounded-full border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400"
            >
              Ver projetos
            </a>
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.7 },
            x: { duration: 0.7 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-3xl bg-yellow-400/10 blur-3xl" />

          <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 backdrop-blur-xl">
            <p className="text-sm text-yellow-400">&lt;/&gt; DevClub</p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Full Stack
            </h3>

            <p className="mt-3 text-zinc-400">
              Domine as tecnologias utilizadas pelas empresas.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {techs.map((tech) => (
                <div
                  key={tech}
                  className="rounded-xl bg-zinc-800 p-3 text-center text-white transition hover:bg-yellow-400 hover:text-black"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}