# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the TypeScript code into JavaScript
RUN npm run build

# Expose the application port (change if your app uses a different port)
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/index.js"] # Change 'dist/index.js' to your actual entry point if needed
