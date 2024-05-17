import React from 'react'

import * as icons from './index'

type Props = {
  type: string
  color?: string
  size?: 'small' | 'medium'
}

const SIZES = {}

const Icon: React.FC<Props> = ({ type, color = '#242424', size }: Props) => {
  const w = 20
  const h = 20
  return type in icons ? icons[type]({ w, h, color }) : '?'
}

export default Icon
