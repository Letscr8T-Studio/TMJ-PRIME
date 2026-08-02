"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";
import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";

const navLinkClasses =
  "rounded-sm text-sm font-medium text-ink transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  function handleClose() {
    setOpen(false);
    toggleButtonRef.current?.focus();
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-surface/90 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((link) => (
              <NavLink key={link.href} href={link.href} className={navLinkClasses}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href={siteConfig.headerCta.href} variant="primary" size="sm">
              {siteConfig.headerCta.label}
            </Button>
          </div>

          <button
            ref={toggleButtonRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 md:hidden"
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
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </Container>
      </header>

      <MobileNav open={open} onClose={handleClose} />
    </>
  );
}
