
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import PopularScreen from '../screens/PopularScreen'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PopularScreen />
      </main>
    </div>
  )
}

export default Home

