const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL's schema language
const typeDefs = gql`
  type Dish {
    id: ID,
    name: String,
    description:  String,
    type: String,
    price: Int,
    image: String
  }
  type Query {
    hello: String
    dishes: [Dish]!
    getDish(id:ID): Dish!
  }
  type Mutation {
    newDish(name:String!,type:String!,price:Int!,description:String,image:String): Dish!
    updateDish(id:ID!,name:String!,type:String!,price:Int!,description:String,image:String):Dish!
    deleteDish(id:ID!):Boolean!
  }
`;


module.exports = typeDefs;