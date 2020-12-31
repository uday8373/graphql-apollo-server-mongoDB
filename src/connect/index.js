import { ApolloServer, gql } from "apollo-server";
import { makeExecutableSchema } from 'graphql-tools'
import {constraintDirective, constraintDirectiveTypeDefs} from 'graphql-constraint-directive'
// import { connect, model } from "mongoose"
import { MongoClient } from "mongodb"
import {typeDefs} from './../typeDefs'
import {resolvers} from '../resolvers'

let db = null

export const server = async () => {

  const getDb = async () => {
    const DBURI = `mongodb+srv://green_project:uday123@cluster0.uqke9.mongodb.net`
    const client = await MongoClient.connect(DBURI, {useUnifiedTopology: true})
    const database = await client.db('green')
    db = await database
    return database
  }

  const schema = makeExecutableSchema({
    typeDefs: [constraintDirectiveTypeDefs, typeDefs], schemaTransforms: [constraintDirective()]
  })

getDb().then((db) => {
  const server = new ApolloServer({ typeDefs: [constraintDirectiveTypeDefs, typeDefs], context: {db}, resolvers, schemaTransforms: [constraintDirective()]});
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.


}