'use client';

import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { HERO_BG_IMAGE } from '@/data/heroBg';
import { FOUNDER_IMAGE } from '@/data/founder';
import { PROJECTS } from '@/data/projects';

const jumpLinks = [
  {
    title: 'Web publicada',
    text: 'Atela Homes, una web inmobiliaria ya en produccion.',
    image: PROJECTS[0]?.image,
    href: 'https://atelahomes.vercel.app/',
  },
  {
    title: 'Nuevo proyecto',
    text: 'G&N Interiorismo, portfolio visual para arquitectura e interiorismo.',
    image: PROJECTS[1]?.image,
    href: 'https://www.gnginteriorismo.com/',
  },
  {
    title: 'El equipo',
    text: 'Un estudio pequeno con trato directo, criterio y velocidad.',
    image: FOUNDER_IMAGE,
    href: '#about',
  },
  {
    title: 'Contacto',
    text: 'Por mail, LinkedIn o una primera llamada para aterrizar la idea.',
    image: '',
    href: '#contact',
  },
];

const services = [
  'Direccion visual',
  'Web a medida',
  'Identidad digital',
  'Contenido y estructura',
  'Responsive',
  'Publicacion',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ededed] text-[#1c1c1c]">
      <header className="fixed left-2 right-2 top-2 z-50 rounded-[14px] bg-[#ededed]/90 px-5 py-4 shadow-[0_8px_28px_rgba(0,0,0,0.12)] backdrop-blur-xl md:left-3 md:right-3">
        <nav className="grid grid-cols-3 items-center text-[11px] font-semibold uppercase tracking-[0.18em]">
          <a href="#work" className="justify-self-start transition-opacity hover:opacity-50">
            Work
          </a>
          <a href="#" className="justify-self-center text-xl font-black lowercase tracking-[-0.06em] md:text-2xl">
            atela
          </a>
          <a href="#about" className="justify-self-end transition-opacity hover:opacity-50">
            About
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
            La web tambien decide por tu marca
          </h1>
        </div>
      </section>

      <section id="about" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1160px]">
          <p className="max-w-5xl text-[30px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#1c1c1c] sm:text-5xl md:text-[64px]">
            Atela Studio crea webs elegantes, rapidas y pensadas para que una marca parezca tan seria como el producto que vende.
          </p>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-[1.35] text-[#7a7a7a] md:text-2xl">
            Diseno visual exigente, estructura clara y desarrollo con herramientas modernas para pasar de idea a pagina publicada sin perder detalle por el camino.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid max-w-[1160px] gap-4 md:grid-cols-[92px_1fr] md:gap-8">
          <div className="flex gap-4 md:block">
            <p className="shrink-0 text-sm font-bold tracking-[-0.03em]">Jump to</p>
            <div className="h-px flex-1 bg-[#1c1c1c] md:mt-3 md:h-72 md:w-px" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {jumpLinks.map((item) => (
              <a key={item.title} href={item.href} className="group block">
                <div className="relative aspect-square overflow-hidden rounded-[8px] bg-[#e4e4e4]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle,rgba(28,28,28,0.22),rgba(28,28,28,0.08)_38%,rgba(228,228,228,1)_70%)]">
                      <span className="text-4xl font-black tracking-[0.08em] text-white">...</span>
                    </div>
                  )}
                </div>
                <h2 className="mt-3 text-lg font-bold leading-none tracking-[-0.04em]">{item.title}</h2>
                <p className="mt-1 text-lg font-semibold leading-[0.98] tracking-[-0.04em] text-[#7a7a7a]">
                  {item.text}
                </p>
              </a>
            ))}
          </div>
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
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    {project.category} / {project.year}
                  </p>
                  <h3 className="mt-1 text-3xl font-semibold tracking-[-0.05em]">{project.title}</h3>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#1c1c1c] transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="px-2 pb-24 md:px-3">
        <div className="rounded-[10px] bg-[#073bff] px-5 py-20 text-center text-white md:py-28">
          <p className="mx-auto max-w-3xl text-balance text-3xl font-semibold leading-[1] tracking-[-0.05em] md:text-5xl">
            Ideas, webs en marcha y decisiones de diseno bien tomadas.
          </p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="tu@email.com"
              className="h-14 flex-1 rounded-[10px] border border-white/10 bg-white/12 px-5 text-sm font-semibold text-white outline-none placeholder:text-white/55"
            />
            <button
              type="button"
              className="h-14 rounded-[10px] bg-[#ededed] px-10 text-sm font-bold text-[#1c1c1c] transition-transform active:scale-[0.98]"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <section id="contact" className="px-5 pb-28 md:px-8">
        <div className="mx-auto max-w-[1160px]">
          <p className="text-2xl font-black lowercase tracking-[-0.06em]">atela</p>
          <h2 className="mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
            Ready when you are
            <br />
            <a href="mailto:g.atelanavarro@gmail.com" className="text-[#7a7a7a] transition-colors hover:text-[#073bff]">
              Book call
            </a>
          </h2>

          <div className="mt-12 flex flex-wrap gap-3">
            {services.map((service) => (
              <span key={service} className="rounded-full border border-[#1c1c1c]/15 px-4 py-2 text-sm font-semibold">
                {service}
              </span>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-[#1c1c1c]/15 pt-8 text-sm font-semibold md:flex-row md:items-center md:justify-between">
            <a href="mailto:g.atelanavarro@gmail.com" className="inline-flex items-center gap-2 hover:text-[#073bff]">
              <Mail className="h-4 w-4" />
              g.atelanavarro@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/gonzalo-atela/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#073bff]"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
