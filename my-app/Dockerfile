FROM node

RUN apt-get -qq update && apt-get -qq -y install curl net-tools

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
RUN npm install react-scripts@3.4.1 -g

COPY . ./

CMD ["npm", "start"]