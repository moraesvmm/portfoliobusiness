"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    key: "telma" as const,
    url: "https://telma-online.onrender.com/",
    images: ["/images/telma-1.png", "/images/telma-2.png"],
  },
  {
    key: "fluxo" as const,
    url: "https://fluxo-two-kappa.vercel.app/",
    images: ["/images/fluxo-1.png", "/images/fluxo-2.png"],
  },
];

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projetos" className="relative py-24 sm:py-32 bg-neutral-50">
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-coral-500 mb-3 block">
            {t("title")}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 mb-5 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-neutral-500 max-w-2xl text-base sm:text-lg leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-28">
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.key}
              title={t(`items.${project.key}.title`)}
              category={t(`items.${project.key}.category`)}
              description={t(`items.${project.key}.description`)}
              tags={t.raw(`items.${project.key}.tags`)}
              url={project.url}
              viewLabel={t("viewProject")}
              images={project.images}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
