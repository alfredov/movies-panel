/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import IconButton from '@foo-company/icon-button'

import * as styles from './index.styles'
import { getDate } from './getDate'

type Direction = 'back' | 'next'

export type Props = {
  onPaginate?: (page: number) => void,
  onInit?: (page: number) => void,
  isFetching?: boolean,
  totalPages?: number,
}

const CarouselContext = React.createContext({
  disableNextButton: false,
  disableBackButton: false,
  nextHandler: () => {},
  backHandler: () => {}
})

export const Root: React.FC<Props> = ({
  onInit,
  isFetching,
  onPaginate,
  totalPages,
  children
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const lastCardRef = React.useRef<HTMLDivElement>(null)
  const firstItemRef = React.useRef<HTMLSpanElement>(null)

  const [disableNextButton, setDisableNextButton] = React.useState(false)
  const [disableBackButton, setDisableBackButton] = React.useState(true)
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    if (onInit) {
      onInit(1)
    }
  }, [onInit])

  React.useEffect(() => {
    const options = {
      root: containerRef.current,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].target === lastCardRef.current) {
        setDisableNextButton(entries[0].isIntersecting)
      }
      if (entries[0].target === firstItemRef.current) {
        setDisableBackButton(entries[0].isIntersecting)
      }
    }, options)

    if (lastCardRef.current && firstItemRef.current) {
      observer.observe(lastCardRef.current)
      observer.observe(firstItemRef.current)
    }

    return () => {
      if (lastCardRef.current && firstItemRef.current) {
        observer.unobserve(lastCardRef.current)
        observer.unobserve(firstItemRef.current)
      }
    }
  }, [])

  React.useEffect(() => {
    if (disableNextButton && !isFetching && totalPages && totalPages > page) {
      setPage(pageState => {
        const nextPage = pageState + 1
        if (onPaginate) {
          onPaginate(nextPage)
        }
        return nextPage
      })
    }
  }, [
    disableNextButton,
    isFetching,
    totalPages,
    page,
    onPaginate
  ])

  const nextHandler = () => push('next')

  const backHandler = () => push('back')

  const push = (direction: Direction) => {
    if (containerRef.current) {
      const directionAsNumber = direction === 'back' ? -1 : 1
      const left = containerRef.current.scrollLeft + (directionAsNumber * containerRef.current.clientWidth)
      containerRef.current.scroll({
        left,
        behavior: 'smooth'
      })
    }
  }

  return (
    <CarouselContext.Provider value={{
      disableBackButton,
      disableNextButton,
      backHandler,
      nextHandler
    }}>
      <div css={styles.main}>
        <div css={{ position: 'relative' }}>
          <div ref={containerRef} css={styles.container}>
            <span css={styles.card} ref={firstItemRef} />
            {children}
            <div
              ref={lastCardRef}
              css={styles.card}
            />
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export type ItemProps = {
  id: string,
  imageUrl: string,
  title: string,
  date: string,
  onClick?: (id: string) => void
}

export const Item: React.FC<ItemProps> = (props) => {
  const clickHandler = () => {
    if (props.onClick) {
      props.onClick(props.id)
    }
  }
  return (
  <div css={styles.cardWrapper}>
    <div tabIndex={0} role="button" css={styles.card} onClick={clickHandler}>
      <img src={props.imageUrl} alt={props.title} />
    </div>
    <div css={styles.cardInfo}>
      <span css={styles.cardTitle}>{props.title}</span>
      <span css={styles.cardTitle}>
        {format(
          getDate(props.date),
          'd MMM YYY',
          { locale: es }
        )}
      </span>
    </div>
  </div>
  )
}

export const NextButton = () => {
  const { nextHandler, disableNextButton } = React.useContext(CarouselContext)
  return (
    <IconButton
      as="right-arrow"
      css={styles.buttonNextStyle}
      disabled={disableNextButton}
      onClick={nextHandler}
    />
  )
}

export const BackButton = () => {
  const { backHandler, disableBackButton } = React.useContext(CarouselContext)
  return (
    <IconButton
      as="left-arrow"
      css={styles.buttonBackStyle}
      disabled={disableBackButton}
      onClick={backHandler}
    />
  )
}
