import Queries from './query'
import Mutations from './mutations'

export const resolvers = {
  Query: {
    users: (root, args, context, info) => Queries.fetchUsers(root, args, context, info),
    user: (root, args, context, info) => Queries.fetchUserById(root, args, context, info),
  },

  //Mutaion is similer to POST request in rest apis
  Mutation: {
    addUser: (root, args, context, info) => Mutations.addUser(root, args, context, info),
    login: (root, args, context, info) => Mutations.loginUser(root, args, context, info)
  }
  }
