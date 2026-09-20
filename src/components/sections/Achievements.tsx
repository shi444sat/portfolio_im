"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Trophy, X, Eye } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { ACHIEVEMENTS_DATA, AchievementItem } from "@/lib/portfolio-data";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

export function Achievements() {
  const [activeModalItem, setActiveModalItem] = useState<AchievementItem | null>(null);

  return (
    <section
      id="achievements"
      className="relative border-t border-white/5 bg-background/20 px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col gap-6 md:gap-8">
          <AnimatedItem>
            <EyebrowBadge>VERIFIED MILESTONES // HONORS &amp; RECOGNITION</EyebrowBadge>
          </AnimatedItem>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Hackathons &amp; verified{" "}
                <span className="text-accent">milestones.</span>
              </h2>
              <p className="mt-4 max-w-[62ch] font-sans text-base text-zinc-400 md:text-lg">
                Demonstrated commitment to technical excellence across competitive hackathons,
                blockchain build stations, and premier institutional admissions.
              </p>
            </div>

            <div className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
              [ Verified Certificates &amp; Credentials ]
            </div>
          </div>
        </AnimatedSection>

        {/* Credentials Grid */}
        <AnimatedSection className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS_DATA.map((item) => (
            <AnimatedItem key={item.id}>
              <div className="card-surface group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_35px_rgba(212,162,47,0.1)]">
                {/* HUD Corner Accents */}
                <HudFrame
                  corner="tl"
                  size={18}
                  className="absolute top-2.5 left-2.5 text-white/20 group-hover:text-accent transition-colors"
                />
                <HudFrame
                  corner="br"
                  size={18}
                  className="absolute bottom-2.5 right-2.5 text-white/20 group-hover:text-accent transition-colors"
                />

                <div>
                  {/* Certificate Image Thumbnail */}
                  {item.image && (
                    <div
                      onClick={() => setActiveModalItem(item)}
                      className="group/thumb relative mb-5 aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-zinc-950"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover/thumb:opacity-100">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-3 py-1 font-mono text-xs text-white backdrop-blur-md">
                          <Eye size={14} />
                          Enlarge Credential
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Header Row */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      {item.category}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="mt-4 font-sans text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-1 font-mono text-xs text-zinc-400">
                    Organizer: {item.organizer}
                  </p>

                  <p className="mt-3 font-sans text-xs leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs">
                  {item.image && (
                    <button
                      type="button"
                      onClick={() => setActiveModalItem(item)}
                      className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
                    >
                      <Eye size={14} />
                      Preview
                    </button>
                  )}

                  {item.externalLink && (
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link ml-auto inline-flex items-center gap-1 uppercase tracking-[0.18em] text-accent hover:text-amber-300 transition-colors"
                    >
                      Verify
                      <ArrowUpRight
                        size={12}
                        weight="bold"
                        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Full Image Modal */}
        {activeModalItem && activeModalItem.image && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl">
            <div className="card-surface relative max-h-[92vh] max-w-4xl overflow-hidden rounded-2xl border border-white/20 p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  <Trophy size={16} />
                  <span>{activeModalItem.title}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative mt-4 aspect-[16/11] w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
                <Image
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-mono text-xs text-zinc-400">
                  {activeModalItem.organizer} &bull; {activeModalItem.date}
                </span>

                {activeModalItem.externalLink && (
                  <a
                    href={activeModalItem.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent hover:text-amber-300"
                  >
                    View Original Host
                    <ArrowUpRight size={13} weight="bold" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
