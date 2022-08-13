const { ApolloServer, gql } = require("apollo-server")


const typeDefs = gql`
    type Query {
        hello: String
        numberOfAnimals: Int
        price: Float
        isAvailable: Boolean
    }
`

const resolvers = {
    Query: {
        hello: () => {
            return "world"
        },
        numberOfAnimals: () => {
            return 55
        },
        price: () => {
            return 53.32
        },
        isAvailable: () => {
            return true
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => {
    console.log("server is ready at:" + url);
})
