import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import fetch from 'isomorphic-unfetch'

function aboutUsPage(props) {
  console.log("props --->",props);
  return (
    <div>
      <center><h3>About Us Page</h3></center>
    </div>
  )
}
aboutUsPage.getInitialProps = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await res.json();
    return { data }
}
export default aboutUsPage
