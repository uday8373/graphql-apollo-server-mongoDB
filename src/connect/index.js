import { ApolloServer, gql } from "apollo-server";
import { makeExecutableSchema } from 'graphql-tools'
import { constraintDirective, constraintDirectiveTypeDefs} from 'graphql-constraint-directive'
import { MongoClient } from "mongodb"
import {typeDefs} from './../typeDefs'
import {resolvers} from '../resolvers'
import { MONGO_URI } from "../utils/constant";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../utils/constant';

export const server = async () => {

  const DBconnector = async () => {
    const client = await MongoClient.connect(MONGO_URI, {useUnifiedTopology: true})
    const database = await client.db('green')
    return database
  }

  const context = ({req}) => {
    const token = req.headers.authorization || ''
    console.log("TOKEN", token);
    
  }
  // const schema = makeExecutableSchema({
  //   typeDefs: [constraintDirectiveTypeDefs, typeDefs], schemaTransforms: [constraintDirective()]
  // })

  DBconnector().then((db) => {
  
  const server = new ApolloServer({ typeDefs, context: ({req}) => {return {db, token: req.headers.token}}, resolvers});
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server running at ${url}`);
  });
})

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.


}