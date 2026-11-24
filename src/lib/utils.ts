/** Turns "GST Registration & Compliance" into "gst-registration-compliance" (used for anchors). */
export const slugify = (text: string) =>
  text.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

/** First letters of the name without honorifics, for avatar placeholders. */
export const initialsOf = (name: string) =>
  name.replace(/^(CA|CS|Advocate)\s+/i, "").split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
