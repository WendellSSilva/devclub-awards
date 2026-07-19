"use client";

import { motion } from "framer-motion";

const links = [
  {
    name: "Benefícios",
    href: "#benefits",
  },
  {
    name: "Formações",
    href: "#formations",
  },
  {
    name: "Projetos",
    href: "#projects",
  },
  {
    name: "Comunidade",
    href: "#community",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-zinc-800
        px-6
        py-12
        sm:px-8
      "
    >

      <div
        className="
          absolute
          right-0
          top-0
          h-[250px]
          w-[250px]
          rounded-full
          bg-yellow-400/5
          blur-[120px]
        "
      />


      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          relative
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-8
          md:flex-row
        "
      >

        {/* Logo */}

        <div className="text-center md:text-left">

          <h2
            className="
              text-2xl
              font-black
              text-white
            "
          >
            Dev
            <span className="text-yellow-400">
              Club
            </span>
          </h2>


          <p
            className="
              mt-2
              text-sm
              text-zinc-500
            "
          >
            Formação Full Stack
          </p>

        </div>



        {/* Links */}

        <nav
          className="
            flex
            flex-wrap
            justify-center
            gap-6
          "
        >

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="
                text-sm
                text-zinc-400
                transition
                hover:text-yellow-400
              "
            >
              {link.name}
            </a>

          ))}

        </nav>


      </motion.div>



      <div
        className="
          relative
          mx-auto
          mt-10
          max-w-7xl
          border-t
          border-zinc-800
          pt-8
          text-center
          text-sm
          text-zinc-600
        "
      >
        © 2026 DevClub. Todos os direitos reservados.
      </div>


    </footer>
  );
}