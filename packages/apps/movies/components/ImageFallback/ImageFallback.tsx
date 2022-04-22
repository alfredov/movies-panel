import Image, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'

export type ImageFallbackProps = ImageProps & { fallbackSrc: string }

const ImageFallback = ({ src, alt, fallbackSrc, ...rest }: ImageFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  const fallBackHandler = () => setImgSrc(fallbackSrc)

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={fallBackHandler}
      onLoadingComplete={result => {
        if (result.naturalWidth === 0) { // broken image
          fallBackHandler()
        }
      }}
    />
  )
}

export default ImageFallback
