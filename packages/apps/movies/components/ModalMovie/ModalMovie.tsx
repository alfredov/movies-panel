import * as Modal from '@foo-company/modal'
import Img from 'next/image'

import type { Movie } from '../../schemas'
import styles from './index.module.css'
import PlusIcon from '../PlusIcon'
import ImageFallback from '../ImageFallback'

export type ModalMovieProps = {
  movie: Movie,
  open: boolean,
  onClose?: () => void,
  onAddFavorite?: (movieId: string) => void,
}

const ModalMovie = ({
  movie,
  open,
  onClose,
  onAddFavorite
}: ModalMovieProps) => {
  const openChangeHandler = (isOpen: boolean) => {
    if (!isOpen && onClose) {
      onClose()
    }
  }

  const clickHandler = () => {
    if (onAddFavorite) {
      onAddFavorite(movie.id)
    }
  }

  return (
    <Modal.Root open={open} onOpenChange={openChangeHandler}>
      <Modal.Content>
        <Modal.Description asChild css={{ padding: '40px 30px' }}>
          <div className={styles.description}>
            <div className={styles.imageWrapper}>
              <ImageFallback width={355} height={532} src={movie.posterPath} alt={movie.title}
                fallbackSrc="https://user-images.githubusercontent.com/4967157/164774700-3af0a616-5183-4092-8dcb-283f145753eb.jpg"
              />
            </div>
            <div className={styles.info}>
              <h2>{movie.title}</h2>
              <button
                className={styles.iconButton}
                onClick={clickHandler}
              >
                <PlusIcon />
                Agregar a favoritos
              </button>
              <p>{movie.overview}</p>
            </div>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal.Root>
  )
}

export default ModalMovie
