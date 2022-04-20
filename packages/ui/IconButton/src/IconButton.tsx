/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { Interpolation, Theme } from '@emotion/react'

import LeftIcon from './LeftIcon'
import * as styles from './index.styles'

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as: 'left-arrow' | 'right-arrow',
  css?: Interpolation<Theme>
}

const IconButton: React.FC<IconButtonProps> = ({ children, as, css, ...props }) => (
  <button css={[styles.button, css]} {...props}>
    {as === 'left-arrow' ? (
      <LeftIcon />
    ) : (
      <LeftIcon css={{ transform: 'rotate(180deg)' }} />
    )}
    {children}
  </button>
)

export default IconButton
