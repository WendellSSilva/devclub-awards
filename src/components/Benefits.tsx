"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Users,
  Laptop,
} from "lucide-react";

const benefits = [
  {
    icon: Code2,
    title: "Aprenda fazendo",
    description:
      "Construa projetos reais desde o início e desenvolva experiência prática para criar um portfólio profissional.",
  },

  {
    icon: Laptop,
    title: "Tecnologias do mercado",
    description:
      "Aprenda ferramentas utilizadas por desenvolvedores profissionais, como JavaScript, React e Node.js.",
  },

  {
    icon: Rocket,
    title: "Do zero ao profissional",
    description:
      "Uma jornada estruturada para evoluir suas habilidades e conquistar novas oportunidades.",
  },

  {
    icon: Users,
    title: "Comunidade DevClub",
    description:
      "Faça parte de uma comunidade de pessoas com o mesmo objetivo: evoluir na programação.",
  },
];


export default function Benefits() {
  return (
    <section
      id="benefits"
      className="px-6 py-24 sm:px-8"
    >

      <div className="mx-auto max-w-7xl">


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
            once:true,
          }}
          transition={{
            duration:0.7,
          }}
          className="text-center"
        >

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Por que escolher o DevClub?
          </span>


          <h2 className="
            mt-5
            text-4xl
            font-black
            text-white
            sm:text-5xl
          ">
            Uma formação pensada para
            <br />
            transformar carreiras
          </h2>


          <p className="
            mx-auto
            mt-6
            max-w-2xl
            text-zinc-400
          ">
            Mais do que aprender código, você desenvolve habilidades para criar
            projetos reais e entrar no mercado de tecnologia.
          </p>


        </motion.div>



        <div className="
          mt-14
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
        ">


          {benefits.map((item,index)=>{

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{
                  opacity:0,
                  y:50,
                }}
                whileInView={{
                  opacity:1,
                  y:0,
                }}
                viewport={{
                  once:true,
                }}
                transition={{
                  duration:0.5,
                  delay:index * 0.1,
                }}

                className="
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-900/60
                  p-7
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:border-yellow-400/40
                "
              >


                <div className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-yellow-400/10
                ">

                  <Icon className="h-6 w-6 text-yellow-400" />

                </div>



                <h3 className="
                  mt-6
                  text-xl
                  font-bold
                  text-white
                ">
                  {item.title}
                </h3>


                <p className="
                  mt-3
                  leading-7
                  text-zinc-400
                ">
                  {item.description}
                </p>


              </motion.div>

            );

          })}


        </div>


      </div>


    </section>
  );
}