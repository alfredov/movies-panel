
import * as React from 'react'
import IconButton from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui/IconButton'
}

const Wrapper: React.FC = (props) => (
  <div style={{ display: 'flex', gap: '16px' }}>{props.children}</div>
)

export const Template = () => (
  <Wrapper>
    <IconButton as="left-arrow" onClick={() => console.log('clicked')} />
    <IconButton as="right-arrow" onClick={() => console.log('clicked')} />
    <IconButton as="left-arrow" disabled />
    <IconButton as="right-arrow" disabled />
  </Wrapper>
)
