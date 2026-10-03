"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Brain,
  Code,
  Cpu,
  ShieldCheck,
  GraduationCap,
  Terminal,
} from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { TiltCard } from "@/components/ui/TiltCard";
import { PERSONAL_INFO, TELEMETRY_METRICS } from "@/lib/portfolio-data";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const PILLARS = [
  {
    icon: Brain,
    num: "01",
    title: "Data Science & AI Foundations",
    institution: "IIT Madras BS Curriculum",
    description:
      "Grounded in the rigorous mathematical foundations of the Indian Institute of Technology Madras, analyzing data patterns, statistical distributions, and algorithmic models using Python, NumPy, and Pandas.",
    color: "text-amber-400",
  },
  {
    icon: Code,
    num: "02",
    title: "Full-Stack Web Architecture",
    institution: "Production Deployments",
    description:
      "Crafting reactive, high-performance web systems using Next.js, React, Node.js, Express, and MongoDB. Experienced in building end-to-end applications with integrated payments, authentication, and fluid motion design.",
    color: "text-accent",
  },
  {
    icon: Cpu,
    num: "03",
    title: "Computer Vision & Embedded IoT",
    institution: "Hardware & Edge Vision",
    description:
      "Engineering the intersection of code and physical hardware: real-time OpenCV & MediaPipe 3D landmark detection, alongside Raspberry Pi Pico & ESP32 MicroPython firmware with custom circuit multiplexing.",
    color: "text-cyan-400",
  },
  {
    icon: ShieldCheck,
    num: "04",
    title: "Security Research & CTFs",
    institution: "System Resilience",
    description:
      "Exploring web vulnerabilities, penetration testing mechanics (Burp Suite, Nmap), SQL injection mitigations, and cross-site scripting defensiveness with a strong appreciation for secure software design.",
    color: "text-emerald-400",
  },
];

export function About() {
  const [activeTab, setActiveTab] = useState<"profile" | "terminal">("profile");

  return (
    <section
      id="about"
      className="relative border-t border-white/5 bg-background/25 px-5 py-24 md:px-8 md:py-32"
    >
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[140px]"
      />

      <div className="mx-auto max-w-[1400px]">
        {/* Header & Holographic Console Row */}
        <AnimatedSection className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: About Narrative */}
          <div className="flex flex-col gap-6 md:gap-8">
            <AnimatedItem>
              <EyebrowBadge>SYSTEMS ARCHITECTURE // PROFILE</EyebrowBadge>
            </AnimatedItem>

            <AnimatedItem>
              <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Engineering intelligence across{" "}
                <span className="text-accent">software, models &amp; silicon.</span>
              </h2>
            </AnimatedItem>

            <AnimatedItem className="flex flex-col gap-4 text-base leading-relaxed text-zinc-300 md:text-lg">
              <p>
                I am a standalone <strong className="font-semibold text-foreground">IIT Madras BS in Data Science</strong> student
                and systems engineer with an insatiable drive to build production software and understand physical hardware.
              </p>
              <p className="text-zinc-400 text-sm md:text-base">
                Rather than confining myself to a single layer of the stack, I engineer across the full spectrum:
                statistical machine learning algorithms, high-scale reactive web platforms (MERN &amp; Next.js),
                real-time computer vision pipelines (OpenCV, MediaPipe), low-level microcontrollers (Raspberry Pi Pico, ESP32),
                and defensive cybersecurity principles.
              </p>
              <div className="pt-2">
                <a
                  href="#education"
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-accent transition-colors hover:text-amber-300"
                >
                  <GraduationCap size={16} />
                  View IIT Madras BS Journey &rarr;
                </a>
              </div>
            </AnimatedItem>
          </div>

          {/* Right: Holographic Cyber HUD Profile Console */}
          <AnimatedItem>
            <TiltCard maxTilt={4} scale={1.01}>
              <div className="card-surface group relative overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-white/25 hover:shadow-[0_0_35px_rgba(212,162,47,0.12)]">
                {/* HUD Corner Accents */}
                <HudFrame corner="tl" size={24} className="absolute top-3 left-3 text-white/20 group-hover:text-accent transition-colors" />
                <HudFrame corner="tr" size={24} className="absolute top-3 right-3 text-white/20 group-hover:text-accent transition-colors" />
                <HudFrame corner="bl" size={24} className="absolute bottom-3 left-3 text-white/20 group-hover:text-accent transition-colors" />
                <HudFrame corner="br" size={24} className="absolute bottom-3 right-3 text-white/20 group-hover:text-accent transition-colors" />

                {/* Console Header / Status Row */}
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-400">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)] animate-pulse" />
                    <span>SYS_ID: SKS-2026 // ONLINE</span>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex items-center rounded-lg border border-white/10 bg-black/40 p-0.5 font-mono text-[10px] uppercase">
                    <button
                      type="button"
                      onClick={() => setActiveTab("profile")}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeTab === "profile"
                          ? "bg-accent/20 text-accent font-semibold"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      Profile
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("terminal")}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
                        activeTab === "terminal"
                          ? "bg-accent/20 text-accent font-semibold"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      <Terminal size={11} />
                      Shell
                    </button>
                  </div>
                </div>

                {activeTab === "profile" ? (
                  <div className="flex flex-col items-center gap-5">
                    {/* Profile Avatar Enclosure with Scanning Reticle */}
                    <div className="relative group/avatar">
                      <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-accent/40 bg-zinc-900 shadow-[0_0_35px_rgba(212,162,47,0.2)] md:h-48 md:w-48">
                        <Image
                          src="/shivesh.jpg"
                          alt="Shivesh Kumar Satyam"
                          fill
                          sizes="(max-width: 768px) 160px, 192px"
                          priority
                          className="object-cover transition-transform duration-500 group-hover/avatar:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-full border border-white/20" />
                      </div>

                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/90 px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.25em] text-accent backdrop-blur-md">
                        IITM // DS
                      </div>
                    </div>

                    {/* Identity */}
                    <div className="w-full text-center pb-2">
                      <h3 className="font-sans text-xl font-semibold text-foreground">
                        {PERSONAL_INFO.name}
                      </h3>
                      <p className="font-mono text-xs text-accent mt-0.5 tracking-wide">
                        IIT Madras BS in Data Science &bull; Systems Engineer
                      </p>
                      <p className="mt-1 font-sans text-xs text-zinc-400">
                        Independent Developer &bull; Available for Client Engagements
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Terminal Shell Simulation View */
                  <div className="min-h-[250px] rounded-lg bg-black/70 p-4 font-mono text-xs text-zinc-300">
                    <div className="flex items-center gap-2 text-zinc-500 pb-3 border-b border-white/5">
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-[10px] tracking-wider text-zinc-400">
                        shivesh@iitm-ds:~$
                      </span>
                    </div>

                    <div className="mt-3 space-y-2 leading-relaxed">
                      <p className="text-accent">$ query --profile</p>
                      <p className="text-zinc-400">
                        &gt; Candidate: <span className="text-foreground">Shivesh Kumar Satyam</span>
                      </p>
                      <p className="text-zinc-400">
                        &gt; Degree: <span className="text-foreground">BS in Data Science &amp; Applications</span>
                      </p>
                      <p className="text-zinc-400">
                        &gt; College: <span className="text-accent">Indian Institute of Technology Madras</span>
                      </p>
                      <p className="text-zinc-400">
                        &gt; Stack: React, JavaScript, NMAP, Burp Suite, ESP-32, Pico
                      </p>
                      <p className="text-zinc-400">
                        &gt; Work: Koshi English School, Safe Shifting
                      </p>
                      <p className="text-emerald-400 flex items-center gap-1.5">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                        &gt; Freelance status: READY_TO_DEPLOY
                      </p>
                    </div>
                  </div>
                )}

                {/* Card Specs Footer */}
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4 font-mono text-[10px] uppercase text-zinc-400">
                  <div>
                    <span className="block text-zinc-500 tracking-[0.24em]">Degree Track</span>
                    <span className="text-foreground">IIT Madras BS DS</span>
                  </div>
                  <div>
                    <span className="block text-zinc-500 tracking-[0.24em]">Contract</span>
                    <span className="text-accent">Accepting Work</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </AnimatedItem>
        </AnimatedSection>

        {/* Telemetry Strip (HUD Grid Pattern) */}
        <AnimatedSection className="mt-16 border-t border-white/10 pt-8 md:mt-24">
          <div className="grid grid-cols-2 gap-6 divide-y divide-white/5 md:grid-cols-4 md:divide-y-0 md:divide-x md:divide-white/10">
            {TELEMETRY_METRICS.map((row, idx) => (
              <AnimatedItem key={row.label} className={idx > 0 ? "md:pl-6" : ""}>
                <div className="flex flex-col gap-1 pt-4 md:pt-0">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                    {row.label}
                  </span>
                  <span className="font-sans text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {row.value}
                  </span>
                  <span className="font-sans text-xs text-zinc-400">
                    {row.note}
                  </span>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>

        {/* 4 Engineering Pillars Grid */}
        <AnimatedSection className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <AnimatedItem key={pillar.num}>
                <div className="card-surface group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(212,162,47,0.12)]">
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
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <span className="font-mono text-xs font-semibold tracking-[0.2em] text-zinc-500">
                        {pillar.num}
                      </span>
                      <div className={`rounded-lg bg-white/[0.04] p-2.5 ${pillar.color}`}>
                        <Icon size={22} weight="duotone" />
                      </div>
                    </div>

                    <div className="mt-5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                        {pillar.institution}
                      </span>
                      <h3 className="mt-1 font-sans text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 font-sans text-xs leading-relaxed text-zinc-400">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/5 pt-3 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-600 group-hover:text-accent/70 transition-colors">
                    Operational // Verified
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
