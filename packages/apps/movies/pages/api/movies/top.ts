// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import 'dotenv/config'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=es`
  if (req.query.page) {
    url = `${url}&page=${req.query.page}`
  }

  axios
    .get(url)
    .then(response => {
      res.status(200).json(response.data)
    })
    .catch(error => {
      res.status(500).json(error)
    })
}
