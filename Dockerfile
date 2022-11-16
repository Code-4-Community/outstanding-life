FROM node:17
WORKDIR /vsc
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install
RUN npx prisma generate
# https://stackoverflow.com/questions/51533448/why-copy-package-json-precedes-copy
COPY . .
EXPOSE 80
RUN ["npm", "run", "build"]
CMD ["npm", "run", "start"]