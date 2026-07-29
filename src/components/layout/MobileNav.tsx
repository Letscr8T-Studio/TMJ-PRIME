"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 bg-ink/50"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        id="mobile-nav"
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col gap-8 bg-surface p-6 shadow-xl"
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

        <nav aria-label="Mobile" className="flex flex-col gap-6">
          {siteConfig.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-sm text-lg font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href={siteConfig.hero.primaryCta.href} variant="primary" size="md">
          {siteConfig.hero.primaryCta.label}
        </Button>
      </div>
    </div>
  );
}
