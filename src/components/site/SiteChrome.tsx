import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

export const PHONE = "(410) 924-7585";
export const PHONE_HREF = "tel:+14109247585";

const navItems = [
  { to: "/wedding-florist-staunton", label: "Weddings & Events" },
  { to: "/everyday-sympathy-flowers", label: "Everyday & Sympathy Flowers" },
  { to: "/get-a-quote", label: "Get a Quote" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:flex lg:justify-between">
        <Link to="/wedding-florist-staunton" className="min-w-0">
          <span className="block font-serif text-xl leading-none tracking-tight sm:text-2xl">
            Brin&rsquo;s Posy Floral
          </span>
          <span className="eyebrow mt-1 block">Beauty Remembered</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-sm text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            className="rounded-md border border-primary/40 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {PHONE}
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-md border border-border px-3 py-2 text-sm lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-card px-5 py-4 lg:hidden"
        >
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-muted-foreground hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={PHONE_HREF} className="block text-sm text-primary">
                Call or text {PHONE}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-sand">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-3">
        <div>
          <p className="font-serif text-xl">Brin&rsquo;s Posy Floral</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Handmade boutique florals in Staunton, Virginia &mdash; serving Staunton &amp; Augusta
            County.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide">Contact</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Call or text{" "}
            <a href={PHONE_HREF} className="text-primary hover:underline">
              {PHONE}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "sand" | "card";
}) {
  const toneClass =
    tone === "sand" ? "bg-sand" : tone === "card" ? "bg-card" : "bg-background";
  return (
    <section id={id} className={`${toneClass} scroll-mt-24 px-5 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  centered?: boolean;
}) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function TrustBadges({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs tracking-wide text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-xl border border-border bg-card shadow-soft">
      {items.map((item) => (
        <details key={item.q} className="group px-6 py-5">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg marker:content-['']">
            {item.q}
            <span
              aria-hidden="true"
              className="shrink-0 text-primary transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
