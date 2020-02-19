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

// apollo server
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});