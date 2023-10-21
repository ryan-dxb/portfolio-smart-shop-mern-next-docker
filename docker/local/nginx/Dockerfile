FROM nginx:1.25.2-alpine

# Remove default nginx website
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom configuration file from the current directory
COPY ./default.conf /etc/nginx/conf.d/default.conf


# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]