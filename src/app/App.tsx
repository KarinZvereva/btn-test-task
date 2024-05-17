import React from 'react'

import { Button } from './components/ui/Button/Button'

import './app.scss'

export class App extends React.PureComponent {
  render() {
    return (
      <div className={'container'}>
        <Button text={'На главную'} />
      </div>
    )
  }
}
