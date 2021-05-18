import React from 'react'
import fetch from "isomorphic-unfetch";
// import { gql } from "apollo-server-micro";
import { request } from"graphql-request";

const Products = `{  
 products {
      items{
        name
        id
      }
    }
 }  
`;

function graphqlPage(props) {
    console.log("Product detail child loaded", props)
    const { items } = props.data
    return (
        <div>
            {items && items.map((item, index) => {
                return(
                <div key={index}><p>{item.name}</p></div>
                )
            })}

        </div>
    )
}
graphqlPage.getInitialProps = async function(){
    const res = await request('http://localhost:8080/shop-api', Products);
    console.log("res --->", res.products);
    const data = await res.products;
    return { data }
}
export default graphqlPage;