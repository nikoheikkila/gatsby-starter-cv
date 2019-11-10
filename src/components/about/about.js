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
    lineHeight: '1.75em',
    color: '#222',
    background: '#e8db3e',
    padding: '8px 12px',
  }

  return (
    <h3>
      I am <span style={titleStyle}>{title}</span>
    </h3>
  )
}

export default ({ text = '' }) => {
  return (
    <Fragment>
      <Moniker
        titles={[
          'a coder',
          'a web developer',
          'a software craftsman',
          'a caffeine addict',
          'an impeccable geek',
        ]}
      />
      <p>{text}</p>
    </Fragment>
  )
}
