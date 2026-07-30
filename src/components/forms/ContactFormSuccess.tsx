"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

interface ContactFormSuccessProps {
  onReset: () => void;
}

export function ContactFormSuccess({ onReset }: ContactFormSuccessProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { contactForm } = siteConfig;

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <Card>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100">
        <Icon name="check" className="h-6 w-6 text-ink" />
      </div>
      <h3
        ref={headingRef}
        tabIndex={-1}
        className="mt-5 text-lg font-semibold text-ink focus-visible:outline-none"
      >
        {contactForm.successTitle}
      </h3>
      <p className="mt-2 text-sm text-muted">{contactForm.successBody}</p>
      <div className="mt-6">
        <Button variant="secondary" size="sm" onClick={onReset}>
          {contactForm.sendAnotherLabel}
        </Button>
      </div>
    </Card>
  );
}
