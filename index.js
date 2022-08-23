const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Mutation } = require("./resolvers/Mutation");
const { Product } = require("./resolvers/Product");
const { db } = require("./db");

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product,
        Mutation
    },
    context: {
        db,
    },
});

server.listen().then(({ url }) => {
    console.log("Server is up at " + url);
});
