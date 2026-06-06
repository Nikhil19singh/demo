from node:18

workdir /app

copy package*.json ./

run npm install

copy . . 

expose 6969
cmd ["node", "app.js"]
