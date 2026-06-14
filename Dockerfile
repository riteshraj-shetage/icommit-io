FROM oven/bun:1.1-slim

WORKDIR /app

COPY package.json bun.lock* ./

RUN bun install --frozen-lockfile

COPY . .

ENTRYPOINT [ "bun", "run", "/app/scripts/engine.ts" ]