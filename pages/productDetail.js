import React from 'react'
// import axios from "axios";
// import fetch from 'isomorphic-unfetch'
import { gql } from "apollo-server-micro";
import fetch from "isomorphic-unfetch";
// import aboutUsPage from "./aboutUsPage";

// interface productDetailProps {
//     products?: any;
// }

function productDetail(props) {
  console.log("Product detail child loaded", props)
  return (
    <div>
      <center><h3>Product Detail</h3></center>
    </div>
  )
}
productDetail.getInitialProps = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await res.json();
    return { data }
}
export default productDetail
// const getUser = gql`
//   query {
//     products {
//       items{
//         name
//         id
//       }
//     }
//     type  Query {
//         getProducts: [products]
//         getProducts(name: String!): products!
//   }
// `;




// productDetail.getInitialProps = async  function() {
//     try {
//         const response = await axios.post("http://localhost:8080/shop-api", {
//             query: getUser
//         });
//         const datas = await response.json();
//         console.log("data", datas)
//         return { product: response.data };
//     } catch (error) {
//         return {};
//     }
// };


// const MemoProductDetail = React.memo(productDetail)
