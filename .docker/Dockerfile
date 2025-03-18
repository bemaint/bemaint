# Use a lightweight Node.js image for building the application
FROM node:18.20.4-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci  
# Install all dependencies, including devDependencies if needed for the build process

# Copy the entire project and build the Next.js application
COPY . .
RUN npm run build  
# Generates the .next directory with compiled files

# Production image
FROM node:18.20.4-alpine AS runner

# Set the working directory inside the production container
WORKDIR /app

# Copy only necessary files from the builder stage to optimize final image size
COPY --from=builder /app/.next ./.next  
# Next.js compiled output

COPY --from=builder /app/node_modules ./node_modules  
# Installed dependencies

COPY --from=builder /app/package.json ./package.json  
# Ensure dependency consistency

# Expose port 3000 for the application (ensure this aligns with your environment settings)
EXPOSE 3000

# Start the Next.js application in production mode
CMD ["node", "server.js"]  
# Use standalone build for better efficiency
