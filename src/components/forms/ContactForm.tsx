"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { contactSchema, type ContactInput } from "@/lib/validations/forms";
import { FormField, FormError, SuccessMessage } from "@/components/ui/FormField";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/lib/config/site";

export function ContactForm() {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");
  const tVal = useTranslations("validation");
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { website: "", phone: "" },
  });

  const onSubmit = handleSubmit(async (data) => {
    setServerError(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      setServerError(`${tCommon("error")} ${tCommon("emailFallback")} ${siteConfig.contact.formInbox}`);
      return;
    }
    setSuccess(true);
    reset();
  });

  if (success) {
    return <SuccessMessage>{t("formSuccess")}</SuccessMessage>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate data-testid="contact-form">
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden {...register("website")} />
      <FormField id="name" label={t("fields.name")} required error={errors.name && tVal("required")}>
        <input id="name" autoComplete="name" {...register("name")} />
      </FormField>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField id="email" label={t("fields.email")} required error={errors.email && tVal("email")}>
          <input id="email" type="email" autoComplete="email" {...register("email")} />
        </FormField>
        <FormField id="phone" label={t("fields.phone")} error={errors.phone && tVal("phone")}>
          <input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </FormField>
      </div>
      <FormField id="subject" label={t("fields.subject")} required error={errors.subject && tVal("required")}>
        <input id="subject" {...register("subject")} />
      </FormField>
      <FormField id="message" label={t("fields.message")} required error={errors.message && tVal("required")}>
        <textarea id="message" {...register("message")} />
      </FormField>
      {serverError ? <FormError>{serverError}</FormError> : null}
      <CTAButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? tCommon("submitting") : tCommon("submit")}
      </CTAButton>
    </form>
  );
}
