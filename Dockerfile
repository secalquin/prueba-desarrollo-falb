FROM node:16

ENV appDir /opt/app-root/src

# Create app directory
RUN mkdir -p $appDir
WORKDIR ${appDir}

# COPY FILES
COPY package.json $appDir
COPY babel.config.json $appDir

#install all dependencies
RUN npm install

# Copy app source
COPY src $appDir/src

# Compile app sources
RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# Expose port and CMD
EXPOSE 8080
CMD [ "npm", "start" ]