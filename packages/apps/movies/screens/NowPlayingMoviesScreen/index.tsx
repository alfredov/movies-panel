
import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as Carousel from '@foo-company/carousel'

import action from '../../actions/nowPlayingMovies'
import * as selectors from '../../selectors'
import ArrowIcon from '../../components/ArrowIcon'
import styles from '../../styles/Screens.module.css'

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const NowPlayingMoviesScreen = ({
  nowPlayingMovies,
  movies,
  totalPages,
  loading
}: Props) => {

  useEffect(() => {
    nowPlayingMovies({ page: 1 })
  }, [nowPlayingMovies])

  const paginate = (page: number) => {
    nowPlayingMovies({ page })
  }

  return (
    <div>
      <div>
        <h2 className={styles.title}>Últimos lanzamientos <ArrowIcon /></h2>
        <h3 className={styles.title}>Nullam sapien arcu tempor</h3>
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
  movies: selectors.nowPlayingMovies(state).data?.movies,
  totalPages: selectors.nowPlayingMovies(state).data?.totalPages,
  loading: selectors.nowPlayingMovies(state).loading
})

const mapDispatchToProps = ({
  nowPlayingMovies: action.request
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlayingMoviesScreen)
