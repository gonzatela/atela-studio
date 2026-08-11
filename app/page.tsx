"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { HERO_BG_IMAGE } from "@/data/heroBg";
import { FOUNDER_IMAGE } from "@/data/founder";
import { PROJECTS } from "@/data/projects";

const services = [
  "Dirección visual",
  "Web a medida",
  "Identidad digital",
  "Contenido y estructura",
  "Responsive",
  "Publicación",
];

const projectTypes = [
  "Web corporativa",
  "Portfolio",
  "Inmobiliaria",
  "Interiorismo",
  "E-commerce",
  "Landing page",
];

export default function Home() {
  const contactRef = useRef<HTMLElement | null>(null);
  const [selectedProjectType, setSelectedProjectType] = useState(
    projectTypes[0],
  );
  const [email, setEmail] = useState("");
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end end"],
  });
  const islandScaleX = useTransform(scrollYProgress, [0, 0.58], [0.997, 1]);
  const islandScaleY = useTransform(scrollYProgress, [0, 0.58], [0.075, 1]);
  const islandY = useTransform(scrollYProgress, [0, 0.58], ["-1%", "0%"]);
  const islandOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const islandContentOpacity = useTransform(
    scrollYProgress,
    [0.42, 0.68],
    [0, 1],
  );
  const islandTransform = useMotionTemplate`translateY(${islandY}) scaleX(${islandScaleX}) scaleY(${islandScaleY})`;
  const islandStyle = reduceMotion
    ? { opacity: 1, transform: "none" }
    : { opacity: islandOpacity, transform: islandTransform };
  const islandContentStyle = reduceMotion
    ? { opacity: 1 }
    : { opacity: islandContentOpacity };

  const mailSubject = encodeURIComponent(
    `Nuevo proyecto: ${selectedProjectType}`,
  );
  const mailBody = encodeURIComponent(
    `Hola Gonzalo,\n\nQuiero hablar sobre un proyecto de tipo: ${selectedProjectType}.\n\nMi email: ${email || ""}\n\nGracias.`,
  );

  return (
    <main className="min-h-screen bg-[#ededed] text-[#1c1c1c]">
      <header className="fixed left-2 right-2 top-2 z-50 rounded-[14px] bg-[#ededed]/90 px-5 py-4 shadow-[0_8px_28px_rgba(0,0,0,0.12)] backdrop-blur-xl md:left-3 md:right-3">
        <nav className="grid grid-cols-3 items-center text-[11px] font-semibold uppercase tracking-[0.18em]">
          <a
            href="#work"
            className="justify-self-start transition-opacity hover:opacity-50"
          >
            Work
          </a>
          <a
            href="#"
            className="justify-self-center text-xl font-black lowercase tracking-[-0.06em] md:text-2xl"
          >
            atela
          </a>
          <a
            href="#contact"
            className="justify-self-end transition-opacity hover:opacity-50"
          >
            Contact
          </a>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#06111f] px-5">
        <img
          src={HERO_BG_IMAGE}
          alt="Atela Studio visual background"
          className="absolute inset-0 h-full w-full object-cover opacity-75 brightness-[0.65] contrast-[1.15] saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45)_0,rgba(255,255,255,0.2)_7%,rgba(6,17,31,0)_24%),linear-gradient(115deg,rgba(255,255,255,0.55)_0,rgba(255,255,255,0)_18%),linear-gradient(64deg,rgba(59,130,246,0.38)_0,rgba(59,130,246,0)_35%)]" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-5xl text-center">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
            Atela Studio
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-[#ededed] sm:text-6xl md:text-7xl">
            La primera impresión empieza con un clic.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg font-semibold leading-[1.15] tracking-[-0.03em] text-white/92 drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] sm:text-2xl md:text-3xl">
            Y nosotros sabemos lo importante que es.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1160px]">
          <p className="max-w-5xl text-[30px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#1c1c1c] sm:text-5xl md:text-[64px]">
            Atela Studio crea webs elegantes, rápidas y pensadas para que una
            marca parezca tan seria como el producto que vende.
          </p>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-[1.35] text-[#7a7a7a] md:text-2xl">
            Diseño visual exigente, estructura clara y desarrollo con
            herramientas modernas para pasar de idea a página publicada sin
            perder detalle por el camino.
          </p>
        </div>
      </section>

      <section id="work" className="px-2 pb-28 md:px-3">
        <div className="mb-8 text-center">
          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Our work
            <br />
            <span className="text-[#7a7a7a]">See all</span>
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-[10px] bg-[#d8d8d8]"
            >
              <div className="aspect-[4/3] md:aspect-[16/11]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    {project.category} / {project.year}
                  </p>
                  <h3 className="mt-1 text-3xl font-semibold tracking-[-0.05em]">
                    {project.title}
                  </h3>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#1c1c1c] transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="px-5 pb-28 md:px-8">
        <div className="mx-auto grid max-w-[1160px] gap-8 md:grid-cols-[0.88fr_1.12fr] md:items-end">
          <div className="overflow-hidden rounded-[10px] bg-[#d8d8d8]">
            <img
              src={FOUNDER_IMAGE}
              alt="Gonzalo Atela"
              className="aspect-[4/5] h-full w-full object-cover grayscale-[18%]"
            />
          </div>
          <div className="pb-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7a7a7a]">
              Gonzalo Atela
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
              Pequeño estudio, decisiones rápidas.
            </h2>
            <p className="mt-6 max-w-xl text-xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#7a7a7a] md:text-2xl">
              Trabajo contigo de forma directa: concepto, estructura, diseño,
              desarrollo y publicación. Sin capas innecesarias.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={contactRef}
        id="contact"
        className="relative min-h-[155vh] px-2 pb-6 md:px-3"
      >
        <div className="sticky top-2 z-[60] flex min-h-[calc(100vh-1rem)] items-start justify-center overflow-hidden md:top-3 md:min-h-[calc(100vh-1.5rem)]">
          <motion.div
            style={islandStyle}
            className="relative z-10 max-h-[calc(100vh-1rem)] w-full origin-top overflow-y-auto rounded-[14px] bg-[#073bff] px-5 py-4 text-white shadow-[0_30px_90px_rgba(7,59,255,0.22)] will-change-transform md:max-h-[calc(100vh-1.5rem)] md:px-12"
          >
            <nav className="grid grid-cols-3 items-center text-[11px] font-semibold uppercase tracking-[0.18em]">
              <a
                href="#work"
                className="justify-self-start transition-opacity hover:opacity-60"
              >
                Work
              </a>
              <a
                href="#"
                className="justify-self-center text-xl font-black lowercase tracking-[-0.06em] md:text-2xl"
              >
                atela
              </a>
              <a
                href="#contact"
                className="justify-self-end transition-opacity hover:opacity-60"
              >
                Contact
              </a>
            </nav>

            <motion.div
              style={islandContentStyle}
              className="mx-auto max-w-[1160px] py-10 md:py-14"
            >
              <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-end">
                <div>
                  <p className="text-2xl font-black lowercase tracking-[-0.06em]">
                    atela
                  </p>
                  <h2 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                    Ideas, webs en marcha y decisiones de diseño bien tomadas.
                    <br />
                    <a
                      href={`mailto:g.atelanavarro@gmail.com?subject=${mailSubject}&body=${mailBody}`}
                      className="text-white/58 transition-colors hover:text-white"
                    >
                      Book call
                    </a>
                  </h2>
                </div>

                <div>
                  <p className="text-2xl font-semibold leading-[1] tracking-[-0.05em] text-white/72">
                    Ready when you are. Elige el tipo de proyecto y escríbeme
                    con el contexto inicial.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-2">
                    {projectTypes.map((type) => {
                      const isSelected = selectedProjectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedProjectType(type)}
                          className={`min-h-12 rounded-[10px] border px-3 text-left text-sm font-bold transition-colors ${
                            isSelected
                              ? "border-white bg-white text-[#073bff]"
                              : "border-white/20 bg-white/10 text-white hover:bg-white/15"
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="tu@email.com"
                      className="h-14 flex-1 rounded-[10px] border border-white/15 bg-white/10 px-5 text-sm font-semibold text-white outline-none placeholder:text-white/55 focus:border-white/55"
                    />
                    <a
                      href={`mailto:g.atelanavarro@gmail.com?subject=${mailSubject}&body=${mailBody}`}
                      className="inline-flex h-14 items-center justify-center rounded-[10px] bg-[#ededed] px-7 text-sm font-bold text-[#1c1c1c] transition-transform active:scale-[0.98]"
                    >
                      Contactar
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/90"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-14 flex flex-col gap-4 border-t border-white/20 pt-7 text-sm font-semibold text-white/80 md:flex-row md:items-center md:justify-between">
                <a
                  href="mailto:g.atelanavarro@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  g.atelanavarro@gmail.com
                </a>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/gonzalo-atela/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white"
                  >
                    LinkedIn
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <span>
                    Copyright 2026 Atela Studio. Todos los derechos reservados.
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
