import { gql } from "apollo-server";

export const typeDefs = gql`
  type Users {
    _id: ID!
    name: String
    mobile: String
    location: String
    createdAt: String
  }

  type Query {
    users: [Users]
    user(_id: ID!): Users  
    numberSix: Int!
  }

  input userInput {
    name: String! 
    mobile: String! @constraint(minLength: 10)
  }

  type Mutation {
    addUser(input: userInput): Users 
  }
`;
