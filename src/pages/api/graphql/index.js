import { gql, ApolloServer, makeExecutableSchema } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const typeDefs = gql`
  type User {
    id: ID
  }

  type Query {
    getUser: User
  }
`;

const resolvers = {
    Query: {
        getUser: () => {
            return {
                id: "Foo",
            };
        },
    },
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});


const startServer = apolloServer.start();

export default async function handler(req, res) {

    await startServer;
    await apolloServer.createHandler({
        path: "/api/graphql",
    })(req, res);
}

export const config = {
    api: {
        bodyParser: false,
    },
};
// import typeDefs from './db/schema'
// import resolvers from './db/resolvers'
// import connectDb from './db/config'

//connectDb()

// export const schema = makeExecutableSchema({
//     typeDefs,
//     resolvers
// })

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// }

// export default new ApolloServer({ schema }).createHandler({
//     path: '/api/graphql',
// })