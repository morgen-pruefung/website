# Stage 1: Build
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the Vue.js application
RUN npm run build

# Stage 2: Serve with Caddy
FROM caddy:alpine

# Copy the built files from the previous stage to the Caddy web root
COPY --from=build /app/dist /usr/share/caddy

# Expose port 80 to the container
EXPOSE 80