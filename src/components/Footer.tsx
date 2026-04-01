"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-neutral-200 bg-coral-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#inicio")}
            className="flex items-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Image
              src="/images/logo.png"
              alt="Vitor Moraes"
              width={36}
              height={36}
              className="w-8 h-8 sm:w-9 sm:h-9"
            />
          </motion.button>

          {/* Copyright */}
          <p className="text-sm text-neutral-400 text-center">
            © {currentYear} Vitor Moraes. {t("rights")}
          </p>

          {/* Made with */}
          <p className="text-sm text-neutral-400">
            {t("madeWith")}{" "}
            <span className="text-coral-500 font-medium">Vitor Moraes</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
