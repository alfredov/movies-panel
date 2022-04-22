import * as React from 'react'
import { SVGProps } from 'react'

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.78 13.4 20 17.18l-3.78-3.78c-.78-.78-2.04-.78-2.82 0-.78.78-.78 2.04 0 2.82L17.18 20l-3.78 3.78c-.78.78-.78 2.04 0 2.82.78.78 2.04.78 2.82 0L20 22.82l3.78 3.78c.78.78 2.04.78 2.82 0 .78-.78.78-2.04 0-2.82L22.82 20l3.78-3.78c.78-.78.78-2.04 0-2.82-.78-.76-2.06-.76-2.82 0ZM20 0C8.94 0 0 8.94 0 20s8.94 20 20 20 20-8.94 20-20S31.06 0 20 0Zm0 36c-8.82 0-16-7.18-16-16S11.18 4 20 4s16 7.18 16 16-7.18 16-16 16Z"
      fill="currentColor"
    />
  </svg>
)

export default CloseIcon
