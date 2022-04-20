/** @jsxImportSource @emotion/react */
import * as React from 'react'

import LeftIcon from './LeftIcon'
import * as styles from './index.styles'

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as: 'left-arrow' | 'right-arrow'
}

const IconButton: React.FC<IconButtonProps> = ({ children, as, ...props }) => (
  <button css={styles.button} {...props}>
    {as === 'left-arrow' ? (
      <LeftIcon />
    ) : (
      <LeftIcon css={{ transform: 'rotate(180deg)' }} />
    )}
    {children}
  </button>
)

export default IconButton
