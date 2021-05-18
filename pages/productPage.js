import React, {useState, useEffect, useCallback} from 'react'
import Link from 'next/link'
import { Page } from './home'
import axios from 'axios'
// import ProductDetail from './productDetail'

const initialState = { 
  products:[]
}

function productPage() {
  console.log("Product Parent loaded")
const [state, setstate] = useState(initialState)
const [title, setTitle] = useState("title 1")
const [heading, setHeading] = useState("heading 1")
  useEffect(() => {
    getProductData()
  }, [])
  const getProductData = async () => {
    try{
      var fetchData = await axios.get('https://jsonplaceholder.typicode.com/posts')
      // var responseData = await fetchData.json();
      var responseData = await fetchData.data;
      if(responseData){
        setstate({ products: responseData})
      }
    }catch(error){
      console.log("product fetch error", error)
    }
    
  }

  const deleteProduct = useCallback((indexToDelete) => {
    alert(indexToDelete)
  }, [])

  return (
    <div>
        <Page />
        <center><h3>All Products</h3> </center>
        <button className="btn btn-secondary m-5"> <Link className="text-decoration-none" href='/addProductPage'>Add Product</Link></button><br/>
          <div className="flex-row">
            <div>
              <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
            <input type="text" placeholder="heading" onChange={(e) => setHeading(e.target.value)}/>
            </div>
            <div>
              <select name="category" size="2" multiple>
                <option value="grocery">Grocery</option>
                <option value="milkey">Milkey</option>
                <option value="medicen">Medicen</option>  
              </select>
            </div>
          </div>
          
        
            {state && state.products.map((item, index) => {
              return(
                <div key={index}>
                    <p>{item.title}</p>
                </div>
              )
            })
        }

    </div>
  )
}

export default productPage


// <ProductDetail title = {title} delete={deleteProduct}/>