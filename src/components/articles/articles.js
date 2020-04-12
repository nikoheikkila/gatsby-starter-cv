import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

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
      <Helmet>
        <script
          src="https://unpkg.com/dev-widget@^1/dist/card.component.min.mjs"
          type="module"
        ></script>
      </Helmet>
    </Fragment>
  )
}
