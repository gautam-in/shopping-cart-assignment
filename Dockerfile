# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application with webpack
RUN npm run build

# Expose the port your application listens on
EXPOSE 3000