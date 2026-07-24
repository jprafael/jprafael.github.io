import { defineConfig } from "astro/config";
import sveltia from "astro-loader-sveltia-cms";

export default defineConfig({
  site: "https://jprafael.github.io/",
  outDir: "public",
  publicDir: "src/static",
  integrations: [
    sveltia({
      route: "/cms",
      title: "Board Gamers Porto",
      config: {
        backend: {
          name: "github",
          repo: "jprafael/jprafael.github.io",
          branch: "main",
        },
        media_folder: "media",
        collections: [
          {
            name: "events",
            label: "Events",
            folder: "events",
            create: true,
            preview_path: "events/{{slug}}/",
            fields: [
              { label: "Title (PT)", name: "title_pt", widget: "string" },
              { label: "Title (EN)", name: "title_en", widget: "string" },
              { label: "Type", name: "type", widget: "select", options: ["Weekly", "Monthly", "InvictaCon"] },
              { label: "Location", name: "location", widget: "relation", collection: "locations", value_field: "{{slug}}", search_fields: ["name"] },
              { label: "Images", name: "images", widget: "list", min: 1, field: { label: "Image", name: "image", widget: "image" } },
              { label: "Dates", name: "dates", widget: "list", fields: [
                { label: "Starts", name: "start", widget: "datetime" },
                { label: "Ends", name: "end", widget: "datetime" },
              ] },
              { label: "Description (PT)", name: "description_pt", widget: "text" },
              { label: "Description (EN)", name: "description_en", widget: "text" },
            ],
          },
          {
            name: "locations",
            label: "Locations",
            folder: "locations",
            create: true,
            preview_path: "locations/{{slug}}/",
            fields: [
              { label: "Name", name: "name", widget: "string" },
              { label: "Address", name: "address", widget: "string" },
              { label: "Google Maps URL", name: "maps_url", widget: "string" },
              { label: "Image", name: "image", widget: "image" },
              { label: "Directions (PT)", name: "directions_pt", widget: "text" },
              { label: "Directions (EN)", name: "directions_en", widget: "text" },
            ],
          },
          {
            name: "posts",
            label: "Posts",
            folder: "posts",
            create: true,
            preview_path: "s/{{slug}}/",
            fields: [
              { label: "Title", name: "title", widget: "string" },
              { label: "Draft", name: "draft", widget: "boolean", default: false },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          },
        ],
      },
    }),
  ],
});
