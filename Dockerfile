# Stage 1: build the Astro site
FROM node:lts AS build
WORKDIR /app
# copy only lock files first so subsequent 'npm install' is cached
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: serve static files with NGINX
FROM nginx:alpine AS runtime
# Provide a custom NGINX configuration that listens on 8080 (see below)
COPY ./nginx.conf /etc/nginx/nginx.conf
# Copy the built static site to NGINX’s web root
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]