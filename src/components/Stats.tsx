"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10K+",
    label: "Alunos",
  },
  {
    number: "500+",
    label: "Projetos",
  },
  {
    number: "1000+",
    label: "Aulas",
  },
  {
    number: "Full Stack",
    label: "Formação",
  },
];

export default function Stats() {
  return (
    <section className="px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Nossos números
          </span>

          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl">
            Resultados que inspiram
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Milhares de alunos já começaram sua jornada na programação através
            do DevClub.
          </p>
        </motion.div>


        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/60
                p-8
                text-center
                backdrop-blur-xl
                transition
                duration-300
                hover:-translate-y-2
                hover:border-yellow-400/40
              "
            >

              <h3 className="text-3xl font-black text-yellow-400 sm:text-4xl">
                {stat.number}
              </h3>

              <p className="mt-3 text-zinc-400">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}