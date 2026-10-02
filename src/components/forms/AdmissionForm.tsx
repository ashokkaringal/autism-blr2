"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { admissionSchema, type AdmissionInput } from "@/lib/validations/forms";
import { programOptions } from "@/content/site-content";
import { FormField, FormError, SuccessMessage } from "@/components/ui/FormField";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/lib/config/site";

export function AdmissionForm() {
  const t = useTranslations("admissions");
  const tCommon = useTranslations("common");
  const tVal = useTranslations("validation");
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AdmissionInput>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      contactMethod: "email",
      program: programOptions[0].value,
      website: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setServerError(null);
    const res = await fetch("/api/admissions", {
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
    <form onSubmit={onSubmit} className="space-y-5" noValidate data-testid="admission-form">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
        {...register("website")}
      />
      <FormField id="parentName" label={t("fields.parentName")} required error={errors.parentName && tVal("required")}>
        <input id="parentName" autoComplete="name" {...register("parentName")} />
      </FormField>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField id="email" label={t("fields.email")} required error={errors.email && tVal("email")}>
          <input id="email" type="email" autoComplete="email" {...register("email")} />
        </FormField>
        <FormField id="phone" label={t("fields.phone")} required error={errors.phone && tVal("phone")}>
          <input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </FormField>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField id="childName" label={t("fields.childName")} required error={errors.childName && tVal("required")}>
          <input id="childName" {...register("childName")} />
        </FormField>
        <FormField id="childDob" label={t("fields.childDob")} required error={errors.childDob && tVal("required")}>
          <input id="childDob" type="date" {...register("childDob")} />
        </FormField>
      </div>
      <FormField id="program" label={t("fields.program")} required error={errors.program && tVal("required")}>
        <select id="program" {...register("program")}>
          {programOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FormField>
      <FormField id="contactMethod" label={t("fields.contactMethod")} required>
        <select id="contactMethod" {...register("contactMethod")}>
          <option value="email">{t("fields.methodEmail")}</option>
          <option value="phone">{t("fields.methodPhone")}</option>
          <option value="whatsapp">{t("fields.methodWhatsapp")}</option>
        </select>
      </FormField>
      <FormField id="message" label={t("fields.message")}>
        <textarea id="message" {...register("message")} />
      </FormField>
      {serverError ? <FormError>{serverError}</FormError> : null}
      <CTAButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? tCommon("submitting") : tCommon("getStarted")}
      </CTAButton>
    </form>
  );
}
