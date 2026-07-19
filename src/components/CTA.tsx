"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-8">

      <div className="
        absolute
        left-1/2
        top-10
        h-[350px]
        w-[350px]
        -translate-x-1/2
        rounded-full
        bg-yellow-400/10
        blur-[140px]
      " />

      <div className="relative mx-auto max-w-5xl">

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
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-yellow-400/20
            bg-zinc-900/80
            px-8
            py-16
            text-center
            backdrop-blur-xl
            shadow-[0_0_50px_rgba(250,204,21,0.08)]
            sm:px-16
          "
        >

          <div className="relative">

            <span className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-yellow-400
            ">
              Comece agora
            </span>


            <h2 className="
              mt-6
              text-4xl
              font-black
              leading-tight
              text-white
              sm:text-5xl
            ">
              Sua nova carreira
              <br />
              começa hoje
            </h2>


            <p className="
              mx-auto
              mt-6
              max-w-2xl
              text-zinc-400
              sm:text-lg
            ">
              Aprenda programação com projetos reais, comunidade e uma
              formação completa para entrar no mercado de tecnologia.
            </p>


            <a
              href="#formations"
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-yellow-400
                px-8
                py-4
                font-bold
                text-black
                transition
                hover:scale-105
                hover:bg-yellow-300
              "
            >
              Quero começar

              <ArrowRight
                className="
                  h-5
                  w-5
                  transition
                  group-hover:translate-x-1
                "
              />

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}