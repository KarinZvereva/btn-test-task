import React from 'react'

import Icon from '../Icon/Icon'
import { ButtonSize, ButtonTheme } from 'src/app/types'

import './button.scss'

type Props = {
  text: string
  leftIcon?: string
  rightIcon?: string
  href?: string
  disabled?: boolean
  theme: ButtonTheme
  size?: ButtonSize
  onClick?: () => void
}

const DEFAULT_THEME: ButtonTheme = 'accent'
const DEFAULT_SIZE: ButtonSize = 'small'

const THEME_CLASS = {
  accent: 'btn_accent',
  outline: 'btn_outline',
  link: 'btn_link',
  primary: 'btn_primary',
  secondary: 'btn_secondary',
}

export const Button: React.FC<Props> = (props) => {
  const size = props.size || DEFAULT_SIZE
  const theme = props.theme || DEFAULT_THEME
  const hasOnlyIcon = props.leftIcon && !props.text

  const wrapper = (content) => {
    if (props.href) {
      return (
        <a className={`btn ${THEME_CLASS[theme]} btn_${size}`} href={props.href} aria-disabled={props.disabled}>
          {content}
        </a>
      )
    }

    const sizeStyle = hasOnlyIcon ? 'btn_icon btn_icon_' + size : 'btn_' + size
    const classname = `btn ${THEME_CLASS[theme]} ${sizeStyle}`
    return (
      <button className={classname} onClick={props.onClick} disabled={props.disabled}>
        {content}
      </button>
    )
  }

  if (hasOnlyIcon) {
    return wrapper(<Icon type={props.leftIcon} />)
  }

  const renderText = () => {
    return <span className={'btn-text'}>{props.text}</span>
  }

  const renderLeftIcon = () => {
    if (props.leftIcon) {
      return <Icon type={props.leftIcon} />
    }
    return null
  }

  const renderRightIcon = () => {
    if (props.rightIcon) {
      return <Icon type={props.rightIcon} />
    }
    return null
  }

  return wrapper(
    <>
      {renderLeftIcon()}
      {renderText()}
      {renderRightIcon()}
    </>,
  )
}
