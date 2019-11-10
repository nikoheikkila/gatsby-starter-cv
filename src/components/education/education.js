import React, { Fragment } from 'react'

const Education = ({ title, degrees = [] }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <ul>
        {degrees.map(({ degree, institute, begin, end }, i) => {
          return (
            <li key={i}>
              {degree} (<em>{institute}</em>), {begin}&ndash;{end}
            </li>
          )
        })}
      </ul>
    </Fragment>
  )
}

export default Education
