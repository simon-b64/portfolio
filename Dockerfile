FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY . .

RUN npm install -g @angular/cli
RUN npm ci
RUN npm run build --configuration=production

FROM nginx:alpine
COPY --from=builder /app/dist/*/browser/. /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
