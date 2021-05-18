import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from './nav'
import Homes from './home'
import 'bootstrap/dist/css/bootstrap.css'
// import ProductPage from './ecommercePages/productPage'

import getConfig from 'next/config'
    
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()



export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Nav />
        </div>
        <div className="navBar">
          <Homes />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="powerby"
        >
          Powered by{' keyur italiya'}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
      <style jsx>{`
        .navBar{
          min-height:472px
        }
        .powerby{
          text-decoration : none;
          color:black;
        }
      `}
      </style>
    </div>
  )
}
