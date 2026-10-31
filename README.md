# pouju.github.io

My personal site at [pouju.github.io](https://pouju.github.io), built with [Astro](https://astro.build).

## Editing

- Profile, work, skills and education: [`src/data/profile.ts`](src/data/profile.ts)
- Projects: one Markdown file per project in [`src/content/projects/`](src/content/projects/), with its image in `src/assets/projects/`

## Development

Requires Node 22.12 or newer.

```sh
npm install
npm run dev     # http://localhost:4321
npm run check   # type-check
npm run build   # output in dist/
```

Pushes to `main` are built and deployed to GitHub Pages by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
