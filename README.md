# Singh Amit & Associates: website

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Lucide icons. All pages are statically generated.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run lint && npm run typecheck
```

## Editing content
Everything (text, services, team, contact details, legal copy) lives in **`src/data/site.ts`**.
Search that file for `PLACEHOLDER` to find values that must be replaced.

| To change…            | Edit…                                                                 |
|-----------------------|-----------------------------------------------------------------------|
| A service or sub-service | `services` array in `src/data/site.ts` (pages, menu, footer, sitemap update automatically) |
| Team member           | `teamGroups` in `src/data/site.ts`                                    |
| Colours / fonts       | `tailwind.config.ts` and the tokens at the top of `src/app/globals.css` |
| Logo                  | `src/components/Logo.tsx` (swap the monogram box for an `<Image>`)    |
| Photos                | `PhotoPlaceholder` in `src/components/Decor.tsx` (swap for `next/image`) |
| Map                   | `contact.mapEmbedUrl` in `site.ts` (Google Maps → Share → Embed)      |
| Contact form delivery | `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` (see `.env.example`)              |
| Production URL        | `NEXT_PUBLIC_SITE_URL` (canonical links, sitemap, schema.org)         |
