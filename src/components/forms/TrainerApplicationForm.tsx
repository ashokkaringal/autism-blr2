"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { hiringSchema, type HiringInput } from "@/lib/validations/forms";
import { hiringRoles } from "@/content/site-content";
import { FormField, FormError, SuccessMessage } from "@/components/ui/FormField";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/lib/config/site";

export function TrainerApplicationForm() {
  const t = useTranslations("hiring");
  const tCommon = useTranslations("common");
  const tVal = useTranslations("validation");
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<HiringInput>({
    resolver: zodResolver(hiringSchema),
    defaultValues: {
      role: hiringRoles[0],
      website: "",
      certifications: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setServerError(null);
    setResumeError(null);
    if (!resume) {
      setResumeError(tVal("required"));
      return;
    }

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value ?? "");
    });
    formData.append("resume", resume);

    const res = await fetch("/api/hiring", { method: "POST", body: formData });
    if (!res.ok) {
      setServerError(`${tCommon("error")} ${tCommon("emailFallback")} ${siteConfig.contact.formInbox}`);
      return;
    }
    setSuccess(true);
    reset();
    setResume(null);
  });

  if (success) {
    return <SuccessMessage>{t("formSuccess")}</SuccessMessage>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate data-testid="hiring-form">
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden {...register("website")} />
      <FormField id="name" label={t("fields.name")} required error={errors.name && tVal("required")}>
        <input id="name" autoComplete="name" {...register("name")} />
      </FormField>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField id="email" label={t("fields.email")} required error={errors.email && tVal("email")}>
          <input id="email" type="email" autoComplete="email" {...register("email")} />
        </FormField>
        <FormField id="phone" label={t("fields.phone")} required error={errors.phone && tVal("phone")}>
          <input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </FormField>
      </div>
      <FormField id="role" label={t("fields.role")} required>
        <select id="role" {...register("role")}>
          {hiringRoles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </FormField>
      <FormField id="education" label={t("fields.education")} required error={errors.education && tVal("required")}>
        <textarea id="education" {...register("education")} />
      </FormField>
      <FormField id="experience" label={t("fields.experience")} required error={errors.experience && tVal("required")}>
        <textarea id="experience" {...register("experience")} />
      </FormField>
      <FormField id="certifications" label={t("fields.certifications")}>
        <textarea id="certifications" {...register("certifications")} />
      </FormField>
      <FormField id="availability" label={t("fields.availability")} required error={errors.availability && tVal("required")}>
        <input id="availability" {...register("availability")} />
      </FormField>
      <FormField
        id="resume"
        label={t("fields.resume")}
        required
        hint={t("resumeHint")}
        error={resumeError ?? undefined}
      >
        <input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={(e) => setResume(e.target.files?.[0] ?? null)}
        />
      </FormField>
      <FormField id="message" label={t("fields.message")}>
        <textarea id="message" {...register("message")} />
      </FormField>
      {serverError ? <FormError>{serverError}</FormError> : null}
      <CTAButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? tCommon("submitting") : tCommon("applyNow")}
      </CTAButton>
    </form>
  );
}
