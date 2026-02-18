import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prism Laundry",
    short_name: "Prism",
    description:
      "Fast, reliable, and high-quality laundry services at your doorstep.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/prism.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
