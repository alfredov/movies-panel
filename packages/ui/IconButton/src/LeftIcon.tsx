import * as React from 'react'
import { SVGProps } from 'react'

const LeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.667 11.333H6.05L14.184 3.2a1.68 1.68 0 0 0 0-2.367 1.66 1.66 0 0 0-2.35 0L.85 11.816c-.65.65-.65 1.7 0 2.35l10.967 11c.65.65 1.7.65 2.35 0 .65-.65.65-1.7 0-2.35l-8.117-8.15h18.617c.916 0 1.666-.75 1.666-1.666 0-.917-.75-1.667-1.666-1.667Z"
      fill="#fff"
    />
  </svg>
)

export default LeftIcon
 