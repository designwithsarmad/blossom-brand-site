# Add inspiration photo + Pinterest link to the last form section

Page: `/get-a-quote` — final "Questions or Special Requests?" fieldset.

## What changes

In the last fieldset of the questionnaire (`src/routes/get-a-quote.tsx`):

1. **New yes/no question**: "Would you like to attach photos for inspiration of your event styling?"
   - Rendered as a Call/Text-style radio group (reuse the existing `OptionGroup` component) with options "Yes" and "No".
2. **If "Yes" is selected**: show a photo attach control
   - A styled file input (`accept="image/*"`, `multiple`) with a short hint like "Share photos of event styling or arrangements you love."
   - Visual only — no files are uploaded or stored (matches the current form, which does not yet send answers anywhere).
3. **New Pinterest link field**: "Pinterest link for sample events or photographs"
   - URL input with `https://` placeholder, placed right after the attach control.
   - This is in addition to the existing "Pinterest or inspiration link" field in the Wedding Style section, which stays unchanged.

## Technical notes

- Only `src/routes/get-a-quote.tsx` changes; add one `useState` for the yes/no answer (same pattern as the existing `heardAbout` / `tableType` conditional fields).
- File input styled with the existing `field-base` utility to match other inputs; no new dependencies, no backend.
- Form behavior, validation, thank-you state, and all other sections stay untouched.
