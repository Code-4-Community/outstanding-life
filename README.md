# 🏡 Virtual Senior Center

The mission of the outstandinglife.org is to improve the quality of life of LGBTQ older adults in Massachusetts. Through this project, C4C aims to help LBFE find new creative ways to connect older adults: engaging hearts, transforming lives and breaking down boundaries.

Website: [Outstanding Life](https://outstandinglife.org/)

## 👷 Todo

- [x] Setup Next.js
- [x] Prisma
- [x] next-connect + middleware
- [x] Chakra UI
- [x] React Query
- [x] Environment Variables
- [x] Next Auth
- [x] Testing
  - [x] Jest/Ava
  - [x] React Testing Library
  - [x] Cypress
  - [x] API Mocks
- [ ] Documentation
  - [ ] Swagger
  - [ ] Pretty & Complete README
- [ ] Sentry
- [ ] Pull request template

## 🛠️ Getting Started

Install Node version 17.3.0 (npm 8.3.0)

Clone this repo and enter the root directory

```bash
git clone https://github.com/Code-4-Community/outstanding-life.git
cd outstanding-life
```

Install dependencies

```bash
npm install
npm install prisma --save-dev
```

Start the development server. (warning: do _not_ use `npm start` that starts up the server in production mode)

```bash
npm run dev
```

The web app should be running on `localhost:3000`

## 🧪 Tests

Our tests run on the [Jest](https://jestjs.io/) framework.

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

## 📂 Project Structure

There are 5 main folders in this project:

- pages
  - Covers all the pages in the website.
  - Each page has their own folder with an `index.tsx` file containing the source code for that page.
  - An `_app.tsx` file is also included which has the overall page structure as well as an `index.tsx` file for the initial landing page.
  - Contains `dev_reference.md` with useful tips on how to build our web components.
- prisma
  - There is an `schema.prisma` file which outlines the schema of our database in one place.
  - The migrations folder contains any updates to the schema that are made overtime.
  - The `prisma.ts` file connects Prisma to the application.
- lib
  - Frontend components
  - Helpers/DTOs for the API routes
- styles
  - Contains our global CSS files. Fonts, margins, colors, etc. are defined here.
  - A `theme.js` file contains our custom brand color scheme to use in our Chakra components.
- test
  - Unit tests
  - E2E tests
  - Integration tests

## Sessions

### `useSession()`

`useSession()` returns an object like this

Note: this is different from the default behavior (includes `privilegeLevel`)
If you want to add more information from the prisma schema, add to the callbacks in `/api/auth/[...nextauth].js`

```json
{
  "user": {
    "name": null,
    "email": "jessica.su0807@gmail.com",
    "image": null,
    "privilegeLevel": "BASIC"
  },
  "expires": "2022-03-31T01:53:23.176Z"
}
```

## 🔧 Troubleshooting

Various commands that may help in the development process:

| Command                  | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| `npx prisma studio`      | Runs Prisma studio                                           |
| `npx prisma migrate dev` | Allows you to run changes/db migrations in the Prisma schema |
| `npm run prepush:fix`    | Helps when CI tests are failing                              |

Troubleshooting Postgres Issues:

- Make sure your .env file is updated with your postgresql user and password
  - username often defaults to 'postgres' upon installation

- Make sure your postgres server is running and is in an environment that shares processes with your dev environment (e.g. using WSL for both)
  - `sudo service postgresql status`
  - `sudo service postgresql start` 

- If you are having trouble with psql authentication or need to reset a postgres user's password follow these guides
  - [Peer authentication failed for user postgres](https://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge)
  - [Changing a postgres user password](https://stackoverflow.com/questions/12720967/how-can-i-change-a-postgresql-user-password)

## 🔎 Learn More

- [The C4C Website](https://www.c4cneu.com/)

- [The LBFE Website](https://lbfeboston.org/)

## Adding More Events
If you want to add more events to the "Upcoming Events", you can directly add events into the 
`pages/programs/programs.json` in the JSON format:
```json
{
"tile": "Insert title here",
"description": "Insert description here",
"date": "Insert date here",
"time": "Insert time here",
"registerLink": "Insert link here"
}
```

If you want to add more events to the "Past Events" section, you can directly add events into the 
`pages\programs\past-programs.json` file!