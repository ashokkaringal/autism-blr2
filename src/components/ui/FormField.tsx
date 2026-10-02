import { cn } from "@/lib/utils";

export function FormField({
  id,
  label,
  error,
  required,
  children,
  hint,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-teal-dark">
        {label}
        {required ? <span className="text-teal"> *</span> : null}
      </label>
      {hint ? (
        <p id={hintId} className="text-sm text-muted">
          {hint}
        </p>
      ) : null}
      <div
        className={cn(
          "[&_input]:w-full [&_select]:w-full [&_textarea]:w-full",
          "[&_input]:min-h-11 [&_select]:min-h-11",
          "[&_input]:rounded-lg [&_select]:rounded-lg [&_textarea]:rounded-lg",
          "[&_input]:border [&_select]:border [&_textarea]:border",
          "[&_input]:border-border [&_select]:border-border [&_textarea]:border-border",
          "[&_input]:bg-surface [&_select]:bg-surface [&_textarea]:bg-surface",
          "[&_input]:px-3 [&_select]:px-3 [&_textarea]:px-3",
          "[&_input]:py-2 [&_select]:py-2 [&_textarea]:py-2",
          "[&_textarea]:min-h-28",
        )}
      >
        {children}
      </div>
      {error ? (
        <p id={errorId} role="alert" className="text-sm font-medium text-red-800">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SuccessMessage({ children }: { children: React.ReactNode }) {
  return (
    <div
      role="status"
      className="rounded-lg border border-teal/40 bg-mint/40 px-4 py-3 text-teal-dark"
      data-testid="form-success"
    >
      {children}
    </div>
  );
}

export function FormError({ children }: { children: React.ReactNode }) {
  return (
    <div role="alert" className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-red-900">
      {children}
    </div>
  );
}
