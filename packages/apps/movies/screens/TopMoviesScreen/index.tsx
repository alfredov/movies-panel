
import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as Carousel from '@foo-company/carousel'

import action from '../../actions/fetchTopMovies'
import * as selectors from '../../selectors'
import ArrowIcon from '../../components/ArrowIcon'
import styles from '../../styles/Screens.module.css'

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const TopMoviesScreen = ({
  fetchTopMovies,
  movies,
  totalPages,
  loading
}: Props) => {

  useEffect(() => {
    fetchTopMovies({ page: 1 })
  }, [fetchTopMovies])

  const paginate = (page: number) => {
    fetchTopMovies({ page })
  }

  return (
    <div>
      <div>
        <h2 className={styles.title}>Mejor evaluadas <ArrowIcon /></h2>
        <h3 className={styles.title}>Phasellus mi urna euismod</h3>
      </div>
      {movies.length > 0 && (
        <Carousel.Root
          isFetching={loading}
          onPaginate={paginate}
          totalPages={totalPages}
        >
          {movies.map(movie =>
            <Carousel.Item
              key={movie.id}
              id={movie.id}
              date={movie.releaseDate}
              imageUrl={movie.posterPath}
              title={movie.title}  
            />
          )}
          <Carousel.Paginate disabled={loading}>
            Cargar más
          </Carousel.Paginate>
          <Carousel.SlideBack />
          <Carousel.SlideNext />
        </Carousel.Root>
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  movies: selectors.fetchTopMovies(state).data?.movies,
  totalPages: selectors.fetchTopMovies(state).data?.totalPages,
  loading: selectors.fetchTopMovies(state).loading
})

const mapDispatchToProps = ({
  fetchTopMovies: action.request
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMoviesScreen)
