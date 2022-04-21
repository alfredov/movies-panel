
import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as Carousel from '@foo-company/carousel'

import action from '../../actions/fetchPopular'
import * as selectors from '../../selectors'
import ArrowIcon from '../../components/ArrowIcon'
import styles from '../../styles/Screens.module.css'

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const PopularScreen = ({
  fetchPopular,
  movies,
  totalPages,
  loading
}: Props) => {

  useEffect(() => {
    fetchPopular({ page: 1 })
  }, [fetchPopular])

  const paginate = (page: number) => {
    fetchPopular({ page })
  }

  return (
    <div>
      <div>
        <h2 className={styles.title}>Más populares <ArrowIcon /></h2>
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
  movies: selectors.fetchPopular(state).data?.movies,
  totalPages: selectors.fetchPopular(state).data?.totalPages,
  loading: selectors.fetchPopular(state).loading
})

const mapDispatchToProps = ({
  fetchPopular: action.request
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularScreen)
