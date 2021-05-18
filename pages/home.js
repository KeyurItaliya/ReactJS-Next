import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Page() {
  const router = useRouter()

  return <span onClick={() => router.back()}>go back</span>
}

function Homes() {
  const router = useRouter()
  return (
    <div>
      <center><h3>Home Page</h3></center>
      <style jsx >{`
        ul{
          list-style-type:none;
          background-color:black;
          min-height:50px;
          padding:10px; 
        }
        li{
          color:white;
          display:inline;
          margin-right:10px;
          font-size:18px;
        }
      `}
      </style>
    </div>
  )
}

export default Homes
