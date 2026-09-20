"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  XLogo,
} from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/portfolio-data";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const ICON_MAP: Record<string, React.ElementType> = {
  GithubLogo,
  LinkedinLogo,
  XLogo,
};

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
      "fa5b67a1-f782-464d-ae68-3c6d8a12b0bc";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Transmission from ${formData.name}`,
          message: formData.message,
          from_name: "Shivesh Satyam Portfolio",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setFormSubmitted(true);
        setIsSubmitting(false);
        return;
      } else {
        setErrorMessage(data.message || "Failed to transmit message. Please try again.");
      }
    } catch (err) {
      console.error("Direct transmission error, opening mail client fallback:", err);
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative border-t border-white/5 bg-background/25 px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col gap-6 md:gap-8">
          <AnimatedItem>
            <EyebrowBadge>TRANSMISSION LINK // GET IN TOUCH</EyebrowBadge>
          </AnimatedItem>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <AnimatedItem>
              <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Ready to build.{" "}
                <span className="text-accent">Let&apos;s start a transmission.</span>
              </h2>
            </AnimatedItem>

            <AnimatedItem className="flex flex-col justify-end text-base leading-relaxed text-zinc-400 md:text-lg">
              <p>
                Whether you need an ultra-fast full-stack web application, a computer vision prototype,
                custom IoT microcontroller firmware, or freelance engineering assistance — reach out directly.
              </p>
            </AnimatedItem>
          </div>
        </AnimatedSection>

        {/* Contact Console Grid */}
        <AnimatedSection className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Column: Social Links & Direct Channels */}
          <AnimatedItem className="flex flex-col justify-between gap-8">
            <div className="card-surface relative overflow-hidden rounded-2xl p-6 md:p-8">
              <HudFrame corner="tl" size={20} className="absolute top-3 left-3 text-accent" />
              <HudFrame corner="br" size={20} className="absolute bottom-3 right-3 text-accent" />

              <div className="font-mono text-xs uppercase tracking-[0.26em] text-zinc-500 border-b border-white/10 pb-4">
                // Direct Transmission Channels
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = ICON_MAP[item.iconName] || GithubLogo;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="rounded-lg bg-white/[0.04] p-2 text-accent group-hover:text-amber-300">
                          <Icon size={20} weight="bold" />
                        </div>
                        <div>
                          <span className="block font-sans text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                            {item.name}
                          </span>
                          <span className="block font-mono text-xs text-zinc-500">
                            {item.label}
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                      />
                    </a>
                  );
                })}
              </div>

              {/* Resume Download Action Card */}
              <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                      Verified Resume // PDF
                    </span>
                    <h4 className="mt-1 font-sans text-base font-semibold text-foreground">
                      Download Shivesh&apos;s Curriculum Vitae
                    </h4>
                    <p className="mt-1 font-sans text-xs text-zinc-400">
                      Detailed academic, technical, and engineering summary.
                    </p>
                  </div>
                  <a
                    href="/api/cv"
                    download="Shivesh_Kumar_Satyam_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-black transition-transform hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(212,162,47,0.4)]"
                    title="Download CV"
                  >
                    <DownloadSimple size={18} weight="bold" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Status Box */}
            <div className="rounded-xl border border-white/10 bg-black/40 p-5 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="uppercase tracking-[0.22em] text-[10px] font-semibold">
                  Systems Ready // Available for Client Work
                </span>
              </div>
              <p className="mt-1 font-sans text-xs text-zinc-400">
                Typically responds within 24 hours for client proposals and technical discussions.
              </p>
            </div>
          </AnimatedItem>

          {/* Right Column: Dispatch Transmission Form */}
          <AnimatedItem>
            <div className="card-surface relative overflow-hidden rounded-2xl p-6 md:p-10">
              <HudFrame corner="tr" size={22} className="absolute top-3 right-3 text-accent" />
              <HudFrame corner="bl" size={22} className="absolute bottom-3 left-3 text-accent" />

              <div className="font-mono text-xs uppercase tracking-[0.26em] text-zinc-500 border-b border-white/10 pb-4">
                // Dispatch Transmission
              </div>

              {formSubmitted ? (
                <div className="my-12 flex flex-col items-center justify-center text-center">
                  <div className="rounded-full bg-accent/15 p-4 text-accent">
                    <PaperPlaneTilt size={32} weight="fill" />
                  </div>
                  <h3 className="mt-4 font-sans text-xl font-semibold text-foreground">
                    Transmission Dispatched
                  </h3>
                  <p className="mt-2 font-sans text-xs text-zinc-400 max-w-[40ch]">
                    Your transmission has been delivered directly to Shivesh at {PERSONAL_INFO.email}.
                    Expect a response within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 rounded-full border border-white/20 bg-white/5 px-5 py-2 font-mono text-xs uppercase tracking-wider text-zinc-300 hover:text-white transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-2">
                        Your Name / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-sans text-sm text-foreground placeholder:text-zinc-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@company.com"
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-sans text-sm text-foreground placeholder:text-zinc-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-2">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Web Application Architecture / Client Engagement"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-sans text-sm text-foreground placeholder:text-zinc-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-2">
                      Transmission Payload *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline project goals, timelines, technologies, or consultation requirements..."
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-sans text-sm text-foreground placeholder:text-zinc-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-black shadow-[0_0_24px_rgba(212,162,47,0.35)] transition-all hover:bg-amber-400 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {isSubmitting ? "Transmitting Message..." : "Transmit Message"}
                    <PaperPlaneTilt
                      size={15}
                      weight="bold"
                      className={`transition-transform ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`}
                    />
                  </button>

                  {errorMessage && (
                    <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-center font-mono text-xs text-amber-300">
                      {errorMessage}
                    </div>
                  )}
                </form>
              )}
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
