import React from 'react'
import styles from "./Commentary.module.css"

const Commentary = ({image,text="", name="", desc=""}) => {
  return (
    <div className={styles.wrapper}>
        <div>
            <p>{text}</p>
        </div>
        <div>
            <img  className ={styles.image} src={image} alt={name}/>
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Commentary