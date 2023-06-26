FROM node:18 as builder
WORKDIR /app
COPY package.json .
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html