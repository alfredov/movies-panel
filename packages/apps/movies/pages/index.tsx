
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import PopularScreen from '../screens/PopularScreen'
import TopMoviesScreen from '../screens/TopMoviesScreen'
import UpcomingMoviesScreen from '../screens/UpcomingMoviesScreen'
import NowPlayingMoviesScreen from '../screens/NowPlayingMoviesScreen'

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
        <TopMoviesScreen />
        <UpcomingMoviesScreen />
        <NowPlayingMoviesScreen />
      </main>
    </div>
  )
}

export default Home

