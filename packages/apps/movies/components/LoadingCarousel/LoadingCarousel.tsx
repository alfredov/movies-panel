
import LoadingCard from '../LoadingCard'

import styles from './index.module.css'

const LoadingCarousel = () => (
  <div className={styles.wrapper}>
    <LoadingCard />
    <LoadingCard />
    <LoadingCard />
    <LoadingCard />
  </div>
)

export default LoadingCarousel
