import React from 'react'

import Icon from '../Icon/Icon'

import './button.scss'

type Props = {
  text?: string
  icon?: string
  isLink?: boolean
  disabled?: boolean
  size?: 'small' | 'medium'
}

export const Button: React.FC<Props> = (props) => {
  const renderContent = () => {
    const text = props.text ? <span>{props.text}</span> : null

    return text
  }

  if (props.isLink) {
    return <a className={'btn'}>{renderContent()}</a>
  }

  return (
    <button className={'btn'}>
      {renderContent()}
      <Icon type={'arrow'} />
    </button>
  )
}
