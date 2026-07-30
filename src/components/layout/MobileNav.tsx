"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { NavLink } from "./NavLink";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      inert={!open}
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 md:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 bg-ink/50 transition-opacity duration-300"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        id="mobile-nav"
        className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col gap-8 bg-surface p-6 shadow-xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end">
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-col gap-2">
          {siteConfig.nav.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onNavigate={onClose}
              className="block rounded-sm py-3 text-lg font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto border-t border-black/10 pt-6">
          <Button
            href={siteConfig.hero.primaryCta.href}
            variant="primary"
            size="lg"
            onClick={onClose}
            className="w-full"
          >
            {siteConfig.hero.primaryCta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
