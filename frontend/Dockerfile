# # Front-end Dockerfile
# # Use an official Node runtime as the base image
# FROM node:18

# # Set the working directory in the container to /app
# WORKDIR /fitness-web

# # Copy package.json and package-lock.json into the directory
# COPY package*.json ./

# # Install any needed packages specified in package.json
# RUN npm install

# # Bundle app source inside Docker image (by copying from your local directory)
# COPY . .

# # Make port 3000 available to the world outside this container
# EXPOSE 3000

# # Run the app when the container launches
# CMD ["npm", "start"]

# Use an official Node runtime as the base image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json from the fitness-web_old folder
COPY fitness-web_old/package*.json ./

# Install dependencies specified in package.json, ignoring peer dependency conflicts
RUN npm install --legacy-peer-deps

# Copy all other frontend code from fitness-web_old into the working directory
COPY fitness-web_old/ .

# Expose port 3000 to the outside world
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]