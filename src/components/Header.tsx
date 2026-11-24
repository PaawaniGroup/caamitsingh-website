"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { navLinks, services } from "@/data/site";
import { slugify } from "@/lib/utils";

/**
 * Sticky header with a services mega-menu (desktop) and an accordion drawer (mobile).
 * Keyboard: Services button toggles the panel, Esc closes it and returns focus.
 */
export function Header() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const megaButtonRef = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const hoverOpenedAt = useRef(0);

  const closeAll = useCallback(() => { setMegaOpen(false); setMobileOpen(false); }, []);

  // Close menus on navigation
  useEffect(() => { closeAll(); }, [pathname, closeAll]);

  // Esc + outside click
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (megaOpen) megaButtonRef.current?.focus();
        closeAll();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onClick); };
  }, [megaOpen, closeAll]);

  // Lock page scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));
  const openMega = () => { clearTimeout(hoverTimer.current); hoverOpenedAt.current = Date.now(); setMegaOpen(true); };
  // A click right after the hover-open must not toggle the menu shut again.
  const toggleMega = () => {
    if (Date.now() - hoverOpenedAt.current < 500) { setMegaOpen(true); return; }
    setMegaOpen((v) => !v);
  };
  const closeMegaSoon = () => { hoverTimer.current = setTimeout(() => setMegaOpen(false), 160); };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-line bg-bg"
    >
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) =>
            item.mega ? (
              <div key={item.href} onMouseEnter={openMega} onMouseLeave={closeMegaSoon}>
                <button
                  ref={megaButtonRef}
                  type="button"
                  aria-expanded={megaOpen}
                  aria-controls="mega-menu"
                  data-open={megaOpen}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={toggleMega}
                  className="link-slide flex min-h-[44px] items-center gap-1 text-[0.95rem] font-medium text-ink"
                >
                  {item.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="link-slide flex min-h-[44px] items-center text-[0.95rem] font-medium text-ink"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn btn-primary hidden px-5 py-2.5 sm:inline-flex">Book a Consultation</Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-line text-ink lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mega menu (desktop) */}
      <div
        id="mega-menu"
        onMouseEnter={openMega}
        onMouseLeave={closeMegaSoon}
        className={`absolute inset-x-0 top-full hidden border-b border-line bg-surface lg:block ${megaOpen ? "" : "!hidden"}`}
      >
        <div className="container grid grid-cols-3 gap-x-10 gap-y-8 py-10">
          {services.map((s) => (
            <div key={s.slug}>
              <Link href={`/services/${s.slug}`} className="group flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-on-primary">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <span className="font-display text-lg font-semibold text-ink group-hover:text-ink">{s.title}</span>
              </Link>
              <ul className="mt-3 space-y-1 border-l border-line pl-4">
                {s.subServices.map((sub) => (
                  <li key={sub.title}>
                    <Link href={`/services/${s.slug}#${slugify(sub.title)}`} className="block py-0.5 text-[0.92rem] text-body hover:text-ink">
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-line bg-bg">
          <div className="container flex items-center justify-between py-3 text-sm">
            <span className="text-body">Six practice areas under one roof</span>
            <Link href="/services" className="inline-flex items-center gap-1 font-semibold text-muted">
              View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full h-[calc(100dvh-112px)] overflow-y-auto border-t border-line bg-bg lg:hidden ${mobileOpen ? "block" : "hidden"}`}
      >
        <nav aria-label="Mobile" className="container flex flex-col py-4">
          {navLinks.map((item) =>
            item.mega ? (
              <div key={item.href} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={mobileServices}
                  onClick={() => setMobileServices((v) => !v)}
                  className="flex min-h-[52px] w-full items-center justify-between font-display text-xl text-ink"
                >
                  {item.label}
                  <ChevronDown className={`h-5 w-5 transition-transform ${mobileServices ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                {mobileServices && (
                  <ul className="mb-3 space-y-1 pl-2">
                    <li>
                      <Link href="/services" className="flex min-h-[44px] items-center text-[0.95rem] font-semibold text-muted">All services overview</Link>
                    </li>
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className="flex min-h-[44px] items-center gap-3 text-[0.95rem] text-body">
                          <Icon name={s.icon} className="h-5 w-5 text-muted" /> {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="flex min-h-[52px] items-center border-b border-line font-display text-xl text-ink aria-[current=page]:text-muted"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link href="/contact" className="btn btn-primary mt-6">Book a Consultation</Link>
        </nav>
      </div>
    </header>
  );
}
