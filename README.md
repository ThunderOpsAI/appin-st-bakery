# Appin Street Bakery

Wangaratta bakery landing page and bulk pre-order prototype, built with Next.js 14 and Tailwind CSS.

## Local setup

```bash
npm install
copy .env.example .env.local
npm run dev
```

The preorder form posts to `POST /api/orders`. It sends the request to the bakery inbox through Resend. The form intentionally falls back to the phone number when email delivery has not been configured yet.

## Vercel setup

1. Create a Resend account and an API key.
2. In the Vercel project, open **Settings → Environment Variables**.
3. Add these variables to Preview and Production:

   - `RESEND_API_KEY` — your Resend API key.
   - `ORDER_TO_EMAIL` — the inbox that should receive orders, currently `appinbakery@bigpond.com`.

4. Redeploy after saving the variables.

For production email branding, verify a bakery domain in Resend and change the `from` address in `src/app/api/orders/route.ts` from `onboarding@resend.dev` to the verified address.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
