FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Vue.js application
RUN npm run build

# Use a lightweight web server for the production image
FROM nginx:stable-alpine

# Copy the built files from the previous stage to the Nginx web root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the container
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
