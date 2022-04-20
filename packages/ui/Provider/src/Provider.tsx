import React from 'react'
import { ThemeProvider, Global } from '@emotion/react'

import * as styles from './index.styles'

const Provider: React.FC = ({ children }) => (
  <ThemeProvider theme={{}}>
    <Global styles={styles.global} />
    {children}
  </ThemeProvider>
)

export default Provider
