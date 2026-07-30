"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
}

export function NavLink({ href, children, className, onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const isHomeSection = href.startsWith("/#") || href.startsWith("#");

  if (isHomeSection && pathname === "/") {
    const id = href.slice(href.indexOf("#") + 1);

    function handleClick(event: MouseEvent<HTMLAnchorElement>) {
      event.preventDefault();
      document.getElementById(id)?.scrollIntoView();
      history.pushState(null, "", `#${id}`);
      onNavigate?.();
    }

    return (
      <a href={`#${id}`} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={() => onNavigate?.()} className={className}>
      {children}
    </Link>
  );
}
