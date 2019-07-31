# Sync Money Test

Simple App using CRUD to save and read encrypted data from database

## Getting Started

Standard node environment

1. Using MongoDB through Docker container explained [here.](https://www.thepolyglotdeveloper.com/2019/01/getting-started-mongodb-docker-container-deployment/)
2. Clone Repo
3. Run 'npm install' through Terminal
4. Run following inside project folder


```
node test.js
```

Now the App should be listening on port 3000. (--> localhost:3000)


## Postman

#### Add data

1. open Postman and choose "Post"
2. click on body and choose x-www-form-urlencoded
3. make a post request to http://localhost:3000/data/add 
4. If successful following message will be displayed: 'data added successfully'.
5. If unsuccessful following message will be displayed: 'ERROR: Only alphanumeric values are accepted!'.

#### Read data

Get request to http://localhost:3000/data

## Used frameworks

- Express
- NodeRSA (instead of Crypto2)
- BodyParser
- MongoDB


### Author


Massimo Fazari. 

### License

tba
