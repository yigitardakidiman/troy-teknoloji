import type { MetadataRoute } from "next";

import { siteContent } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Troy Teknoloji",
    short_name: "Troy Teknoloji",
    description: siteContent.company.description,
    start_url: "/",
    display: "standalone",
    background_color: "#07111b",
    theme_color: "#07111b",
    lang: "tr",
    icons: [
      {
        src: siteContent.media.favicon,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
