# Import Node
FROM node:alpine
# change working directory
WORKDIR /usr/app
#Copy package file
COPY ./package.json ./
# install Dependencies
RUN npm install

# copy all files
COPY ./ ./

# default command
CMD ["npm","start"]
