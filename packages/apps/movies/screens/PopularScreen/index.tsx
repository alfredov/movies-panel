
import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as Carousel from '@foo-company/carousel'

import action from '../../actions/fetchPopular'
import * as selectors from '../../selectors'

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

  return (
    <div>
      <h1>Populars</h1>
      <Carousel.Root
        isFetching={loading}
        onPaginate={page => fetchPopular({ page })}
        totalPages={totalPages}
      >
        {movies && movies.map(movie =>
          <Carousel.Item
            key={movie.id}
            id={movie.id}
            date={movie.releaseDate}
            imageUrl={movie.posterPath}
            title={movie.title}  
          />
        )}
        <Carousel.BackButton />
        <Carousel.NextButton />
      </Carousel.Root>
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
