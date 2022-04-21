
import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as Carousel from '@foo-company/carousel'

import action from '../../actions/fetchUpcomingMovies'
import * as selectors from '../../selectors'
import ArrowIcon from '../../components/ArrowIcon'
import styles from '../../styles/Screens.module.css'

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const UpcomingMoviesScreen = ({
  fetchUpcomingMovies,
  movies,
  totalPages,
  loading
}: Props) => {

  useEffect(() => {
    fetchUpcomingMovies({ page: 1 })
  }, [fetchUpcomingMovies])

  const paginate = (page: number) => {
    fetchUpcomingMovies({ page })
  }

  return (
    <div>
      <div>
        <h2 className={styles.title}>Próximos eventos <ArrowIcon /></h2>
        <h3 className={styles.title}>Morbi ac turpis lacus</h3>
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
  movies: selectors.fetchUpcomingMovies(state).data?.movies,
  totalPages: selectors.fetchUpcomingMovies(state).data?.totalPages,
  loading: selectors.fetchUpcomingMovies(state).loading
})

const mapDispatchToProps = ({
  fetchUpcomingMovies: action.request
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingMoviesScreen)
