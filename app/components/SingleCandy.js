import React from 'react'

export const SingleCandy = (props) => {
  const { name, description, imgUrl } = props.candy
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{imgUrl}</p>
    </div>
  )
}

