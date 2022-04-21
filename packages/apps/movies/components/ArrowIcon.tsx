
import { SVGProps } from 'react'

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 9h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41L8.71.7A.996.996 0 1 0 7.3 2.11L12.17 7H1c-.55 0-1 .45-1 1s.45 1 1 1Z"
      fill="#141414"
    />
  </svg>
)

export default ArrowIcon
