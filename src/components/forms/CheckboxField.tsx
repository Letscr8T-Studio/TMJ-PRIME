import { cn } from "@/lib/utils";

interface CheckboxFieldProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  error?: string;
}

export function CheckboxField({
  id,
  name,
  label,
  required = false,
  error,
}: CheckboxFieldProps) {
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div>
      <div className="flex items-start gap-2.5">
        <input
          id={id}
          name={name}
          type="checkbox"
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={cn(
            "mt-0.5 h-4 w-4 shrink-0 rounded border-black/25 accent-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
            error && "border-red-500"
          )}
        />
        <label htmlFor={id} className="text-sm text-ink">
          {label}
          {required ? (
            <>
              <span aria-hidden="true"> *</span>
              <span className="sr-only"> (required)</span>
            </>
          ) : null}
        </label>
      </div>

      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
