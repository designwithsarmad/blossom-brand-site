import { createFileRoute, Link } from "@tanstack/react-router";

import weddingHero from "@/assets/wedding-hero.jpg";
import {
  Faq,
  Page,
  PHONE,
  PHONE_HREF,
  Section,
  SectionHeading,
  TrustBadges,
} from "@/components/site/SiteChrome";
import { Field, Select, TextInput } from "@/components/site/FormControls";

const TITLE = "Wedding Florist in Staunton, VA | Brin's Posy Floral";
const DESCRIPTION =
  "Custom wedding florals in Staunton, VA — transparent pricing from bridal bouquets to full event design. Request your free proposal today.";

export const Route = createFileRoute("/wedding-florist-staunton")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/wedding-florist-staunton" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/wedding-florist-staunton" }],
  }),
  component: WeddingPage,
});

const pricing = [
  ["Bridal Bouquet", "$150–400"],
  ["Bridesmaid Bouquet", "$75–200"],
  ["Boutonnières", "$25–35"],
  ["Wrist Corsages", "$50–60"],
  ["Arbor Arrangements", "$300–2,500+"],
  ["Hanging Aisle Arrangements", "$100–200+ each"],
  ["Guest Table Centerpieces", "$100–500"],
  ["Bud Vases", "$17–30 each"],
] as const;

const galleryAlts = [
  "Garden-style bridal bouquet, Staunton VA wedding.",
  "Blush and sage ceremony arbor arrangement, Augusta County venue.",
  "Loose organic bridesmaid bouquets in cream and taupe.",
  "Boutonnière with seasonal greenery on a linen jacket.",
  "Hanging aisle arrangement repurposed as a reception centerpiece.",
  "Farm table centerpiece with bud vases and taper candles.",
  "Sweetheart table florals at a Shenandoah Valley wedding.",
  "Flower crown detail in soft blush tones.",
  "Full venue floral styling with arbor and aisle décor.",
];

const faqs = [
  {
    q: "How far in advance should I book my wedding florist?",
    a: "Most couples book 9–12 months ahead, and peak spring and fall dates go first. If your date is sooner, reach out anyway — we often have room for smaller celebrations and elopements.",
  },
  {
    q: "Do you travel to venues outside Staunton?",
    a: "Yes. We regularly design at venues throughout Augusta County and the greater Shenandoah Valley. Travel beyond our local area is quoted with your proposal.",
  },
  {
    q: "Can I mix and match items from your pricing list, or do I need a full package?",
    a: "Mix and match freely. There are no set packages — we build every proposal from the pieces that matter most to you and your budget.",
  },
  {
    q: "Do you offer a consultation before I commit?",
    a: "Always. Your preliminary proposal is complimentary, and we're happy to schedule a phone consultation to walk through it together before anything is booked.",
  },
];

function WeddingPage() {
  return (
    <Page>
      <section className="px-5 pt-12 pb-6 sm:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Brin&rsquo;s Posy Floral &middot; Staunton, Virginia</p>
            <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Wedding Florist in Staunton, VA
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Custom, hand-designed florals for your wedding day &mdash; from intimate elopements to
              full-scale celebrations.
            </p>
            <div className="mt-6">
              <TrustBadges
                items={[
                  "Wedding Florist",
                  "Handmade Boutique Florals",
                  "Serving Staunton & Augusta County",
                ]}
              />
            </div>
            <a href="#quote" className="btn-base btn-primary mt-8">
              Get a Quote
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lift">
            <img
              src={weddingHero}
              alt="Garden-style bridal bouquet of blush roses and eucalyptus held by a bride."
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Section id="quote" tone="sand">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Free proposal"
            title="Get a free quote for your event"
            intro="Tell us the basics and we'll follow up personally, no automated replies!"
          />
          <form
            className="mt-8 grid gap-5 rounded-xl border border-border bg-card p-6 shadow-soft sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <Field label="Name" required>
              {(id) => <TextInput id={id} name="name" required autoComplete="name" />}
            </Field>
            <Field label="Event date" required>
              {(id) => <TextInput id={id} name="eventDate" type="date" required />}
            </Field>
            <Field label="Venue / location">
              {(id) => <TextInput id={id} name="venue" placeholder="Venue name or city" />}
            </Field>
            <Field label="Estimated budget">
              {(id) => (
                <Select id={id} name="budget" defaultValue="">
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option>Under $1,500</option>
                  <option>$1,500–3,000</option>
                  <option>$3,000–5,000</option>
                  <option>$5,000+</option>
                  <option>Not sure yet</option>
                </Select>
              )}
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Phone or email" required>
                {(id) => <TextInput id={id} name="contact" required />}
              </Field>
              <Field label="Preferred contact method">
                {(id) => (
                  <Select id={id} name="preferredContact" defaultValue="Email">
                    <option>Call</option>
                    <option>Text</option>
                    <option>Email</option>
                  </Select>
                )}
              </Field>
            </div>
            <button type="submit" className="btn-base btn-primary w-full">
              Request My Quote
            </button>
            <p className="text-center text-sm text-muted-foreground">
              Prefer to share full details right away?{" "}
              <Link to="/get-a-quote" className="text-primary underline underline-offset-4">
                Fill out our complete wedding questionnaire &rarr;
              </Link>
            </p>
          </form>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Transparent pricing"
          title="Wedding Pricing"
          intro="Every wedding is custom designed, so pricing varies based on flower varieties, size, seasonality, and design complexity. The lower end of each range reflects beautiful designer's choice arrangements using simple, seasonal blooms and plentiful foliage within your color palette, while the higher end includes premium flower varieties, larger, highly customized designs, and luxury installations."
        />
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-soft">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Wedding floral pricing ranges</caption>
            <thead>
              <tr className="bg-secondary/70">
                <th scope="col" className="px-5 py-3 text-sm font-semibold sm:px-8">
                  Item
                </th>
                <th scope="col" className="px-5 py-3 text-right text-sm font-semibold sm:px-8">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {pricing.map(([item, price]) => (
                <tr key={item} className="border-t border-border">
                  <th scope="row" className="px-5 py-4 text-sm font-normal sm:px-8">
                    {item}
                    {item.startsWith("Hanging") && (
                      <span className="block text-xs text-muted-foreground">
                        Can be repurposed as centerpieces
                      </span>
                    )}
                  </th>
                  <td className="px-5 py-4 text-right font-serif text-lg whitespace-nowrap sm:px-8">
                    {price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Gallery" title="Real Weddings, Real Flowers" />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {galleryAlts.map((alt) => (
            <figure
              key={alt}
              className="flex aspect-[4/5] items-center justify-center rounded-xl border border-dashed border-border bg-blush/40 p-4"
            >
              <figcaption className="text-center text-xs leading-relaxed text-muted-foreground">
                {alt}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-sm">
          <a
            href="https://www.brinsposyfloral.com/gallery"
            className="text-primary underline underline-offset-4"
          >
            See our full portfolio &rarr;
          </a>
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Testimonials" title="What Couples Are Saying" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            "Cailyn understood our vision better than we could describe it. Our arbor was the most photographed thing at the wedding.",
            "Every bouquet felt personal and completely us. Communication was easy from the first email to the day-of delivery.",
            "The most beautiful arrangements in the area, by far — and worth every bit of the planning process.",
          ].map((quote, i) => (
            <figure key={quote} className="rounded-xl border border-border bg-card p-7 shadow-soft">
              <blockquote className="font-serif text-lg leading-relaxed">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-xs tracking-wide text-muted-foreground uppercase">
                Placeholder testimonial {i + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Good to know" title="Wedding Florist FAQs" />
        <Faq items={faqs} />
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">Ready to Start Planning?</h2>
          <a href="#quote" className="btn-base btn-primary mt-7">
            Get a Quote
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Or call or text us at{" "}
            <a href={PHONE_HREF} className="text-primary underline underline-offset-4">
              {PHONE}
            </a>
            .
          </p>
        </div>
      </Section>
    </Page>
  );
}
