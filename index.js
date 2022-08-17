const { ApolloServer } = require("apollo-server")

import { Product } from "./resolvers/Product";
import { typeDefs } from "./schema";
import { Query } from "./resolvers/Query";
import { Category } from "./resolvers/Category";

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Product,
        Category
    }
});

server.listen().then(({url}) => {
    console.log("server is ready at:" + url);
})
