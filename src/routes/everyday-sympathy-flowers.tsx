import { createFileRoute, Link } from "@tanstack/react-router";

import everydayHero from "@/assets/everyday-hero.jpg";
import {
  Faq,
  Page,
  PHONE,
  PHONE_HREF,
  Section,
  SectionHeading,
  TrustBadges,
} from "@/components/site/SiteChrome";

const TITLE =
  "Flower Delivery in Staunton, VA | Everyday & Sympathy Flowers – Brin's Posy Floral";
const DESCRIPTION =
  "Local, same-week flower delivery in Staunton, VA for birthdays, anniversaries, sympathy & everyday moments. Order online or call for urgent same-day requests.";

export const Route = createFileRoute("/everyday-sympathy-flowers")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/everyday-sympathy-flowers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/everyday-sympathy-flowers" }],
  }),
  component: EverydayPage,
});

const sizes = [
  { name: "Petite", price: "$92" },
  { name: "Standard", price: "$140" },
  { name: "Grand", price: "$219" },
];

const faqs = [
  {
    q: "Do you deliver same-day in Staunton?",
    a: "Same-day delivery is available by phone only. Call or text us and we'll tell you honestly what we can accommodate that day.",
  },
  {
    q: "What areas do you deliver to?",
    a: "We deliver throughout Staunton and Augusta County, including the Staunton–Waynesboro metro area. Not sure if you're in range? Give us a call.",
  },
  {
    q: "How do sympathy or funeral flower orders work?",
    a: "Call or text with the service date, funeral home or venue, and any details you'd like honored. We coordinate delivery timing directly with the venue so nothing is left to chance.",
  },
  {
    q: "Can I request a specific delivery time?",
    a: "We accept time-window requests and do our best to honor them, especially for services and events. Add your request in the order notes or call us.",
  },
];

function EverydayPage() {
  return (
    <Page>
      <section className="px-5 pt-12 pb-6 sm:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Local delivery &middot; Staunton, Virginia</p>
            <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Local Flower Delivery in Staunton, VA
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Thoughtfully designed flowers for birthdays, anniversaries, sympathy, celebrations,
              and everyday moments.
            </p>
            <div className="mt-6">
              <TrustBadges
                items={[
                  "Same-Day by Phone",
                  "Serving Staunton & Augusta County",
                  "Handmade Boutique Florals",
                ]}
              />
            </div>
            <a href={PHONE_HREF} className="btn-base btn-urgent mt-8 w-full sm:w-auto">
              Need It Today? Call or Text {PHONE}
            </a>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Standard online orders require 48 hours&rsquo; advance notice. Need something sooner?
              Call us and we&rsquo;ll see what we can accommodate.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lift">
            <img
              src={everydayHero}
              alt="Seasonal hand-tied arrangement in a ceramic vase on a cream linen table."
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Section id="order" tone="sand">
        <SectionHeading
          eyebrow="Shop"
          title="Order Flowers"
          intro="One designer's choice arrangement, three sizes — always seasonal, always designed by hand."
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8 md:grid-cols-2">
          <div className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-border bg-blush/40 p-6 text-center text-xs text-muted-foreground">
            Product photography placeholder &mdash; designer&rsquo;s choice arrangement. Alt text:
            &ldquo;Seasonal designer&rsquo;s choice arrangement, Staunton VA florist.&rdquo;
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl">Designer&rsquo;s Choice Arrangement</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tell us the occasion and any colors to lean into (or avoid) and we&rsquo;ll design
              with the freshest blooms of the week.
            </p>
            <ul className="mt-5 grid gap-2">
              {sizes.map((size) => (
                <li
                  key={size.name}
                  className="flex items-center justify-between rounded-md border border-border px-4 py-3 text-sm"
                >
                  <span>{size.name}</span>
                  <span className="font-serif text-lg">{size.price}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://www.brinsposyfloral.com/product/order-online/"
              className="btn-base btn-primary mt-6"
            >
              Order Flowers Now
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              WooCommerce product block &mdash; connects to the live store checkout.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Logistics" title="Delivery Info" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              h: "Delivery area",
              p: "Staunton, Augusta County, and the Staunton–Waynesboro metro area.",
            },
            {
              h: "Standard delivery timing",
              p: "48 hours' advance notice for online orders.",
            },
            {
              h: "Rush requests",
              p: `By phone or text only — ${PHONE}.`,
            },
          ].map((card) => (
            <div key={card.h} className="rounded-xl border border-border bg-card p-7 shadow-soft">
              <h3 className="text-xl">{card.h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.p}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Good to know" title="Delivery FAQs" />
        <Faq items={faqs} />
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm text-muted-foreground">
            Planning a wedding instead?{" "}
            <Link
              to="/wedding-florist-staunton"
              className="text-primary underline underline-offset-4"
            >
              Visit our Wedding Florist page &rarr;
            </Link>
          </p>
          <h2 className="mt-10 text-3xl sm:text-4xl">Send flowers to someone in Staunton</h2>
          <a
            href="https://www.brinsposyfloral.com/product/order-online/"
            className="btn-base btn-primary mt-7"
          >
            Order Flowers Now
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Or call/text us at{" "}
            <a href={PHONE_HREF} className="text-primary underline underline-offset-4">
              {PHONE}
            </a>{" "}
            for same-day requests.
          </p>
        </div>
      </Section>
    </Page>
  );
}
