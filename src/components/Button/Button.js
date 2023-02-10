import React from 'react'

const Button = ({styleClass,text}) => {
  return (
    <button className={styleClass}>{text}</button>
  )
}

export default Button