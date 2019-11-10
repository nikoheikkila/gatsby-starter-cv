import React, { Fragment } from 'react'
import SkillBar from './skill-bar'

export default ({ title = 'Skills', skills = [] }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      {skills
        .filter(({ level }) => level > 0 && level <= 100)
        .sort((skill1, skill2) => skill2.level - skill1.level)
        .map(({ name, level }, i) => (
          <SkillBar
            className="skills"
            key={`skill-${i + 1}`}
            name={name}
            level={level}
          />
        ))}
    </Fragment>
  )
}
