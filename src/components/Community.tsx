"use client";

import { motion } from "framer-motion";
import {
  Users,
  Code2,
  Layers,
  TrendingUp,
} from "lucide-react";


const community = [
  {
    icon: Users,
    number: "Milhares",
    title: "Alunos na comunidade",
    description:
      "Pessoas aprendendo programação e buscando uma nova carreira.",
  },

  {
    icon: Code2,
    number: "Projetos reais",
    title: "Aprendizado na prática",
    description:
      "Aplicações criadas para desenvolver experiência profissional.",
  },

  {
    icon: Layers,
    number: "Tecnologias atuais",
    title: "Mercado de trabalho",
    description:
      "Conteúdos alinhados com as ferramentas usadas por empresas.",
  },

  {
    icon: TrendingUp,
    number: "Evolução",
    title: "Do zero ao profissional",
    description:
      "Uma jornada estruturada para evoluir suas habilidades.",
  },
];


export default function Community() {
  return (
    <section
      id="community"
      className="relative overflow-hidden px-6 py-24 sm:px-8"
    >


      <div className="
        absolute
        right-0
        top-20
        h-[300px]
        w-[300px]
        rounded-full
        bg-yellow-400/10
        blur-[120px]
      " />



      <div className="
        relative
        mx-auto
        max-w-7xl
      ">


        <motion.div
          initial={{
            opacity:0,
            y:40,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
          transition={{
            duration:0.7,
          }}
          className="text-center"
        >

          <span className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.3em]
            text-yellow-400
          ">
            Comunidade DevClub
          </span>


          <h2 className="
            mt-5
            text-4xl
            font-black
            text-white
            sm:text-5xl
          ">
            Muito além de
            <br />
            aprender código
          </h2>


          <p className="
            mx-auto
            mt-6
            max-w-2xl
            text-zinc-400
          ">
            Faça parte de uma comunidade de pessoas que estão construindo
            uma nova carreira através da programação.
          </p>


        </motion.div>



        <div className="
          mt-14
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
        ">


          {community.map((item,index)=>{

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
                  delay:index * 0.12,
                }}

                className="
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-900/60
                  p-7
                  transition
                  duration-300
                  hover:-translate-y-3
                  hover:border-yellow-400/40
                "
              >


                <Icon className="
                  h-8
                  w-8
                  text-yellow-400
                " />


                <h3 className="
                  mt-6
                  text-3xl
                  font-black
                  text-white
                ">
                  {item.number}
                </h3>


                <h4 className="
                  mt-2
                  text-lg
                  font-bold
                  text-white
                ">
                  {item.title}
                </h4>


                <p className="
                  mt-3
                  text-sm
                  leading-6
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