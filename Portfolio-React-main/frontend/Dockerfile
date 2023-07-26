FROM node
WORKDIR /portfolio-website
COPY package*.json ./
RUN npm install --production
COPY . .
CMD ["npm", "start"]