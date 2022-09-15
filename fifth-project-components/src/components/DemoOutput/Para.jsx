import React from 'react'

const Para = (props) => {
    console.log("This is Para!");
  return (
    <p>{props.children}</p>
  )
}

export default Para