# Chakrastic PWA Template  
<img src=".github/images/chakrastic.png">  
 
## Created with NextJS & ChakraUI  

This is a [Next.js](https://nextjs.org/) PWA template bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and using CHAKRA UI 


## 100 Lighthouse Scores   
<img src=".github/images/lighthousescore.png">  

## 📲 App Like Mobile Experience  
<img height='500px' src=".github/images/installed.png">  
<img height='500px' src=".github/images/browser.png">  
<img height='500px' src=".github/images/desktop.png">  

## ⚡️ Getting Started  
First, install dependencies:
```bash
npm install
```

Copy the example env file to get started quickly. 
```bash
cp .env.example .env
```

Then, run the development server:

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font. 

## Customize your config file
Customize the config file to your liking for your project in `config.ts` to quickly update your site title,  descriptions, OG images and more all accross your app.
```typescript 
//config.ts
const CONFIG = {
    siteDescription: "Jump start your NextJS PWA project with Chakrastic PWA",
    siteTitle: "Chakrastic PWA",
    siteUrl: process.env.NEXT_PUBLIC_BUILD_URL,
    siteImage: '',
    siteKeywords: '',
    siteLanguage: 'EN',
    siteLocale: 'EN-US',
}
```

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.