"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/5 bg-background px-6 py-14 md:px-10 md:py-16"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          {/* Brand Signature */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(212,162,47,0.9)]"
              />
              Shivesh Kumar Satyam // IIT Madras
            </div>
            <p className="max-w-[42ch] font-sans text-sm leading-relaxed text-zinc-400">
              BS in Data Science Scholar at IIT Madras. Building production web architectures,
              computer vision pipelines, and embedded IoT systems.
            </p>
          </div>

          {/* Navigation Matrix */}
          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 md:grid-cols-3">
            {[
              { name: "About", note: "Systems Architecture", href: "#about" },
              { name: "Work", note: "Client Deployments", href: "#work" },
              { name: "Projects", note: "Engineering Labs", href: "#projects" },
              { name: "Skills", note: "Technical Arsenal", href: "#skills" },
              { name: "Education", note: "IIT Madras BS", href: "#education" },
              { name: "Milestones", note: "Hackathons & Honors", href: "#achievements" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex flex-col gap-1"
              >
                <span className="font-sans text-[13px] font-medium text-foreground transition-colors group-hover:text-accent">
                  {item.name}
                  <ArrowUpRight
                    size={11}
                    weight="bold"
                    className="ml-1 inline-block align-baseline opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                  {item.note}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap items-center gap-6 border-t border-white/5 pt-6 font-mono text-xs">
          <span className="text-zinc-500 uppercase tracking-widest text-[10px]">
            Network Channels:
          </span>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-accent transition-colors flex items-center gap-1"
            >
              <span>{link.name}</span>
              <ArrowUpRight size={10} weight="bold" />
            </a>
          ))}
          <a
            href="/api/cv"
            download="Shivesh_Kumar_Satyam_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-amber-300 transition-colors ml-auto font-medium"
          >
            Download CV &rarr;
          </a>
        </div>

        {/* Bottom System Telemetry */}
        <div className="flex flex-col gap-3 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <span>
            IIT Madras BS Data Science &bull; Build 2026 &bull; Systems Nominal
          </span>
          <span className="font-sans text-xs tracking-normal normal-case text-zinc-300">
            Made with <span className="text-red-500 inline-block">❤️</span> in India By S Satyam
          </span>
          <span>
            &copy; {new Date().getFullYear()} Shivesh Kumar Satyam &mdash; All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
