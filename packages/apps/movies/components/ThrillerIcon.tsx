import * as React from 'react'
import { SVGProps } from 'react'

const ThrillerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28 2v2h-4V2c0-1.1-.9-2-2-2H10C8.9 0 8 .9 8 2v2H4V2c0-1.1-.9-2-2-2S0 .9 0 2v32c0 1.1.9 2 2 2s2-.9 2-2v-2h4v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2h4v2c0 1.1.9 2 2 2s2-.9 2-2V2c0-1.1-.9-2-2-2s-2 .9-2 2ZM8 28H4v-4h4v4Zm0-8H4v-4h4v4Zm0-8H4V8h4v4Zm20 16h-4v-4h4v4Zm0-8h-4v-4h4v4Zm0-8h-4V8h4v4Z"
      fill="#141414"
    />
  </svg>
)

export default ThrillerIcon
