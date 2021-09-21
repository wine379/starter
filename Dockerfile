FROM node:alpine AS builder
WORKDIR '/app'
COPY . .
RUN npm run build

FROM nginx
EXPOSE 8080
COPY --from=builder /app/build /usr/share/nginx/html
