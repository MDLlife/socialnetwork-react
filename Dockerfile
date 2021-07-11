FROM node:10

WORKDIR /home/socialnetworkreact
COPY package.json /home/socialnetworkreact
COPY yarn.lock /home/socialnetworkreact

RUN yarn install --pure-lockfile || true

COPY img /home/socialnetworkreact/img
COPY interfaces /home/socialnetworkreact/interfaces
COPY pwa /home/socialnetworkreact/pwa
COPY scripts /home/socialnetworkreact/scripts
COPY test /home/socialnetworkreact/test
COPY vendor /home/socialnetworkreact/vendor

COPY .flowconfig .git .babelrc nodemon.json bower.json gulpfile.js webpack.config.js webpack.server.js version.txt  /home/socialnetworkreact/

COPY app /home/socialnetworkreact/app

RUN npm run build

EXPOSE 80 443 8080 3002
CMD [ "node", "app/server/index.js" ]
