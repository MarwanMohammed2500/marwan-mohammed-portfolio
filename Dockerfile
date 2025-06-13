# Build Stage
FROM node:20-slim AS builder

WORKDIR /app

# Copy only files required for installation
COPY package.json package-lock.json ./

RUN npm install

# Copy everything else
COPY . .

# Build the app
RUN npm run build

# Runtime Stage
FROM node:20-slim AS runtime

WORKDIR /app

# Copy only files required for installation
COPY --from=builder /app/dist ./dist
COPY package.json package-lock.json ./

# omit devDependancies
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public

EXPOSE 5000

CMD ["npm", "start"]
