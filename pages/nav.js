import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Page() {
  const router = useRouter()

  return <span onClick={() => router.back()}>go back</span>
}

function Nav() {
  const router = useRouter()
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/productPage">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/categoryPage" passHref>
            <a>Categorys</a>
          </Link>
        </li>
        <li>
          <Link href="/productDetail" >
            <a>Product Detail</a>
          </Link>
        </li>
        <li>
          <Link href="/aboutUsPage">
            <a>About US</a>
          </Link>
        </li>
        <li>
          <Link href="/cleaningPage">
            <a>Cleaning</a>
          </Link>
        </li>
        <li>
          <Link href="/graphqlPage">
            <a>graphql Page</a>
          </Link>
        </li>
      </ul>
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
        a{
          text-decoration : none;
          color:white;
        }
      `}
      </style>
    </div>
  )
}

export default Nav
