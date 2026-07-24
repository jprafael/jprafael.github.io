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
