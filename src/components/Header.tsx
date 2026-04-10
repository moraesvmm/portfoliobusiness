"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import Image from "next/image";

const localeLabels: Record<string, string> = {
  pt: "PT",
  en: "EN",
};

const localeFlags: Record<string, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
};

export default function Header() {
  const t = useTranslations("Header");
  const currentLocale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    if (newLocale === currentLocale) {
      setIsLangOpen(false);
      return;
    }
    // Full page reload to ensure server re-renders with new locale messages
    window.location.href = `/${newLocale}`;
  };

  const navItems = [
    { href: "#inicio", label: t("home") },
    { href: "#projetos", label: t("projects") },
    { href: "#sobre", label: t("about") },
    { href: "#contato", label: t("contact") },
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
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
              width={40}
              height={40}
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
              priority
              quality={90}
            />
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-sm font-medium text-neutral-600 hover:text-coral-500 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-coral-500 transition-colors px-3 py-1.5 rounded-lg border border-neutral-200 hover:border-coral-300"
              >
                <Globe className="w-4 h-4" />
                <span>
                  {localeFlags[currentLocale]} {localeLabels[currentLocale]}
                </span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-32 bg-white rounded-lg overflow-hidden shadow-xl border border-neutral-100"
                  >
                    {(["pt", "en"] as const).map((code) => (
                      <button
                        key={code}
                        onClick={() => switchLocale(code)}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2 ${
                          currentLocale === code
                            ? "bg-coral-50 text-coral-500 font-semibold"
                            : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                        }`}
                      >
                        <span>{localeFlags[code]}</span>
                        {localeLabels[code]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral-600 hover:text-coral-500 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-neutral-100">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="block w-full text-left px-4 py-3 text-sm font-medium text-neutral-600 hover:text-coral-500 hover:bg-coral-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                ))}

                <div className="pt-3 border-t border-neutral-100 mt-3">
                  <div className="flex gap-2 px-4">
                    {(["pt", "en"] as const).map((code) => (
                      <button
                        key={code}
                        onClick={() => switchLocale(code)}
                        className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors text-center ${
                          currentLocale === code
                            ? "bg-coral-500 text-white"
                            : "text-neutral-500 border border-neutral-200 hover:border-coral-300 hover:text-coral-500"
                        }`}
                      >
                        {localeFlags[code]} {localeLabels[code]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
