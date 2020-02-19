# Implement your own GraphQL service

## Prerequisites
Install NodeJS(v10) from [here](https://nodejs.org/en/download/)

## Steps to develop graphql service
### Step 1: Create a new directory
Create a new directory for the project and cd into it.
```
mkdir graphql-service
cd graphql-service
```
### Step 2: Initialize a NodeJS project
Run tthe following command. This will create a package.json file for you.
```
npm init --yes
```
### Step 3: Install the dependencies 
Install the two top-level dependencies:
* apollo-server - core library  which helps you define the shape of your data and how to fetch it.
* graphql - library used to build a GraphQL schema and execute queries against it.
```
npm install apollo-server graphql
```
This command will install the packages in *node_modules* folder of your directory.
### Step 4: Create a empty file
For simplicty, we will keep all our code in this file.
```
touch server.js
```
### Step 5: Define Schema, data, resolvers
Open server.js and paste the following
```
const { ApolloServer, gql } = require('apollo-server');

// schema
const typeDefs = gql`
  type User {
    id: Int
    name: String
    phoneNo: String
    email: String
  }
  type Query {
    users: [User]
  }
`;

// data
const usersData = [
    { "id": "190", "name": "Tom", "phoneNo": "8812082835", "email": "tom@gmail.com" },
    { "id": "191", "name": "Lara", "phoneNo": "9912028385", "email": "lara@gmail.com" },
];

// resolver
const resolvers = {
    Query: {
        users: () => usersData,
    }
};
```
### Step 6: Create ApolloServer instance
Provide Schema and Resolvers to ApolloServer instance. 
Add the following code to the bottom of server.js.
```
// apollo server
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
```
### Step 7: Start the server
Run the following command from your project's root directory.
```
node server.js
```
### Step 8: Open the browser
Open the following URL to try out query using GraphQL Playground.
```
http://localhost:4000/
```

