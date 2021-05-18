import  {  gql  }  from  "apollo-server-micro";

export  const  typeDefs  =  gql`
    type  Products {
        id: ID
        name: String
    }

    type  Query {
        getProducts: [Products]
        getProducts(name: String!): Products!
    }`