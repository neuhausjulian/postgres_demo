FROM node:16

# Create app directory
WORKDIR /usr/src/app


COPY ./dist/* ./dist/
COPY ./package*.json ./
COPY ./prisma/* ./prisma/
RUN npm install
RUN npm run prisma-generate

EXPOSE 8080
EXPOSE 50051

CMD [ "node", "dist/index.js" ]