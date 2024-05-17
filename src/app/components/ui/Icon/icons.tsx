import React from 'react'

import { Icon } from './index'

export const arrow: React.FC<Icon> = ({ w = 25, h = 25, color }: Icon) => (
  <svg width={w} height={h} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1466 10.3468L7.31442 16.2349C7.12295 16.3625 6.86425 16.3108 6.7366 16.1194C6.69098 16.0509 6.66663 15.9705 6.66663 15.8882V4.11198C6.66663 3.88185 6.85318 3.69531 7.08329 3.69531C7.16555 3.69531 7.24598 3.71966 7.31442 3.76529L16.1466 9.65337C16.338 9.78104 16.3898 10.0398 16.2621 10.2312C16.2316 10.277 16.1924 10.3163 16.1466 10.3468Z"
      fill={color}
    />
  </svg>
)