"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle, GraduationCap, X } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { EDUCATION_DATA } from "@/lib/portfolio-data";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

export function Education() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <section
      id="education"
      className="relative border-t border-white/5 bg-background/25 px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col gap-6 md:gap-8">
          <AnimatedItem>
            <EyebrowBadge>ACADEMIC CREDENTIALS // INSTITUTIONAL JOURNEY</EyebrowBadge>
          </AnimatedItem>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                IIT Madras <span className="text-accent">BS in Data Science.</span>
              </h2>
              <p className="mt-4 max-w-[62ch] font-sans text-base text-zinc-400 md:text-lg">
                Pursuing a rigorous standalone Bachelor of Science degree in Data Science and Applications
                from the Indian Institute of Technology, Madras.
              </p>
            </div>

            <div className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
              [ Premier Academic Track ]
            </div>
          </div>
        </AnimatedSection>

        {/* Featured IIT Madras Card */}
        <AnimatedSection className="mt-16">
          {EDUCATION_DATA.filter((e) => e.isCurrent).map((iitItem) => (
            <AnimatedItem key={iitItem.id}>
              <div className="card-surface group relative overflow-hidden rounded-2xl border-accent/20 p-8 md:p-12 shadow-[0_0_50px_rgba(212,162,47,0.08)] transition-all duration-300 hover:border-accent/40">
                {/* HUD Corner Accents */}
                <HudFrame corner="tl" size={24} className="absolute top-3 left-3 text-accent" />
                <HudFrame corner="tr" size={24} className="absolute top-3 right-3 text-accent" />
                <HudFrame corner="bl" size={24} className="absolute bottom-3 left-3 text-accent" />
                <HudFrame corner="br" size={24} className="absolute bottom-3 right-3 text-accent" />

                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
                  <div className="flex flex-col gap-5">
                    {/* Status Pill */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent/15 px-3.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                        <GraduationCap size={14} weight="fill" />
                        Current Degree Program
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                        {iitItem.period}
                      </span>
                    </div>

                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.26em] text-zinc-500">
                        Institution: {iitItem.institution}
                      </span>
                      <h3 className="mt-1 font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                        {iitItem.degree}
                      </h3>
                      <p className="mt-4 font-sans text-sm leading-relaxed text-zinc-300 md:text-base">
                        {iitItem.description}
                      </p>
                    </div>

                    {/* Academic Highlights */}
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                        Academic Pillars &amp; Foundations
                      </span>
                      <ul className="mt-3 space-y-2.5">
                        {iitItem.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 font-sans text-xs text-zinc-300 md:text-sm">
                            <CheckCircle
                              size={16}
                              weight="fill"
                              className="mt-0.5 shrink-0 text-accent"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certificate Action */}
                    {iitItem.credentialImage && (
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setCertModalOpen(true)}
                          className="group/btn inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-black"
                        >
                          View IIT Madras Admission Credential
                          <ArrowUpRight
                            size={14}
                            weight="bold"
                            className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                          />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Right: Academic Telemetry Blueprint */}
                  <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-zinc-950/70 p-6 md:p-8 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 text-zinc-500">
                      <span className="text-[10px] uppercase tracking-[0.28em] text-accent">
                        // ACADEMIC_DISPATCH
                      </span>
                      <span className="text-[10px] text-zinc-400">NIRF RANK #1 INSTITUTION</span>
                    </div>

                    <div className="my-6 space-y-4 text-zinc-300">
                      <div className="flex justify-between border-b border-white/5 pb-2.5">
                        <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Candidate</span>
                        <span className="font-semibold text-foreground">Shivesh Kumar Satyam</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2.5">
                        <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Degree Spec</span>
                        <span className="text-foreground">BS Data Science &amp; Applications</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2.5">
                        <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Focus</span>
                        <span className="text-accent">Math, Stats, Algorithms, ML</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2.5">
                        <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Admitted</span>
                        <span className="text-foreground">September 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Verification</span>
                        <span className="text-emerald-400">Authentic Admission Letter Issued</span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-accent/20 bg-accent/5 p-3 text-[11px] leading-relaxed text-zinc-400">
                      &quot;IIT Madras BS in Data Science equips students with core competencies in statistical
                      reasoning, computation, large-scale data engineering, and machine learning pipelines.&quot;
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Secondary Schooling Timeline Entries */}
        <AnimatedSection className="mt-14">
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
            // Secondary Academic Foundations
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {EDUCATION_DATA.filter((e) => !e.isCurrent).map((school) => (
              <AnimatedItem key={school.id}>
                <div className="card-surface group relative flex h-full flex-col justify-between overflow-hidden rounded-xl p-6 transition-all duration-300 hover:border-white/20">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                        {school.period}
                      </span>
                      {school.grade && (
                        <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                          Score: {school.grade}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-sans text-lg font-semibold tracking-tight text-foreground">
                      {school.degree}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-zinc-400">
                      {school.institution}
                    </p>
                    <p className="mt-3 font-sans text-xs leading-relaxed text-zinc-400">
                      {school.description}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-white/5 pt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                    {school.location}
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>

        {/* Certificate Modal */}
        {certModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl">
            <div className="card-surface relative max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl border border-white/20 p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                  IIT Madras Admission Credential
                </div>
                <button
                  type="button"
                  onClick={() => setCertModalOpen(false)}
                  className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
                <Image
                  src="/certificates/Cert1.jpg"
                  alt="IIT Madras BS Admission Certificate"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-mono text-xs text-zinc-400">
                  Verified Admission &bull; Sept 2024
                </span>
                <a
                  href="https://ibb.co/9H86qXtH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent hover:text-amber-300"
                >
                  Open High-Res Host
                  <ArrowUpRight size={13} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
