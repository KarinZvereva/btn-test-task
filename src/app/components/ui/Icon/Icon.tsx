import React from 'react'

import * as icons from './index'

type Props = {
  type: string
  className?: string
}

const Icon: React.FC<Props> = ({ type, className }: Props) => {
  return type in icons ? icons[type]({ className }) : '?'
}

export default Icon
