import axios from 'axios'
import Head from 'next/head'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'
import Featured from "../components/Featured"

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Hot</title>
        <meta name="description" content="The best pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <Featured />
      <PizzaList  pizzaList={pizzaList} />
    </div>
  )
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/api/products");
  return {
    props:{
      pizzaList: response.data,
    }
  }
}