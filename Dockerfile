FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json tsconfig.json ./
COPY src/data-source.ts ./

RUN npm install --production

FROM base AS development

RUN npm install

COPY . .

RUN npm run build

FROM base AS production

COPY --from=development /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]
