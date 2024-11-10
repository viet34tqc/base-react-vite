# Build the client
FROM node:20-alpine AS builder
WORKDIR /app

# Enable corepack to manage pnpm versions
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY . .

RUN pnpm install --frozen-lockfile --ignore-scripts

RUN pnpm run build

# Serve the client using Nginx
FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html

# Optimize Nginx for production
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
