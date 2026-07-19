"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    title: "Do zero ao primeiro projeto",
    text:
      "Aprender construindo projetos reais mudou minha forma de enxergar programação e evolução profissional.",
  },

  {
    title: "Portfólio profissional",
    text:
      "A prática constante ajudou a criar aplicações mais próximas dos desafios encontrados no mercado.",
  },

  {
    title: "Nova carreira em tecnologia",
    text:
      "Uma jornada estruturada para desenvolver habilidades e conquistar novas oportunidades.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-8">

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-20
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-yellow-400/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Título */}
        <motion.div
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
            duration: 0.7,
          }}
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
            Transformação
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
            Resultados de quem
            <br />
            aprende na prática
          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-zinc-400
            "
          >
            Uma metodologia baseada em projetos reais, evolução constante
            e preparação para o mercado de tecnologia.
          </p>


        </motion.div>



        {/* Cards */}

        <div
          className="
            mt-14
            grid
            gap-8
            md:grid-cols-3
          "
        >

          {testimonials.map((item, index) => (

            <motion.div
              key={item.title}

              initial={{
                opacity: 0,
                y: 50,
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
                delay: index * 0.15,
              }}

              className="
                group
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

                <Quote className="h-7 w-7 text-yellow-400" />

              </div>



              <h3
                className="
                  mt-7
                  text-xl
                  font-bold
                  text-white
                "
              >
                {item.title}
              </h3>



              <p
                className="
                  mt-4
                  leading-7
                  text-zinc-400
                "
              >
                "{item.text}"
              </p>


            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}