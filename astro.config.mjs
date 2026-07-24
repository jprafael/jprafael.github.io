import { defineConfig } from "astro/config";
import sveltia from "astro-loader-sveltia-cms";

const eventCollection = ({ name, label, type, slug }) => ({
  name,
  label,
  folder: "events",
  create: true,
  filter: { field: "type", value: type },
  slug,
  summary: "**{{title_pt}}** — `{{filename}}`",
  thumbnail: "images.*",
  preview_path: "events/{{slug}}/",
  fields: [
    { label: "Title (PT)", name: "title_pt", widget: "string" },
    { label: "Title (EN)", name: "title_en", widget: "string" },
    { name: "type", widget: "hidden", default: type },
    { label: "Location", name: "location", widget: "relation", collection: "locations", value_field: "{{slug}}", search_fields: ["name"] },
    { label: "Images", name: "images", widget: "list", min: 1, field: { label: "Image", name: "image", widget: "image" } },
    { label: "Dates", name: "dates", widget: "list", min: 1, fields: [
      { label: "Starts", name: "start", widget: "datetime" },
      { label: "Ends", name: "end", widget: "datetime" },
    ] },
    { label: "Description (PT)", name: "description_pt", widget: "text" },
    { label: "Description (EN)", name: "description_en", widget: "text" },
  ],
});

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
          eventCollection({ name: "events", label: "Weekly Events", type: "Weekly", slug: "weekly-{{dates.0.start | date('YYYY-MM-DD')}}" }),
          eventCollection({ name: "monthly-events", label: "Monthly Events", type: "Monthly", slug: "monthly-{{dates.0.start | date('YYYY-MM-DD')}}" }),
          eventCollection({ name: "invictacon-events", label: "InvictaCon", type: "InvictaCon", slug: "invictacon-{{dates.0.start | date('YYYY')}}" }),
          {
            name: "locations",
            label: "Locations",
            folder: "locations",
            create: true,
            identifier_field: "name",
            summary: "{{name}}",
            preview_path: "locations/{{slug}}/",
            fields: [
              { label: "Name", name: "name", widget: "string" },
              { label: "Address", name: "address", widget: "string" },
              { label: "Google Maps URL", name: "maps_url", widget: "string" },
              { label: "Images", name: "images", widget: "list", min: 1, field: { label: "Image", name: "image", widget: "image" } },
              { label: "Directions (PT)", name: "directions_pt", widget: "text" },
              { label: "Directions (EN)", name: "directions_en", widget: "text" },
            ],
          },
        ],
      },
    }),
  ],
});
