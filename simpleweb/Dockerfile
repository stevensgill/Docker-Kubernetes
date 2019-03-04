# Specify a base image
FROM node:alpine

WORKDIR '/user/app'

# Install NPM dependencies
COPY ./package.json ./
RUN npm install

# Install other dependencies
COPY ./ ./

# Default command
CMD ["npm", "start"]