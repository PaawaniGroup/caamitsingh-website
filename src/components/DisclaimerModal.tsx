"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { disclaimer, firm } from "@/data/site";

const KEY = "saa-disclaimer-accepted";

/**
 * Entry disclaimer required for CA / legal websites in India.
 * - Shown once per browser session (sessionStorage).
 * - Not shown on the Disclaimer / Privacy pages so visitors can read them first.
 * - Server-rendered so it paints with the first frame (good for LCP). An inline script in
 *   layout.tsx adds "saa-ok" to <html> for returning visitors, and CSS (globals.css) hides it
 *   before hydration, so there is no flash. Without JavaScript it is never shown.
 */
export function DisclaimerModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const agreeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const exempt = pathname === "/disclaimer" || pathname === "/privacy-policy";

  useEffect(() => {
    try { if (sessionStorage.getItem(KEY) === "yes") setOpen(false); } catch { /* storage blocked: keep the modal */ }
  }, []);

  // Lock scroll, focus the button, trap Tab inside the dialog
  useEffect(() => {
    if (!open || exempt || document.documentElement.classList.contains("saa-ok")) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    agreeRef.current?.focus();
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !dialogRef.current) return;
      const f = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button");
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", trap);
    return () => { document.removeEventListener("keydown", trap); document.body.style.overflow = ""; previous?.focus?.(); };
  }, [open, exempt]);

  const accept = () => {
    try { sessionStorage.setItem(KEY, "yes"); } catch { /* storage unavailable: still let the visitor in */ }
    document.documentElement.classList.add("saa-ok");
    setOpen(false);
  };

  if (!open || exempt) return null;
  return (
    <div className="disclaimer-root fixed inset-0 z-[100] items-end justify-center bg-navy/80 p-3 backdrop-blur-sm sm:items-center sm:p-6">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gold/40 bg-surface p-6 shadow-lift sm:p-10"
      >
        <p className="eyebrow">{firm.name}</p>
        <h2 id="disclaimer-title" className="mt-2 text-3xl">{disclaimer.modalTitle}</h2>
        <span className="gold-rule mt-4" aria-hidden="true" />
        <p className="mt-5 text-[0.98rem]">{disclaimer.modalIntro}</p>
        <ol className="mt-4 space-y-3 text-[0.95rem]">
          {disclaimer.points.map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-semibold text-gold">{i + 1}</span>
              <span>{p}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/disclaimer" className="text-sm font-medium text-gold-text underline underline-offset-4">Read the full disclaimer</Link>
          <button ref={agreeRef} type="button" onClick={accept} className="btn btn-navy sm:min-w-[160px]">I Agree</button>
        </div>
      </div>
    </div>
  );
}
