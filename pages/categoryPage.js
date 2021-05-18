import React, { useState, useEffect } from 'react'
import { Page } from './home'

function categoryPage() {
  const [no, setNo] = useState(1)
  const [result, setResult] = useState(0)
  useEffect(() => {
    // factorial find

    const factorial = (n) => {
      let result=1;
      if(n==1){
        return 1
      }
      setResult(factorial(no))
      result = n*factorial(n-1)
      return result
    }
    //this is the function that will run when component is unmounted. means removed
    // from dom. like a destructor. this is equivalent of componentwillunmount
    // return () => {
    //     alert("unmounting compinent")
    // }
    const clearFunction = () => {
      alert("unmounting compinent")
    }
    return clearFunction
  }, [])

  useEffect(() => {
    const factorial = (n) => {
      let result=1;
      if(n==1)
        return 1
      result = n*factorial(n-1)
      return result;
    }  
    setResult(factorial(no))
  }, [no])

  return (
    <div>
      <Page /><br/>
      <center><h3>All Category</h3></center>
      <span class="badge badge-pill badge-primary">Secondary</span>
      factorial is = {result}
      <input type="text" name="factorial" value={no} onChange={(e) => {
        setNo(e.target.value)
      }}/>
    </div>
  )
}

export default categoryPage
