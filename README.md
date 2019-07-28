# Sync Money Test

Simple App using CRUD to save and read encrypted data from database

## Getting Started

Standard node environment

1. Clone Repo
2. Run 'npm install' through Terminal
3. Run following inside project folder


```
npm install test.js
```


Now the App should be listening on port 3000. (--> localhost:3000)

## Postman

Info: Connect database individually. Currently we use a string to simulate 'save and read' from database.

#### Add data

1. open Postman
2. tick x-www-form-urlencoded
3. make a post request to http://localhost:3000/data/add 
4. If successful following message will be displayed: 'data added successfully'.
5. If unsuccessful following message will be displayed: 'ERROR: Only alphanumeric values are accepted!'.

#### Read data

Get request to http://localhost:3000/data



## Used frameworks

- Standard Node environment
- Crypto2




### Author


Massimo Fazari. 

### License

tba
