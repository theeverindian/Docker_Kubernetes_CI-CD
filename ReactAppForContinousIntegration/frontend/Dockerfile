# PRODUCTION Dockerfile. where dependencies are no longer required, only static files (index.html,main.js) are used to start the Nginx server.
# 2 steps are involved 1. building 2. running with nginx.

FROM node:alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build/ /usr/share/nginx/html


### COMMAND TO RUN ###
# docker run -p 8080:80 IMAGE_ID_AFTER_BUILD

