"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { submitContact } from "@/app/actions/contact";
import { ContactFormFields } from "./ContactFormFields";
import { ContactFormSuccess } from "./ContactFormSuccess";
import { CheckboxField } from "./CheckboxField";
import { SubmitButton } from "./SubmitButton";
import { siteConfig } from "@/config/site";
import type { ContactFormState } from "@/types";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const [showForm, setShowForm] = useState(false);
  const [prevState, setPrevState] = useState(state);
  const [fieldsKey, setFieldsKey] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const { contactForm } = siteConfig;

  if (state !== prevState) {
    setPrevState(state);
    setShowForm(false);
    // Force the uncontrolled fields to remount so defaultValue picks up the
    // freshly echoed server values — React resets them to their pre-submit
    // defaultValue after a form action settles, otherwise.
    setFieldsKey((key) => key + 1);
  }

  useEffect(() => {
    if (state.status === "error") {
      formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
    }
  }, [state]);

  if (state.status === "success" && !showForm) {
    return <ContactFormSuccess onReset={() => setShowForm(true)} />;
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="sr-only"
        defaultValue=""
      />

      {state.formError ? (
        <p
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {state.formError}
        </p>
      ) : null}

      <ContactFormFields key={fieldsKey} state={state} />

      <div className="space-y-2">
        <CheckboxField
          id="contact-consent"
          name="consent"
          label={contactForm.consentLabel}
          required
          error={state.errors?.consent}
        />
        <p className="text-xs text-muted">{contactForm.consentNote}</p>
      </div>

      <p className="text-xs text-muted">{contactForm.requiredNote}</p>

      <SubmitButton />
    </form>
  );
}
