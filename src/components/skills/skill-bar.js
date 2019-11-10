import React from 'react'
import styled from 'styled-components'

const SkillBar = ({ className, name, level }) => {
  return (
    <div className={className}>
      <label htmlFor={`${name}-bar`}>{name}</label>
      <div id={`${name}-bar`} className="skill-bar">
        <div className="skill-level"></div>
      </div>
    </div>
  )
}

SkillBar.displayName = 'SkillBar'

const colours = {
  red: '#bf1e00',
  orange: '#d9911f',
  blue: '#1e53d2',
  green: '#35c413',
}

export default styled(SkillBar)`
  label {
    font-weight: 700;
    line-height: 2em;
  }
  .skill-bar {
    height: 10px;
    background-color: #ddd;
    padding: 1px;
  }
  .skill-level {
    background-color: ${({ level }) => {
      switch (true) {
        case level < 25:
          return colours.red
        case level >= 25 && level < 50:
          return colours.orange
        case level >= 50 && level < 75:
          return colours.blue
        case level >= 75:
          return colours.green
        default:
          return '#DDD'
      }
    }};
    width: ${props => props.level || 0}%;
    height: 8px;
  }
`
