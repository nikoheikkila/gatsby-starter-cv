import React, { Fragment } from 'react'
import SkillBar from './skill-bar'

export default ({ title = 'Skills', skills = [] }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      {skills
        .filter(skill => skill.level > 0)
        .sort((skill1, skill2) => skill2.level - skill1.level)
        .map(skill => (
          <SkillBar
            className="skills"
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}
    </Fragment>
  )
}
