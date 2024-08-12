# Mini E-Commerce Website for Les Village

![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
![GraphQL](https://img.shields.io/badge/-Houdini-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Deno JS](https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white)
![Hygraph](https://img.shields.io/badge/hygraph-fff.svg?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMi40NiA1NSI+Cgk8cGF0aCBkPSJNMjUuOTY1IDcuMzMzIDE5LjQ3NCAxMWwtNi40OTEgMy42NjYtNi40OTIgMy42Njd2MjJsNi40OTItMy42NjZMMTkuNDczIDMzdi03LjMzM2wtNi40OSAzLjY2NlYyMmw2LjQ5LTMuNjY3IDYuNDkyLTMuNjY2djIybC02LjQ5MSAzLjY2NkwxMi45ODMgNDQgNi40OSA0Ny42NjcgMCA1MS4zMzMgNi40OTEgNTVsNi40OTItMy42NjcgNi40OS0zLjY2NkwyNS45NjYgNDRsNi40OTItMy42NjZWMy42NjZMMjUuOTY1IDB2Ny4zMzNaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

Treasures Les is a mini e-commerce website for Les Village, featuring heritage, local destinations, products, and tour packages offered primarily by the Village-Owned Enterprise (BUMDes).

## Features
- [x] Discover destinations, products, and tour packages. 
- [x] Manage content effortlessly with Hygraph.
- [x] Simple email subscription.

## Tech Stack
- Sveltekit
- Houdini Graphql
- Sveltekit Deno Adapter
- Hygraph formerly GraphCMS
- Docker

## Development

- Clone the repository:
```bash
git clone https://github.com/deedima3/treasures-les.git
```
- Setup env:
```bash
cp .env.example .env
```
> [!NOTE]  
> The `.env` file is used to configure the backend services required for the email subscription feature. Please contact [@putuwaw](https://github.com/putuwaw) to obtain the necessary credentials.

- Install dependencies:
```bash
pnpm install
```

- Run the app locally:
```bash
pnpm dev
```
- You can also run the app using Docker, after setup env, build and run the Docker image:
```bash
docker build -t treasures-les . && docker run -p 8000:8000 treasures-les
```

## Acknowledgment

We would like to extend our deepest gratitude to **Gede Sudimahendra** ([@deedima3](https://github.com/deedima3)) for his exceptional contribution as the main developer of this project and all of KKN PPM Unud Desa Les 2023 team for initiating and undertaking this project, so we can continue this project.
