import { gql } from "apollo-server";

export const typeDefs = gql`
  type Users {
    _id: ID!
    name: String
    email: String
    mobile: String
    location: String
    password: String
    createdAt: String
    token: String
  }

  input userInput {
    name: String!
    mobile: String!
    email: String!
    password: String!
  }

  input login {
    email: String!
    password: String!
  }

  type Query {
    users: [Users]
    user(_id: ID!): Users  
  }

  type Mutation {
    addUser(input: userInput): Users 
    login(input: login): Users
  }
`;
