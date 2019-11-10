import React, { Fragment, useState } from 'react'
import { useInterval } from '../hooks'

const Moniker = ({ titles, interval = 3000 }) => {
  const initial = titles[0] || ''
  const [title, setTitle] = useState(initial)

  useInterval(() => {
    const randomTitle =
      titles.length > 1
        ? titles[Math.floor(Math.random() * titles.length)]
        : initial
    setTitle(randomTitle)
  }, interval)

  const titleStyle = {
    maxWidth: '75%',
    lineHeight: '1.5em',
    color: '#222',
    background: '#e8db3e',
    padding: '8px 12px',
  }

  return (
    <h2 style={{ textAlign: 'center' }}>
      I am <span style={titleStyle}>{title}</span>
    </h2>
  )
}

export default ({ text = '' }) => {
  return (
    <Fragment>
      <Moniker
        titles={[
          'a coder',
          'a blogger',
          'a web developer',
          'a software craftsman',
          'a coffee lover',
          'an impeccable geek',
        ]}
      />
      <p style={{ textAlign: 'center' }}>{text}</p>
    </Fragment>
  )
}
