# Shopping Cart Assignment

> This is simple but elegant e-commerce app built with of [Next JS](https://nextjs.org/), firebase for authentication

## Features

- Login/Sign up Feature
- See Your cart and checkout the details
- SSR (server side rendering enabled as it comes by default with next JS).
- its mobile responsive.
- Accessible for all screens

## Setup

Clone repository

```
git clone https://github.com/Rohitturbot/shopping-cart-assignment.git
```

go to

```
cd ./shopping-cart-assignment
```

install dependencies

```
yarn  install or npm i
```

run project

1. to start server

```
npm start
```

2. to start ui in dev mode

```
npm run dev
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
npm run build
```

and then to start ui in prod

```
npm run start:ui
```

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

## Deployment

I've used netlify to deploy the app, We can use [Netlify](https://netlify.com/) or [Varcel](https://vercel.com/) as well both are great and very simple to setup.

But in case of netlify you need to use `npx next export` to get the built to deploy.

Few steps to deploy on netlify [Manual, we can setup automatic deployment as well its easy to do ]

1. Create an account to netlify
2. Install `netlify CLI`
3. Login to netlify using cli
4. Prepare the build to deploy using `npx next export` >>> This will export the build to `out` dir
5. Now `run netlify deploy` it will ask few simple questions simply answer them and now just after 5 sec site is live `[as dev]`
6. To make your dev deploy to production run `netlify deploy --prod`
