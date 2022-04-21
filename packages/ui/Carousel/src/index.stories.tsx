import * as React from 'react'

import * as Carousel from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui/Carousel'
}

export const Template = () => {

  return (
    <Carousel.Root
      onPaginate={page => console.log({ page })}
      onInit={page => console.log('onInit',{ page })}
      totalPages={2}
    >
      <Carousel.Item
        id='1'
        date='2021-12-15'
        imageUrl='https://image.tmdb.org/t/p/w440_and_h660_face/u8BMLmwoc7YPHKSWawOOqC1c8lJ.jpg'
        title='title 1'
        onClick={(id) => console.log('item', id)}    
      />
      <Carousel.Item
        id='2'
        date='2021-12-16'
        imageUrl='https://image.tmdb.org/t/p/w440_and_h660_face/u8BMLmwoc7YPHKSWawOOqC1c8lJ.jpg'
        title='title 2'
        onClick={(id) => console.log('item', id)}      
      />
      <Carousel.Item
        id='3'
        date='2021-12-17'
        imageUrl='https://image.tmdb.org/t/p/w440_and_h660_face/u8BMLmwoc7YPHKSWawOOqC1c8lJ.jpg'
        title='title 3'
        onClick={(id) => console.log('item', id)}
      />
      <Carousel.Item
        id='4'
        date='2020-01-01'
        imageUrl='https://image.tmdb.org/t/p/w440_and_h660_face/u8BMLmwoc7YPHKSWawOOqC1c8lJ.jpg'
        title='title 4'        
      />
      <Carousel.Paginate>
        Load More
      </Carousel.Paginate>
      <Carousel.SlideBack />
      <Carousel.SlideNext />
    </Carousel.Root>
  )
}
