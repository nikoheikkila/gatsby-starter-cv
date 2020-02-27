import React, { Fragment } from 'react'
import 'dev-widget'

const widgetStyle = {
  textAlign: 'center',
}

export default ({
  username,
  theme = 'default',
  sortBy = 'reactions',
  width = '90%',
  height = 'auto',
  limit = 30,
}) => {
  return (
    <Fragment>
      <h2>Popular Articles</h2>
      <section style={widgetStyle}>
        <dev-widget
          data-username={username}
          data-theme={theme}
          data-sortby={sortBy}
          data-width={width}
          data-contentheight={height}
          data-limit={limit.toString()}
        ></dev-widget>
      </section>
    </Fragment>
  )
}
