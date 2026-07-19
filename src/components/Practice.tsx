"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Briefcase,
  Globe,
} from "lucide-react";


const practices = [
  {
    icon: Rocket,
    title: "Projetos reais",
    description:
      "Aprenda criando aplicações completas que simulam desafios encontrados no mercado.",
  },

  {
    icon: Briefcase,
    title: "Portfólio profissional",
    description:
      "Desenvolva projetos para mostrar suas habilidades e conquistar oportunidades.",
  },

  {
    icon: Globe,
    title: "Experiência prática",
    description:
      "Coloque seus conhecimentos em prática desde os primeiros passos.",
  },
];


export default function Practice() {
  return (
    <section className="px-6 py-24 sm:px-8">

      <div className="mx-auto max-w-7xl">


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
            Aprendizado na prática
          </span>


          <h2 className="
            mt-5
            text-4xl
            font-black
            text-white
            sm:text-5xl
          ">
            Projetos que preparam você
            <br />
            para o mercado
          </h2>


          <p className="
            mx-auto
            mt-6
            max-w-2xl
            text-zinc-400
          ">
            No DevClub você aprende programação construindo projetos reais
            e desenvolvendo experiência para sua carreira.
          </p>


        </motion.div>



        <div className="
          mt-14
          grid
          gap-6
          md:grid-cols-3
        ">


          {practices.map((item,index)=>{

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
                  delay:index * 0.15,
                }}

                className="
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-900/60
                  p-8
                  transition
                  duration-300
                  hover:-translate-y-3
                  hover:border-yellow-400/40
                "
              >


                <div className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-yellow-400/10
                ">

                  <Icon className="h-7 w-7 text-yellow-400" />

                </div>



                <h3 className="
                  mt-7
                  text-2xl
                  font-bold
                  text-white
                ">
                  {item.title}
                </h3>


                <p className="
                  mt-4
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