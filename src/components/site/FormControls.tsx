import { useId, type ReactNode } from "react";


export function Fieldset({
  legend,
  hint,
  children,
}: {
  legend: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="rounded-xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <legend className="px-2 font-serif text-2xl">{legend}</legend>
      {hint && <p className="mt-1 text-sm text-muted-foreground">{hint}</p>}
      <div className="mt-6 grid gap-5">{children}</div>
    </fieldset>
  );
}

export function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: (id: string) => ReactNode;
}) {
  const id = useId();
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && (
          <span className="ml-1 text-urgent" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      {children(id)}
    </div>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="field-base" />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={3} {...props} className="field-base" />;
}

export function Select({
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <select {...props} className="field-base">
      {children}
    </select>
  );
}

export function OptionGroup({
  legend,
  name,
  type,
  options,
  onChange,
  columns = 2,
}: {
  legend: string;
  name: string;
  type: "radio" | "checkbox";
  options: string[];
  onChange?: (value: string) => void;
  columns?: 1 | 2 | 3;
}) {
  const cols =
    columns === 1 ? "sm:grid-cols-1" : columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <fieldset className="grid gap-2">
      <legend className="text-sm font-medium">{legend}</legend>
      <div className={`grid gap-2 ${cols}`}>
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-3 rounded-md border border-border bg-background px-3 py-2.5 text-sm transition-colors hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-secondary/60 has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/30"
          >
            <input
              type={type}
              name={name}
              value={option}
              onChange={(e) => onChange?.(e.target.value)}
              className="h-4 w-4 shrink-0 accent-primary"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
