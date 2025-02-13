# Use a lightweight web server image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy all files from the repository to the web server directory
COPY . .

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
