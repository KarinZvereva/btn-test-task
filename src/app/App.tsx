import React from 'react'

import { Button } from './components/ui/Button/Button'

import './app.scss'

export const App: React.FC = () => {
  const [isDisabled, setDisabled] = React.useState<boolean>(false)

  return (
    <div className={'container'}>
      <Button theme={'link'} text={'На главную'} disabled={isDisabled} leftIcon={'arrow'} size={'medium'} href={'#'} />
      <Button theme={'accent'} text={'Смотреть превью'} disabled={isDisabled} leftIcon={'arrow'} />
      <Button theme={'accent'} text={''} disabled={isDisabled} leftIcon={'arrow'} size={'medium'} />
      <Button theme={'accent'} text={''} disabled={isDisabled} leftIcon={'arrow'} />

      <Button theme={'outline'} text={'Смотреть превью'} disabled={isDisabled} rightIcon={'arrow'} size={'medium'} />
      <Button theme={'outline'} text={'Смотреть превью'} disabled={isDisabled} />
      <Button theme={'outline'} text={''} disabled={isDisabled} leftIcon={'arrow'} size={'medium'} />
      <Button theme={'outline'} text={''} disabled={isDisabled} leftIcon={'arrow'} />

      <Button theme={'link'} text={'Смотреть превью'} disabled={isDisabled} rightIcon={'arrow'} size={'medium'} />
      <Button theme={'link'} text={'Смотреть превью'} disabled={isDisabled} />
      <Button theme={'link'} text={''} disabled={isDisabled} leftIcon={'arrow'} size={'medium'} />
      <Button theme={'link'} text={''} disabled={isDisabled} leftIcon={'arrow'} />

      <Button theme={'secondary'} text={'Смотреть превью'} disabled={isDisabled} rightIcon={'arrow'} size={'medium'} />
      <Button theme={'secondary'} text={'Смотреть превью'} disabled={isDisabled} />
      <Button theme={'secondary'} text={''} disabled={isDisabled} leftIcon={'arrow'} size={'medium'} />
      <Button theme={'secondary'} text={''} disabled={isDisabled} leftIcon={'arrow'} />

      <Button theme={'primary'} text={'Смотреть превью'} disabled={isDisabled} rightIcon={'arrow'} size={'medium'} />
      <Button theme={'primary'} text={'Смотреть превью'} disabled={isDisabled} />
      <Button theme={'primary'} text={''} disabled={isDisabled} leftIcon={'arrow'} size={'medium'} />
      <Button theme={'primary'} text={''} disabled={isDisabled} leftIcon={'arrow'} />

      <Button theme={'outline'} text={'toggle disabled'} onClick={() => setDisabled(!isDisabled)} size={'medium'} />
    </div>
  )
}
