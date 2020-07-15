import React from 'react'

const SkillLevel = props => {
  const {stars, skillArr} = props
  const starsArr = []
  for (let i = 1; i <= 5; i++) {
    let iconStyle = 'icon fa-star'
    if (i > stars) {
      iconStyle += '-o'
    }
    starsArr.push(<span className={iconStyle}/>)
  }
  return (
    <li>
      {starsArr}
      <p>
        {skillArr.map(skill => <div key={skill} >{skill}</div>)}
      </p>
    </li>
  )
}
export default SkillLevel
