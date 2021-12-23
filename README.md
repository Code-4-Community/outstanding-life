# 🏡 Virtual Senior Center

A project to create a virtual community for LGBT seniors in the Massachusetts area.

## 👷 Todo

- [x] Setup Next.js
- [x] Prisma
- [x] next-connect + middleware
- [x] Chakra UI
- [x] React Query
- [ ] Testing
  - [ ] Jest/Ava
  - [ ] React Testing Library
  - [x] Cypress
  - [ ] API Mocks
- [ ] Next Auth
- [ ] Documentation
  - [ ] Swagger
  - [ ] Pretty & Complete README
- [ ] Environment Variables


## 🛠️ Getting Started

Install Node version 17.3.0 (npm 8.3.0)

Clone this repo and enter the root directory

```bash
git clone https://github.com/Code-4-Community/vsc.git
cd vsc
```

Install dependencies

```bash
npm install
```

Start the development server. (warning: not *not* use `npm start` that starts up the server in production mode)

```bash
npm run dev
```

The web app should be running on `localhost:3000`

## 🧪 Tests

```bash
# Unit tests
npm run test          # runs all unit tests
npm run test:frontend # runs all *frontend* unit tests
npm run test:backend  # runs all *backend* unit tests

# E2E tests
# requires a running DB (warning: clears DB)
npm run test:e2e      # runs all E2E tests in headless mode
npm run test:cy       # opens the Cypress app to run E2E tests visually
```

## Project Structure

Work in Progress, will finish when we solidify our project structure.

```bash
├── README.md    # You're already here!
├── global.d.ts  # Global types
├── lib          # lib contains all reusable code modules
│   └── utils    
│       └── utils.ts
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── pages        # Expose pages and endpoints*
│   ├── _app.tsx
│   ├── api      # API endpoints, 
│   │   └── hello.ts
│   └── index.tsx
├── prisma       # Prisma DB Schemas, Prisma Client, Migrations, etc.
│   ├── migrations
│   │   ├── 20211223003440_test
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   ├── prisma.ts
│   └── schema.prisma
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── styles
│   ├── Home.module.css
│   └── globals.css
└── tsconfig.json


* - /pages uses File Based Routing to determine where to mount pages and API endpoints. i.e. /pages/pages/home.tsx would render home.tsx at http://baseurl.com/home
```

---
The following is auto-generated by Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
