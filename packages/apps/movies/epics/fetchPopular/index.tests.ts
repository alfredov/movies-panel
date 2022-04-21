import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { TResponse, fetchPopularEpic } from './index'
import action, { TSuccess } from '../../actions/fetchPopular'
import { PATH_IMAGES_500_BASE } from '../../constants'
import { testEpic } from '../../core-app/utils'

const response: TResponse = {
  page: 2,
  results: [{
    id: 458,
    overview: 'lorem',
    poster_path: '/imagex.jpg',
    release_date: '2019-01-01',
    title: 'x-men'
  }],
  total_pages: 85,
  total_results: 1700
}

const successData: TSuccess = {
  totalPages: 85,
  movies: [{
    id: '458',
    overview: 'lorem',
    posterPath: `${PATH_IMAGES_500_BASE}/imagex.jpg`,
    releaseDate: '2019-01-01',
    title: 'x-men'
  }]
}

const server = setupServer(
  rest.get('api/movies/popular',(_req, res, ctx) => {
    return res(ctx.json(response))
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.restoreHandlers())

describe('movies::epics::fetchPopularEpic', () => {
  it('should get data', (done) => {
    const expectedActions = [{
      ...action.success(successData)
    }]

    testEpic(
      fetchPopularEpic,
      expectedActions.length,
      action.request({ page: 2 }),
      {},
      (resultOfActions) => {
        expect(expectedActions).toStrictEqual(resultOfActions)
        done()
      }
    )
  })
})
