# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install @fontsource/league-spartan --silent
RUN npm install @fontsource/source-sans-pro --silent
RUN npm install react-phone-input-2 --silent
RUN npm install react-data-table-component --silent
RUN npm install antd --silent
RUN npm install date-fns --silent
RUN npm install react-to-print --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]








# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /media

ENV PATH /media/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . /media/

# start app
CMD ["npm", "start"]