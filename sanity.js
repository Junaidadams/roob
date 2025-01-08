// /sanityClient.js

import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "cs9tj44a", // Replace with your project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true, // Use the CDN for faster response
  apiVersion: "2025-01-08", // Use the current date for the API version
});

// Create the image URL builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export const urlFor = (source) => builder.image(source);

export default client;
