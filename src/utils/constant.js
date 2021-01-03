

//Database strings and secrets
export const MONGO_URI = `mongodb+srv://green_project:uday123@cluster0.uqke9.mongodb.net`
export const JWT_SECRET = "project_graphql_000"

//Error strings
export const MISSING_TOKEN_STRING = "Invalid token passed or token not passed [pass `token` parameter in headers]"
export const DB_ERROR = "Something went wrong in our DB"
export const AUTH_ERROR = "Authentication failed ! Check your credentials"


//Database documents list [Exact names of the documents (Tables)]
export const COLLECTIONS = {
  USERS: "users"
}
