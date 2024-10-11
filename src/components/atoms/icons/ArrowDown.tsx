import React from 'react'

const ArrowDown = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      ref={ref}
      {...props}
    >
      <path
        d='M19 9L12 16L5 9'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
})

ArrowDown.displayName = 'ArrowDown'

export default ArrowDown
