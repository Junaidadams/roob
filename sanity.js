// /client/sanity.js
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "cs9tj44a",
  dataset: "production",
  useCdn: true,
});
