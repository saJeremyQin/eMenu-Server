const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();

//Local module imports
const db = require("./db");
const models = require('./models');
const typeDefs = require('./schema');
const resolvers = require('./resolvers/index');

// Run the server on a port specified in our .env file or port 4000
const port = process.env.PORT || 5005;
// Store the DB_HOST value as a variable
const DB_HOST = process.env.DB_HOST;

const app = express();
db.connect(DB_HOST);

// Apollo Server setup
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    persistedQueries: false, // Disable persisted queries
    context: () => {
        // Add the db models to the context 
        return {models};
    }
});

// start is called first, then applyMiddleware is called inside the callback function
server.start().then(() => {
    // Apply the Apollo GraphQL middleware and set the path to /api
    server.applyMiddleware({app, path:'/api'});
    // server.applyMiddleware({app});
    app.listen({ port }, () =>
        console.log(
        `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
        )
    );
}).catch( error => {
    console.error();
});

// For check whether the service has been deployed correctly, run
// curl \
// -X POST \
// -H "Content-Type: application/json" \
// --data '{ "query": "{ dishes { id } }" }' \
// https://e-menu-server.vercel.app/api