FROM dev-registry.zhonganonline.com:5000/env/node:4.4.3

MAINTAINER Bin.Mei <meibin08@163.com>

COPY package.json /root/app/
WORKDIR /root/app
ENV SASS_BINARY_SITE http://npm.zhonganonline.com/node-mirrors/node-sass/
RUN npm install
COPY . /root/app

RUN npm run build

EXPOSE 8080

ENTRYPOINT ["npm"]

CMD ["start"]
