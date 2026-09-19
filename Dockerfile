FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm test
RUN npm prune --omit=dev
ENV PORT=3000
EXPOSE 3000
CMD ["node", "app.js"]