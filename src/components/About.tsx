"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function About() {
  const t = useTranslations("About");

  const contactItems = [
    {
      icon: Mail,
      label: t("email"),
      value: "gestaovmm@gmail.com",
      href: "mailto:gestaovmm@gmail.com",
    },
    {
      icon: Phone,
      label: t("phone"),
      value: "(11) 96720-3563",
      href: "https://wa.me/5511967203563",
    },
    {
      icon: LinkedInIcon,
      label: t("linkedin"),
      value: "Vitor Moraes",
      href: "https://www.linkedin.com/in/vitor-moraes-1492a52a1/",
    },
  ];

  return (
    <section id="sobre" className="relative py-24 sm:py-32 bg-coral-50/50">
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-500 mb-3 block">
              {t("title")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              {t("title")}
            </h2>
            <p className="text-neutral-600 leading-relaxed text-base sm:text-lg">
              {t("description")}
            </p>
          </motion.div>

          {/* Right: Contact */}
          <motion.div
            id="contato"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">
              {t("contactTitle")}
            </h3>
            <p className="text-neutral-500 mb-8">
              {t("contactDescription")}
            </p>

            <div className="space-y-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-200 bg-white hover:border-coral-300 hover:shadow-md hover:shadow-coral-100/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center group-hover:bg-coral-100 transition-colors">
                      <Icon className="w-5 h-5 text-coral-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base font-medium text-neutral-700 group-hover:text-coral-500 transition-colors truncate">
                        {item.value}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-coral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
