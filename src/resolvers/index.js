import {fetchUsers, fetchUserById} from './query'
import {addUser} from './mutations'

export const resolvers = {
  Query: {
    users: (root, args, context, info) => fetchUsers(root, args, context, info),
    user: (root, args, context, info) => fetchUserById(root, args, context, info),
    numberSix: (root, args, context, info) => {
      return 6;
    },
  },
  Mutation: {
    addUser: (root, args, context, info) => addUser(root, args, context, info),
  }
  }
