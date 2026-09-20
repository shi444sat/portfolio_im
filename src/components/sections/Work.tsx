"use client";

import Image from "next/image";
import { ArrowUpRight, Briefcase, CheckCircle, GithubLogo, Globe } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { WORK_ITEMS } from "@/lib/portfolio-data";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { TiltCard } from "@/components/ui/TiltCard";

export function Work() {
  return (
    <section
      id="work"
      className="relative border-t border-white/5 bg-background/20 px-5 py-24 md:px-8 md:py-32"
    >
      {/* Subtle Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/5 blur-[140px]"
      />

      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col gap-6 md:gap-8">
          <AnimatedItem>
            <EyebrowBadge>CLIENT ENGAGEMENTS // FREELANCE DEPLOYMENTS</EyebrowBadge>
          </AnimatedItem>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Commercial systems &amp;{" "}
                <span className="text-accent">client work.</span>
              </h2>
              <p className="mt-4 max-w-[60ch] font-sans text-base text-zinc-400 md:text-lg">
                High-performance platforms and applications engineered for clients, creative agencies,
                and digital ventures. Distinct from academic projects — built for real users.
              </p>
            </div>

            <div className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
              [ Verified Client Contracts &amp; Roles ]
            </div>
          </div>
        </AnimatedSection>

        {/* Large Editorial Project Cards */}
        <div className="mt-16 flex flex-col gap-10">
          {WORK_ITEMS.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <AnimatedSection key={item.id}>
                <AnimatedItem>
                  <TiltCard maxTilt={3} scale={1.008}>
                    <div className="card-surface group relative overflow-hidden rounded-2xl p-6 md:p-10 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_rgba(212,162,47,0.1)]">
                    {/* HUD Corner Accents */}
                    <HudFrame
                      corner="tl"
                      size={22}
                      className="absolute top-3 left-3 text-white/20 group-hover:text-accent transition-colors"
                    />
                    <HudFrame
                      corner="tr"
                      size={22}
                      className="absolute top-3 right-3 text-white/20 group-hover:text-accent transition-colors"
                    />
                    <HudFrame
                      corner="bl"
                      size={22}
                      className="absolute bottom-3 left-3 text-white/20 group-hover:text-accent transition-colors"
                    />
                    <HudFrame
                      corner="br"
                      size={22}
                      className="absolute bottom-3 right-3 text-white/20 group-hover:text-accent transition-colors"
                    />

                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
                      {/* Left: Client Context & Specs */}
                      <div className="flex flex-col gap-6">
                        {/* Meta Badge Row */}
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                            <Briefcase size={12} weight="bold" />
                            {item.category}
                          </span>
                          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                            {item.period}
                          </span>
                        </div>

                        <div>
                          <span className="font-mono text-xs uppercase tracking-[0.26em] text-zinc-500">
                            Client / Company: {item.clientOrCompany}
                          </span>
                          <h3 className="mt-1 font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                            {item.role}
                          </h3>
                          <p className="mt-3 font-sans text-sm leading-relaxed text-zinc-300 md:text-base">
                            {item.summary}
                          </p>
                        </div>

                        {/* Problem Context Box */}
                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                            Scope &amp; Engineering Challenge
                          </span>
                          <p className="mt-1.5 font-sans text-xs leading-relaxed text-zinc-400 md:text-sm">
                            {item.problemContext}
                          </p>
                        </div>

                        {/* Key Deliverables */}
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                            Architectural Deliverables
                          </span>
                          <ul className="mt-2.5 space-y-2">
                            {item.achievements.map((ach, i) => (
                              <li key={i} className="flex items-start gap-2.5 font-sans text-xs text-zinc-300 md:text-sm">
                                <CheckCircle
                                  size={16}
                                  weight="fill"
                                  className="mt-0.5 shrink-0 text-accent"
                                />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Links */}
                        <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-white/10">
                          {item.liveUrl && (
                            <a
                              href={item.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-black"
                            >
                              <Globe size={14} weight="bold" />
                              View Live Deployment
                              <ArrowUpRight
                                size={14}
                                weight="bold"
                                className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                              />
                            </a>
                          )}

                          {item.githubUrl && (
                            <a
                              href={item.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-300 transition-colors hover:border-white/30 hover:text-foreground"
                            >
                              <GithubLogo size={14} weight="bold" />
                              Source Repository
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right: Rich Visual / Interactive Preview Mockup */}
                      <div className="flex flex-col items-center justify-center">
                        {item.previewImage ? (
                          <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950 p-2 shadow-2xl">
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                              <Image
                                src={item.previewImage}
                                alt={`${item.clientOrCompany} Preview`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            </div>

                            {/* Caption Badge */}
                            <div className="mt-2 flex items-center justify-between px-2 py-1 font-mono text-[10px] uppercase text-zinc-500">
                              <span>Production Snapshot</span>
                              <span className="text-accent">{item.clientOrCompany}</span>
                            </div>
                          </div>
                        ) : (
                          /* High-Tech Editorial Blueprint Panel */
                          <div className="flex w-full flex-col justify-between rounded-xl border border-white/10 bg-zinc-950/80 p-6 font-mono text-xs">
                            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-zinc-500">
                              <span className="text-[10px] uppercase tracking-[0.28em] text-accent">
                                // ARCHITECTURAL_SPEC
                              </span>
                              <span className="text-[10px]">{item.period}</span>
                            </div>

                            <div className="my-6 space-y-3 text-zinc-400">
                              <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Tier</span>
                                <span className="text-foreground">Full-Stack / Client Production</span>
                              </div>
                              <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Client</span>
                                <span className="text-foreground">{item.clientOrCompany}</span>
                              </div>
                              <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Stack</span>
                                <span className="text-accent">{item.technologies.slice(0, 3).join(" • ")}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Integrity</span>
                                <span className="text-emerald-400">100% Deployed &amp; Operational</span>
                              </div>
                            </div>

                            {item.liveUrl && (
                              <a
                                href={item.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-white/[0.08]"
                              >
                                Launch {item.clientOrCompany}
                                <ArrowUpRight size={13} weight="bold" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedItem>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
