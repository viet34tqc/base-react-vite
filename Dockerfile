# Stage 1: Build dependencies
FROM node:20-alpine AS dependencies

# Enable Corepack and PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Install dependencies only
COPY package.json pnpm-lock.yaml ./
RUN pnpm fetch && pnpm install --frozen-lockfile --ignore-scripts

# Stage 2: Build the application
FROM node:20-alpine AS build

# Enable Corepack and PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy files and dependencies
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

# Build the Vite app for production
RUN pnpm run build

# Stage 3: Serve with Nginx
FROM nginx:stable-alpine AS production

# Copy custom Nginx configuration, if applicable
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build output to the Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
