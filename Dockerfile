# always start with FROM - this tells which version of node to build the image from
FROM node:10

# create app directory
WORKDIR /sdc-proxy

COPY package*.json ./

# bundle app source

RUN npm install

COPY . .

# map app to port # by docker daemon
EXPOSE 3400

# start server
CMD [ "npm", "start" ]