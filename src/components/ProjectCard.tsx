"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  viewLabel: string;
  images: string[];
  index: number;
};

export default function ProjectCard({
  title,
  category,
  description,
  tags,
  url,
  viewLabel,
  images,
  index,
}: ProjectCardProps) {
  const isReversed = index % 2 !== 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
          isReversed ? "lg:direction-rtl" : ""
        }`}
      >
        {/* Image Gallery */}
        <div className={`relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative overflow-hidden rounded-2xl">
            {/* Main image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-900/20"
            >
              <Image
                src={images[0]}
                alt={`${title} — main view`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                quality={85}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Secondary image — floating */}
            {images[1] && (
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`absolute -bottom-6 ${
                  isReversed ? "-left-6" : "-right-6"
                } w-2/5 aspect-square rounded-xl overflow-hidden shadow-xl border-4 border-white`}
              >
                <Image
                  src={images[1]}
                  alt={`${title} — detail`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 20vw"
                  loading="lazy"
                  quality={85}
                />
              </motion.div>
            )}
          </div>

          {/* Background decorative element */}
          <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-2xl bg-coral-100/40" />
        </div>

        {/* Content */}
        <div className={`${isReversed ? "lg:order-1" : "lg:order-2"} py-4`}>
          {/* Category */}
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-coral-500 bg-coral-50 px-4 py-2 rounded-full mb-5">
            {category}
          </span>

          {/* Number */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl sm:text-7xl font-black text-neutral-100">
              0{index + 1}
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-neutral-600 leading-relaxed mb-6 text-base">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-coral-500 hover:bg-coral-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-coral-500/20 hover:shadow-coral-500/40"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {viewLabel}
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}
