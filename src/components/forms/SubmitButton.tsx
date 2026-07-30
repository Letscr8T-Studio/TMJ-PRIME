"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

export function SubmitButton() {
  const { pending } = useFormStatus();
  const { contactForm } = siteConfig;

  return (
    <Button type="submit" variant="primary" size="lg" disabled={pending} className="mt-2">
      {pending ? (
        <>
          <Icon name="loader" className="h-4 w-4 animate-spin" />
          {contactForm.submitPendingLabel}
        </>
      ) : (
        contactForm.submitLabel
      )}
    </Button>
  );
}
