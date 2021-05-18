import { useState, useEffect } from "react";
import { Page } from './home'

export default function productPage() {
  let [product, setProducts] = useState([{ name: 'Tshirt', price: 2000 }, { name: 'Jeans', price: 4000 }]);
  let value = 0, price = 0;

  function getData(index) {
    axios.get('products.json').
      then(function (res) {
        console.log(res.data);
        setProducts(res.data);
      })
  }

  // useEffect(()=>{
  //     if(product){
  //         alert("hello")
  //         console.log("At UseEffect", product);
  //     }
  // },[product])

  function changeValue(val) {
    value = val;
    console.log(value);
  }

  function changePrice(val) {
    price = val;
    console.log(price);
  }

  function deletitem(index) {
    alert(index);
    var checked = product;
    checked.splice(index, 1);
    // let [name] = checked
    // let newitem = product.concat({name:"value",price:100});
    // setProducts(newitem);
    // console.log("checked -->",name);
    setProducts(checked);
  }

  function AddNewitem(e) {
    e.preventDefault();
    // let newitem = product.concat({name:e.target.name.value,price:e.target.price.value});
    // let newitem = product.concat({name:value,price:price});
    setProducts([...product, { name: value, price: price }]);
    e.target.name.value = '';
    e.target.price.value = '';
  }

  return (
    <div>
      <Page />
      <button onClick={getData}>Get Student</button>
      <div>
        <h1> Demo App</h1>

        <form onSubmit={AddNewitem}>
          {/* <input type="text" name="name" onChange={e => props.value = e.target.value}></input> */}
          <input type="text" name="name" onChange={e => changeValue(e.target.value)}></input>
          <input type="text" name="price" onChange={e => changePrice(e.target.value)}></input>

          <button >Add Item</button>

        </form>
        {
          product.map(function (val, index) {
            return <div>name : {val.name},Price : {val.price}
              {/* <button onClick={() => { deletitem(index) }} >Delete Item</button> */}
            </div>
          })
        }
      </div>

      {/* <EcomSep AddNewitem={AddNewitem} product={product} deletitem={deletitem} changeValue={changeValue} changePrice={changePrice} /> */}
    </div>
  );
}