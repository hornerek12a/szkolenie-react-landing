import React from 'react'
import styles from "./Card.module.css"

const Card = ({image, title, desc}) => {
  return (
    <article>
      <img  className={styles.image} alt={title} src={image}/>
      <h3 className ={styles.header}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </article>
  )
}

export default Card
