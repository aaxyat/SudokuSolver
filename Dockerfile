# Build the frontend
FROM node:14 AS build-frontend
WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend/ ./
RUN npm run build

# Set up the backend
FROM node:14
WORKDIR /app
COPY ./backend/package*.json ./
RUN npm install

# Copy the built frontend files
COPY --from=build-frontend /app/build ./frontend/build

# Copy the backend files
COPY ./backend/ ./

# Expose the backend port
EXPOSE 5000

# Start both the frontend and backend
CMD ["npm", "start"]
