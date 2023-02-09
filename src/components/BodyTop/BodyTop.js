import React from 'react'
import bodyTopImage from "../../images/illustration-intro.png"
import Button from '../Button/Button'
import styles from "./BodyTop.module.css"

const BodyTop = () => {
  return (
  <div>
      <img  className={styles.image} src={bodyTopImage} alt="BodyTop"/>
      <h3  className={styles.header}>All your files in one secure location accessible anywhere</h3>
      <p className={styles.desc}>Fylo store all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family and co-workers.</p>
    <Button styleClass={styles.button}/>
    </div>
    )
}

export default BodyTop