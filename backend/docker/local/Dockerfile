ARG NODE_VERSION=18-alpine3.17

FROM node:${NODE_VERSION}

LABEL name="next-invoice"
LABEL version="1.0.0"
LABEL description="Chat App built with Next.js, TypeScript, Tailwind CSS, Express, Socket IO and MongoDB."




ENV NODE_ENV=development

ARG APP_DIR=/app

WORKDIR ${APP_DIR}


# Run the container as a non-root user (uncomment to run as root) // Create User and Group
RUN addgroup --system chat \
    && adduser --system --ingroup chat chat



# Install dependencies
COPY package*.json ./
COPY tsconfig*.json ./


RUN npm install

# Copy the application
COPY --chown=chat:chat . ${APP_DIR}

# Build the application // For production
# RUN npm run build

# Change the ownership of the app directory to the invoice user
RUN chown -R chat:chat ${APP_DIR}  

#  Switch to the invoice user
USER chat

EXPOSE 1997

# Run the application 
CMD ["npm", "run", "dev:ts"]