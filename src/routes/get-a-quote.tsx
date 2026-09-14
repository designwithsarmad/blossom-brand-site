import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Page, PHONE, PHONE_HREF, Section } from "@/components/site/SiteChrome";
import {
  Field,
  Fieldset,
  OptionGroup,
  Select,
  TextArea,
  TextInput,
} from "@/components/site/FormControls";

const TITLE = "Request a Wedding Floral Proposal | Brin's Posy Floral";
const DESCRIPTION =
  "Get your complimentary wedding floral proposal from Brin's Posy Floral in Staunton, VA. Fill out our questionnaire and we'll follow up personally.";

export const Route = createFileRoute("/get-a-quote")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/get-a-quote" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/get-a-quote" }],
  }),
  component: QuotePage,
});

function QuotePage() {
  const [heardAbout, setHeardAbout] = useState("");
  const [tableType, setTableType] = useState("");
  const [attachPhotos, setAttachPhotos] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Page>
        <Section>
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
            <h1 className="text-3xl sm:text-4xl">Thank you!</h1>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We&rsquo;ve received your questionnaire and are so excited to start planning with you.
              Cailyn will personally review your answers and follow up with your proposal or to
              schedule a quick call. If you don&rsquo;t hear from us, please don&rsquo;t hesitate to
              reach out at{" "}
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

  return (
    <Page>
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Complimentary proposal</p>
          <h1 className="mt-4 text-4xl sm:text-5xl">Complimentary Wedding Floral Proposal</h1>
          <div className="mt-6 space-y-4 text-left leading-relaxed text-muted-foreground sm:text-center">
            <p>Congratulations on your upcoming wedding!</p>
            <p>
              We&rsquo;re delighted to provide a complimentary preliminary floral proposal. To create
              the most accurate quote possible, please fill out the questionnaire below. Your
              answers help us understand your vision, venue, guest count, and floral priorities so we
              can prepare a proposal tailored specifically to your wedding.
            </p>
            <p>
              Once we receive your questionnaire, we&rsquo;ll prepare your proposal and would be
              happy to schedule a phone consultation to discuss any details.
            </p>
            <p>
              Questions? Call or text us at{" "}
              <a href={PHONE_HREF} className="text-primary underline underline-offset-4">
                {PHONE}
              </a>
              . If we miss your call, please leave a text message and we&rsquo;ll get back to you as
              soon as possible.
            </p>
            <p>We look forward to hearing from you!</p>
          </div>
        </div>

        <form
          className="mx-auto mt-14 grid max-w-3xl gap-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <Fieldset legend="Contact Information">
            <Field label="How did you hear about us?">
              {(id) => (
                <Select
                  id={id}
                  name="heardAbout"
                  value={heardAbout}
                  onChange={(e) => setHeardAbout(e.target.value)}
                >
                  <option value="">Select one</option>
                  <option>Google search</option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>Referral</option>
                  <option>Venue recommendation</option>
                  <option>Other</option>
                </Select>
              )}
            </Field>
            {heardAbout === "Other" && (
              <Field label="Tell us where you found us">
                {(id) => <TextInput id={id} name="heardAboutOther" />}
              </Field>
            )}
            <Field label="Couple's names" required>
              {(id) => <TextInput id={id} name="names" required />}
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Phone number" required>
                {(id) => <TextInput id={id} name="phone" type="tel" required autoComplete="tel" />}
              </Field>
              <Field label="Email address" required>
                {(id) => (
                  <TextInput id={id} name="email" type="email" required autoComplete="email" />
                )}
              </Field>
            </div>
            <OptionGroup
              legend="Preferred method of contact"
              name="preferredContact"
              type="radio"
              options={["Call", "Text", "Email"]}
              columns={3}
            />
          </Fieldset>

          <Fieldset legend="Wedding Details">
            <Field label="Wedding date" required>
              {(id) => <TextInput id={id} name="weddingDate" type="date" required />}
            </Field>
            <Field label="Ceremony location & time">
              {(id) => <TextInput id={id} name="ceremony" />}
            </Field>
            <Field label="Reception location & time">
              {(id) => <TextInput id={id} name="reception" />}
            </Field>
          </Fieldset>

          <Fieldset legend="Vendor Team" hint="If booked — all optional.">
            <div className="grid gap-5 sm:grid-cols-2">
              {["Photographer", "Videographer", "Planner/Coordinator", "Caterer", "Cake Baker"].map(
                (vendor) => (
                  <Field key={vendor} label={vendor}>
                    {(id) => <TextInput id={id} name={vendor} />}
                  </Field>
                ),
              )}
            </div>
          </Fieldset>

          <Fieldset legend="Wedding Style">
            <OptionGroup
              legend="Overall aesthetic"
              name="aesthetic"
              type="checkbox"
              options={["Garden", "Elegant", "Rustic", "Modern", "Boho", "Classic", "Other"]}
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Wedding colors">{(id) => <TextInput id={id} name="colors" />}</Field>
              <Field label="Floral color palette">
                {(id) => <TextInput id={id} name="palette" />}
              </Field>
            </div>
            <Field label="Pinterest or inspiration link" hint="Optional">
              {(id) => <TextInput id={id} name="inspiration" type="url" placeholder="https://" />}
            </Field>
          </Fieldset>

          <Fieldset legend="Floral Preferences">
            <Field label="Favorite flowers">{(id) => <TextArea id={id} name="favorites" />}</Field>
            <Field label="Flowers you'd like to avoid">
              {(id) => <TextArea id={id} name="avoid" />}
            </Field>
            <OptionGroup
              legend="Bouquet style"
              name="bouquetStyle"
              type="checkbox"
              options={["Loose & organic", "Classic round", "Cascading", "Other"]}
            />
            <OptionGroup
              legend="Greenery preference"
              name="greenery"
              type="radio"
              options={["Lush", "Minimal", "No preference"]}
              columns={3}
            />
          </Fieldset>

          <Fieldset legend="Wedding Party">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Bridal attire color">
                {(id) => <TextInput id={id} name="bridalAttire" />}
              </Field>
              <Field label="Number of bridesmaids & dress color(s)">
                {(id) => <TextInput id={id} name="bridesmaids" />}
              </Field>
              <Field label="Partner's attire color">
                {(id) => <TextInput id={id} name="partnerAttire" />}
              </Field>
              <Field label="Number of groomsmen & attire color(s)">
                {(id) => <TextInput id={id} name="groomsmen" />}
              </Field>
            </div>
            <Field label="Ring bearer and/or flower child (including pets!)">
              {(id) => <TextInput id={id} name="ringBearer" />}
            </Field>
          </Fieldset>

          <Fieldset legend="Personal Flowers" hint="Quantities">
            <div className="grid gap-5 sm:grid-cols-2">
              {["Bridal bouquet", "Bridesmaid bouquets", "Boutonnieres", "Corsages or posies"].map(
                (item) => (
                  <Field key={item} label={item}>
                    {(id) => <TextInput id={id} name={item} type="number" min={0} />}
                  </Field>
                ),
              )}
            </div>
            <Field label="Flower crowns, baskets, flower balls, pet flowers, etc.">
              {(id) => (
                <TextArea id={id} name="otherPersonal" placeholder="Describe items and quantities" />
              )}
            </Field>
          </Fieldset>

          <Fieldset legend="Ceremony Flowers">
            <OptionGroup
              legend="What would you like designed?"
              name="ceremonyFlowers"
              type="checkbox"
              options={[
                "Arbor or altar",
                "Aisle décor",
                "Chairs",
                "Welcome sign",
                "Memorial table",
                "Other",
              ]}
            />
            <Field label="Other ceremony details">
              {(id) => <TextInput id={id} name="ceremonyOther" />}
            </Field>
          </Fieldset>

          <Fieldset legend="Cocktail Hour">
            <OptionGroup
              legend="Areas to design"
              name="cocktailHour"
              type="checkbox"
              options={[
                "Cocktail tables",
                "The bar",
                "Welcome table",
                "Escort card table",
                "Gift table",
                "Other",
              ]}
            />
            <Field label="Other cocktail hour details">
              {(id) => <TextInput id={id} name="cocktailOther" />}
            </Field>
          </Fieldset>

          <Fieldset legend="Reception">
            <OptionGroup
              legend="Sweetheart table or head table?"
              name="tableType"
              type="radio"
              options={["Sweetheart table", "Head table", "Not sure yet"]}
              columns={3}
              onChange={setTableType}
            />
            {tableType === "Head table" && (
              <Field label="Approximate head table length (feet)">
                {(id) => <TextInput id={id} name="headTableLength" type="number" min={0} />}
              </Field>
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Number of guest tables">
                {(id) => <TextInput id={id} name="guestTables" type="number" min={0} />}
              </Field>
            </div>
            <OptionGroup
              legend="Table shape"
              name="tableShape"
              type="radio"
              options={["Round", "Rectangular", "Farm tables", "Combination"]}
            />
            <OptionGroup
              legend="Would you like centerpieces, candles, cake flowers, or other floral décor?"
              name="receptionDecor"
              type="checkbox"
              options={["Centerpieces", "Candles", "Cake flowers", "Other floral décor"]}
            />
          </Fieldset>

          <Fieldset legend="Floral Budget">
            <Field label="Estimated floral budget">
              {(id) => (
                <Select id={id} name="budget" defaultValue="">
                  <option value="">Select a range</option>
                  <option>Under $1,500</option>
                  <option>$1,500–3,000</option>
                  <option>$3,000–5,000</option>
                  <option>$5,000+</option>
                  <option>Not sure yet</option>
                </Select>
              )}
            </Field>
          </Fieldset>

          <Fieldset legend="Questions or Special Requests?" hint="Optional">
            <OptionGroup
              legend="Would you like to attach photos for inspiration of your event styling?"
              name="attachPhotos"
              type="radio"
              options={["Yes", "No"]}
              columns={2}
              onChange={setAttachPhotos}
            />
            {attachPhotos === "Yes" && (
              <Field
                label="Attach inspiration photos"
                hint="Share photos of event styling or arrangements you love (JPG, PNG)."
              >
                {(id) => (
                  <input
                    id={id}
                    name="inspirationPhotos"
                    type="file"
                    accept="image/*"
                    multiple
                    className="field-base file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-secondary-foreground"
                  />
                )}
              </Field>
            )}
            <Field label="Pinterest link for sample events or photographs">
              {(id) => (
                <TextInput
                  id={id}
                  name="pinterestSamples"
                  type="url"
                  placeholder="https://"
                />
              )}
            </Field>
            <Field label="Anything else we should know?">
              {(id) => <TextArea id={id} name="notes" rows={5} />}
            </Field>
          </Fieldset>

          <div className="rounded-xl border border-border bg-secondary/60 p-6 text-sm leading-relaxed text-muted-foreground">
            Please note: Every proposal is custom-designed and takes considerable time to prepare. We
            provide these detailed proposals at no cost and appreciate timely communication as we
            work together. Thank you for considering Brin&rsquo;s Posy &mdash; we&rsquo;d be honored
            to be part of your wedding day!
          </div>

          <button type="submit" className="btn-base btn-primary w-full">
            Send My Questionnaire
          </button>
        </form>
      </Section>
    </Page>
  );
}
