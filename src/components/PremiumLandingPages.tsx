"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// 1. Dados dos Projetos Focados em Conversão
const premiumProjects = [
  {
    id: "clinical",
    title: "Clinical Esthetic",
    subtitle: "Landing Page de Conversão | Saúde & Beleza",
    description:
      "Design sofisticado e clean focado em clínicas de estética médica de alto padrão. Arquitetura de informação otimizada para agendamentos.",
    link: "https://clinicalesthetic.netlify.app/",
    image: "/images/clinical-esthetic-mockup.png", 
    glowColor: "rgba(250, 213, 192, 0.15)", // Nude/Dourado Claro
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "restaurant",
    title: "Premium Restaurant",
    subtitle: "Experiência Digital | Gastronomia Exclusiva",
    description:
      "Imersão visual em tema dark que reflete a exclusividade do restaurante. Focado em despertar o desejo e facilitar reservas.",
    link: "https://premiumrestaurant.netlify.app/",
    image: "/images/premium-restaurant-mockup.png", 
    glowColor: "rgba(245, 184, 152, 0.15)", // Dourado/Madeira
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "psychology",
    title: "Psychology Clinicals",
    subtitle: "Landing Page Profissional | Saúde Emocional",
    description:
      "Ambiente digital acolhedor que transmite segurança e credibilidade, essencial para conversão de pacientes em psicanálise e terapia.",
    link: "https://psychologyclinicals.netlify.app/",
    image: "/images/psychology-clinicals-mockup.png", 
    glowColor: "rgba(129, 230, 217, 0.15)", // Azul Sereno/Verde Água
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function PremiumLandingPages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === premiumProjects.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? premiumProjects.length - 1 : prev - 1));

  const activeProject = premiumProjects[currentIndex];

  return (
    <section className="relative py-24 sm:py-32 bg-neutral-900 overflow-hidden transition-colors duration-1000">
      {/* 2. Fundo Dinâmico (Glow Background) Crucial */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${activeProject.glowColor} 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-coral-400 mb-3 block">
            Coleção Premium
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-5 tracking-tight">
            Landing Pages Em Alta Conversão
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Páginas projetadas digitalmente que unem estética imaculada com 
            arquitetura persuasiva para múltiplas de linhas de negócios.
          </p>
        </motion.div>

        {/* 3. Carrossel Fluido com framer-motion */}
        <div className="relative">
          <div className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 z-20 hidden sm:block">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-neutral-800/50 hover:bg-neutral-700 text-white backdrop-blur-md transition-all border border-neutral-700/50"
              aria-label="Projeto anterior"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 sm:-right-12 -translate-y-1/2 z-20 hidden sm:block">
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-neutral-800/50 hover:bg-neutral-700 text-white backdrop-blur-md transition-all border border-neutral-700/50"
              aria-label="Próximo projeto"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="overflow-hidden p-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000) {
                    nextSlide();
                  } else if (swipe > 10000) {
                    prevSlide();
                  }
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-neutral-800/30 border border-neutral-700/50 p-6 sm:p-10 rounded-3xl backdrop-blur-md cursor-grab active:cursor-grabbing shadow-2xl"
              >
                {/* 4. Espaço Vitrine (Mockup com Hover Scale) */}
                <div className="relative group overflow-hidden rounded-2xl aspect-video lg:aspect-[4/3] bg-neutral-800 border border-neutral-700 shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent z-10 pointer-events-none" />
                  
                  {/* Se tiver a imagem altere a div de fallback abaixo para uma tag <img /> */}
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                  </div>
                  
                  {/* Placeholder do Mockup */}
                  <div className="transition-transform duration-700 group-hover:scale-105 flex flex-col items-center justify-center text-center p-6 relative z-20">
                    <span className="text-4xl sm:text-6xl mb-4 font-black text-white opacity-20">
                      {activeProject.title.split(' ')[0]}
                    </span>
                    <p className="text-neutral-400 text-sm tracking-widest uppercase">Placeholder do Mockup</p>
                  </div>
                </div>

                {/* 5. Estrutura Card Info */}
                <div className="flex flex-col">
                  <span className="text-coral-400 font-medium tracking-wider text-xs uppercase mb-3">
                    {activeProject.subtitle}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                    {activeProject.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {activeProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-1.5 rounded-full bg-neutral-900/60 text-neutral-300 text-sm border border-neutral-700 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-full font-bold transition-all hover:bg-coral-50 hover:text-coral-600 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] w-fit"
                  >
                    Ver Projeto Online
                    <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-10 gap-3">
            {premiumProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full h-2 ${
                  currentIndex === i
                    ? "w-10 bg-coral-400"
                    : "w-2 bg-neutral-600 hover:bg-neutral-500"
                }`}
                aria-label={`Ir para o slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
