"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, GithubLogo, Globe, YoutubeLogo, Package, Terminal } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { PROJECT_ITEMS } from "@/lib/portfolio-data";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { TiltCard } from "@/components/ui/TiltCard";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  "All Systems",
  "Full-Stack Web",
  "Embedded Systems & IoT",
  "Computer Vision & AI",
] as const;

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Systems");

  const filteredProjects =
    selectedCategory === "All Systems"
      ? PROJECT_ITEMS
      : PROJECT_ITEMS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative border-t border-white/5 bg-background/20 px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col gap-6 md:gap-8">
          <AnimatedItem>
            <EyebrowBadge>ENGINEERING REPOSITORY // PROJECTS</EyebrowBadge>
          </AnimatedItem>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Featured software &amp;{" "}
                <span className="text-accent">hardware systems.</span>
              </h2>
              <p className="mt-4 max-w-[62ch] font-sans text-base text-zinc-400 md:text-lg">
                Applied architectures spanning real-time machine vision, embedded IoT microcontrollers,
                full-stack web portals, and open-source packages.
              </p>
            </div>

            {/* Category Counter Indicator */}
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
              <Terminal size={14} className="text-accent" />
              <span>TOTAL BUILDS: {PROJECT_ITEMS.length.toString().padStart(2, "0")}</span>
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <AnimatedItem className="mt-4">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] transition-all duration-200 ${
                    selectedCategory === cat
                      ? "border border-accent bg-accent text-black font-semibold shadow-[0_0_18px_rgba(212,162,47,0.3)]"
                      : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedItem>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div layout className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full"
              >
                <TiltCard className="h-full">
                <div className="card-surface group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-white/25 hover:shadow-[0_0_35px_rgba(212,162,47,0.12)]">
                {/* HUD Corners */}
                <HudFrame
                  corner="tl"
                  size={18}
                  className="absolute top-3 left-3 text-white/20 group-hover:text-accent transition-colors"
                />
                <HudFrame
                  corner="tr"
                  size={18}
                  className="absolute top-3 right-3 text-white/20 group-hover:text-accent transition-colors"
                />

                <div>
                  {/* Visual Preview Snapshot if available */}
                  {project.previewImage && (
                    <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
                      <Image
                        src={project.previewImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                  )}

                  {/* Category & Tagline */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-accent border border-accent/30">
                        Featured Lab
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-sans text-xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 font-sans text-xs leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  {/* Technologies Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-white/5 bg-white/[0.03] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent hover:text-amber-300 transition-colors"
                    >
                      <Globe size={13} weight="bold" />
                      Live App
                      <ArrowUpRight
                        size={12}
                        weight="bold"
                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </a>
                  )}

                  {project.youtubeUrl && (
                    <a
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-red-400 hover:text-red-300 transition-colors"
                    >
                      <YoutubeLogo size={14} weight="fill" />
                      Video Demo
                      <ArrowUpRight
                        size={12}
                        weight="bold"
                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </a>
                  )}

                  {project.npmUrl && (
                    <a
                      href={project.npmUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <Package size={14} weight="bold" />
                      NPM Package
                      <ArrowUpRight
                        size={12}
                        weight="bold"
                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400 hover:text-foreground transition-colors ml-auto"
                    >
                      <GithubLogo size={14} weight="bold" />
                      Code
                    </a>
                  )}
                </div>
              </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
