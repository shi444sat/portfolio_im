"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, List, X, FileText } from "@phosphor-icons/react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Milestones" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-8">
          {/* Technical Brand Signature */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground transition-opacity hover:opacity-90"
          >
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(212,162,47,0.9)] animate-pulse"
            />
            <span>Shivesh // IITM</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-7 xl:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">

            <div className="hidden items-center gap-2 sm:flex">
              <a
                href="/api/cv"
                download="Shivesh_Kumar_Satyam_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-foreground active:translate-y-[1px]"
                title="Download Shivesh's Resume"
              >
                <FileText size={13} weight="bold" />
                CV
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent backdrop-blur-md transition-all duration-200 hover:bg-accent/20 hover:border-accent/70 active:translate-y-[1px]"
              >
                Contact
                <ArrowUpRight
                  size={13}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors hover:text-white xl:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X size={16} weight="bold" /> : <List size={16} weight="bold" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-[#0a0a0b]/95 pt-24 px-6 backdrop-blur-3xl xl:hidden">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              // Navigation Index
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-base uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6">
            <a
              href="/api/cv"
              download="Shivesh_Kumar_Satyam_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground"
            >
              <FileText size={15} weight="bold" />
              Download Full CV (PDF)
            </a>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-accent/40 bg-accent/15 py-3 font-mono text-xs uppercase tracking-[0.2em] text-accent"
            >
              Initialize Contact
              <ArrowUpRight size={15} weight="bold" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
