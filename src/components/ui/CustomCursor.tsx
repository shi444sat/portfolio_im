"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string>("ENGAGE");

  useEffect(() => {
    // Disable on touch screens
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    // Fast event-driven hover detection
    const onPointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button'], .card-surface, [data-interactive]"
      ) as HTMLElement | null;

      if (interactive) {
        setIsHovered(true);
        const customLabel = interactive.getAttribute("data-cursor-label");
        const tagName = interactive.tagName;

        let label = "ENGAGE";
        if (customLabel) {
          label = customLabel;
        } else if (tagName === "A") {
          label = interactive.getAttribute("download") ? "DOWNLOAD" : "OPEN LINK";
        } else if (tagName === "BUTTON") {
          label = "EXECUTE";
        } else if (tagName === "INPUT" || tagName === "TEXTAREA") {
          label = "INPUT";
        } else if (interactive.classList.contains("card-surface")) {
          label = "INSPECT";
        }

        setHoverLabel(label);
      }
    };

    const onPointerOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button'], .card-surface, [data-interactive]"
      );

      if (interactive) {
        setIsHovered(false);
        setHoverLabel("ENGAGE");
      }
    };

    const onMouseDown = () => {
      setIsClicked(true);
    };

    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onPointerOver, { passive: true });
    document.addEventListener("mouseout", onPointerOut, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const render = () => {
      // High-precision lerp
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onPointerOver);
      document.removeEventListener("mouseout", onPointerOut);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-200 select-none ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none"
      >
        <div
          className={`h-2 w-2 rounded-full transition-all duration-150 ${
            isHovered
              ? "bg-cyan-400 scale-125 shadow-[0_0_12px_rgba(0,229,255,1)]"
              : isClicked
              ? "bg-accent scale-75 shadow-[0_0_16px_rgba(212,162,47,1)]"
              : "bg-accent shadow-[0_0_8px_rgba(212,162,47,0.85)]"
          }`}
        />
      </div>

      {/* Outer Follower Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none"
      >
        <div
          className={`relative flex items-center justify-center rounded-full transition-all duration-200 ease-out ${
            isHovered
              ? "h-11 w-11 border border-cyan-400 bg-cyan-400/[0.08] shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-110"
              : isClicked
              ? "h-6 w-6 border-2 border-accent bg-accent/25 shadow-[0_0_16px_rgba(212,162,47,0.7)] scale-90"
              : "h-8 w-8 border border-accent/70 bg-accent/[0.03] shadow-[0_0_10px_rgba(212,162,47,0.2)]"
          }`}
        >
          {/* Micro Dynamic HUD Tag Tagged Under Reticle */}
          {isHovered && (
            <div className="absolute -bottom-6 flex flex-col items-center whitespace-nowrap animate-in fade-in zoom-in duration-150">
              <span className="rounded bg-black/80 px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-[0.22em] text-cyan-400 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,229,255,0.4)]">
                // {hoverLabel}
              </span>
            </div>
          )}

          {/* Click Shockwave Ring */}
          {isClicked && (
            <span className="absolute inset-0 rounded-full border border-accent animate-ping opacity-75" />
          )}
        </div>
      </div>
    </div>
  );
}
