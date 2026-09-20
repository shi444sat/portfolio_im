"use client";

import {
  Brain,
  Browser,
  Code,
  Cpu,
  Database,
  ShieldCheck,
  CheckCircle,
} from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const ICON_MAP: Record<string, React.ElementType> = {
  Code,
  Brain,
  Browser,
  Database,
  Cpu,
  ShieldCheck,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-white/5 bg-background/20 px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col gap-6 md:gap-8">
          <AnimatedItem>
            <EyebrowBadge>CAPABILITY MATRIX // TECHNICAL ARSENAL</EyebrowBadge>
          </AnimatedItem>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Multi-disciplinary <span className="text-accent">technical matrix.</span>
              </h2>
              <p className="mt-4 max-w-[62ch] font-sans text-base text-zinc-400 md:text-lg">
                Spanning low-level microcontroller silicon, mathematical data science reasoning,
                and high-scale reactive web platforms.
              </p>
            </div>

            <div className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
              [ Verified Technical Stacks ]
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Cards Grid */}
        <AnimatedSection className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, index) => {
            const Icon = ICON_MAP[cat.iconName] || Code;
            return (
              <AnimatedItem key={cat.title}>
                <div className="card-surface group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(212,162,47,0.1)]">
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
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-white/[0.04] p-2.5 text-accent">
                          <Icon size={22} weight="duotone" />
                        </div>
                        <div>
                          <h3 className="font-sans text-lg font-semibold tracking-tight text-foreground">
                            {cat.title}
                          </h3>
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                            Domain 0{index + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 font-sans text-xs text-zinc-400">
                      {cat.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-xs transition-colors ${
                            skill.highlight
                              ? "border-accent/30 bg-accent/10 text-accent font-medium shadow-[0_0_12px_rgba(212,162,47,0.15)]"
                              : "border-white/10 bg-white/[0.02] text-zinc-300 hover:border-white/20"
                          }`}
                        >
                          <CheckCircle
                            size={12}
                            weight={skill.highlight ? "fill" : "regular"}
                            className={skill.highlight ? "text-accent" : "text-zinc-500"}
                          />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/5 pt-3 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-600">
                    Active Proficiency // Production Tested
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
