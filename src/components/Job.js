import React from 'react'

const Job = props => {
  const {title, bullets} = props.job
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {bullets.map((point, index) => <li key={index} >{point}</li>)}
      </ul>
    </div>
  )
}
export default Job
