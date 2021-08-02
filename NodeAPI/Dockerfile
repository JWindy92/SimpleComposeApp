FROM node
ARG SERVICENAME=nodeapi

RUN apt-get -qq update && apt-get -qq -y install curl net-tools

WORKDIR "/usr/src/$SERVICENAME"

COPY . .
COPY ./package.json .
COPY ./package-lock.json .

RUN npm install
RUN chown root:node -R ./ && chmod 0750 -R ./

USER node

CMD ["npm", "start"]