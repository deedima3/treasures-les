FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm@9.7.0

COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 8000

CMD ["pnpm", "preview", "--port", "8000", "--host", "0.0.0.0"]
