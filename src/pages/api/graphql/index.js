import { ApolloServer } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers';
import { connectDB } from './mongodb'
const jwt = require('jsonwebtoken')

connectDB()


const getUser = token => {
    try {
        if (token) {
            return jwt.verify(token, process.env.JWT_SECRET)
        }
        return null
    } catch (error) {
        return null
    }
}


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    context: ({ req }) => {
        // console.log(req)
        // const token = req.get('Authorization') || ''
        // return { user: getUser(token.replace('Bearer', '')) }
        // Get the user token from the headers.
        // const token = req.headers.authorization || '';

        // // Try to retrieve a user with the token
        // const user = getUser(token);



        // if (!user) throw new AuthenticationError('you must be logged in');




        // Add the user to the context
        // return { user };
    },
    introspection: true,
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
