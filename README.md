This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Yandex Cloud

1. Create Docker file. Take from [here](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile)
2. Create Container Registry in YC. Copy ID.
3. Build image with command `docker build .  -t cr.yandex/<Container Registry ID>/nextjs`
4. Get OAuth token in YC. [Instruction](https://cloud.yandex.ru/ru/docs/container-registry/operations/authentication)
5. Since the build is ready, lodin with command `docker login --username oauth --password <OAuth token> cr.yandex`
6. And push to Container Registry `docker push cr.yandex/<Container Registry ID>/nextjs`
7. Go to Serverless Containers and create new one. The image with name `<Container Registry ID>/nextjs` has to be available.
8. Run with command `docker run -p 3000:3000 cr.yandex/<Container Registry ID>/nextjs`.