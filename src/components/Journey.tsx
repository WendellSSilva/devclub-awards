"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Code2,
  Cpu,
  Target,
} from "lucide-react";

const steps = [
  {
    icon: Rocket,
    title: "Primeiros passos",
    description:
      "Aprenda os fundamentos da programação e construa uma base sólida para evoluir.",
  },
  {
    icon: Code2,
    title: "Projetos reais",
    description:
      "Crie aplicações completas praticando como um desenvolvedor profissional.",
  },
  {
    icon: Cpu,
    title: "Tecnologias modernas",
    description:
      "Domine ferramentas utilizadas no mercado como React, Next.js e Node.js.",
  },
  {
    icon: Target,
    title: "Mercado de trabalho",
    description:
      "Desenvolva um portfólio profissional e esteja preparado para novas oportunidades.",
  },
];

export default function Journey() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-8">

      {/* Glow */}
      <div
        className="
          absolute
          left-0
          bottom-0
          h-[320px]
          w-[320px]
          rounded-full
          bg-yellow-400/10
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-yellow-400
            "
          >
            Sua evolução
          </span>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              text-white
              sm:text-5xl
            "
          >
            Uma jornada completa
            <br />
            até o mercado de tecnologia
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-zinc-400
            "
          >
            Um caminho estruturado para sair do zero, criar projetos reais
            e desenvolver as habilidades que empresas procuram.
          </p>
        </motion.div>

        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="
                  group
                  relative
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-900/70
                  p-8
                  backdrop-blur-xl
                  transition
                  duration-300
                  hover:-translate-y-3
                  hover:border-yellow-400/40
                  hover:shadow-[0_0_40px_rgba(250,204,21,0.12)]
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-yellow-400/10
                  "
                >
                  <Icon className="h-7 w-7 text-yellow-400" />
                </div>

                <span
                  className="
                    absolute
                    right-8
                    top-8
                    text-5xl
                    font-black
                    text-zinc-800
                    transition
                    group-hover:text-yellow-400/20
                  "
                >
                  0{index + 1}
                </span>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}