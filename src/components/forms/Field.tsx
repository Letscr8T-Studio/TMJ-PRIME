import { cn } from "@/lib/utils";

type FieldType = "text" | "email" | "tel" | "textarea" | "select";

interface FieldProps {
  id: string;
  name: string;
  label: string;
  type?: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  defaultValue?: string;
  error?: string;
  autoComplete?: string;
  rows?: number;
}

const controlClasses =
  "w-full rounded-lg border border-black/15 bg-surface px-4 py-2.5 text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:border-brand-500";

function deriveAutoComplete(name: string): string | undefined {
  switch (name) {
    case "name":
      return "name";
    case "email":
      return "email";
    case "phone":
      return "tel";
    case "company":
      return "organization";
    default:
      return undefined;
  }
}

export function Field({
  id,
  name,
  label,
  type = "text",
  required = false,
  options,
  placeholder,
  defaultValue,
  error,
  autoComplete,
  rows = 4,
}: FieldProps) {
  const describedBy = error ? `${id}-error` : undefined;
  const className = cn(controlClasses, error && "border-red-500");
  const resolvedAutoComplete = autoComplete ?? deriveAutoComplete(name);

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required ? (
          <>
            <span aria-hidden="true"> *</span>
            <span className="sr-only"> (required)</span>
          </>
        ) : null}
      </label>

      <div className="mt-1.5">
        {type === "textarea" ? (
          <textarea
            id={id}
            name={name}
            required={required}
            defaultValue={defaultValue}
            placeholder={placeholder}
            rows={rows}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            className={className}
          />
        ) : type === "select" ? (
          <select
            id={id}
            name={name}
            required={required}
            defaultValue={defaultValue ?? ""}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            className={className}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            required={required}
            defaultValue={defaultValue}
            placeholder={placeholder}
            autoComplete={resolvedAutoComplete}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            className={className}
          />
        )}
      </div>

      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
