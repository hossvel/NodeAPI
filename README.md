# NodeAPI
How to create Restful CRUD API with Node.js MongoDB and Express
Update MongoDB connection Url in config.js file
Install Node.js and relevant dependencies in your app folder
# Run in Docker
docker-compose up
# use -d flag to run in background
# Tear down
docker-compose down
# To re-build
docker-compose build
# Multiples contenedores
usar este docker-compose , con las imagenes ya generadas.  
```sh
version: '3'
services:
  frontend:    
    image: hhvelascoa/webapp:1.0
    ports:
      - 4000:80
    depends_on:
      - backend
  backend:
    image: hhvelascoa/nodeapi:1.0
    ports:
      - 3000:3000
    depends_on:
      - mongo
  mongo:
    container_name: mongo
    image: mongo
    ports:
      - '27017:27017'
    volumes:
      - '../../../MongoData:/var/lib/mongo/data/db'
      #- './data:/data/db'
```
```sh
docker-compose up 
```
| Plugin | README |
| ------ | ------ |
| Client | https://github.com/hossvel/Angular7CRUD/blob/master/README.md|
| Server | https://github.com/hossvel/NodeAPI/blob/master/README.md|

