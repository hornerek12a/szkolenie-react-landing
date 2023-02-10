import React from 'react'
import Button from '../../components/Button/Button'
import illustrationStayProductive from "../../images/illustration-stay-productive.png"
import styles from "./BodyImage.module.css"

const BodyImage = () => {
  return (
    <div className={styles.wraper}>
        <div>
            <img src={illustrationStayProductive} alt="illustration-stay-productive"/>
        </div>
        <div>
          <p className ={styles.header}>Stay productive,wherever you are</p>
          <p>Never let location be an issue when accesing your files. Fuylo has you covered for all of your file storage needs.</p>
          <br/>
          <p>Securely share files and folders with friends, family and colleguaes for liove collaboration. No email attachments required.</p> 
          <Button styleClass={styles.button} text="See how Fylo work"/> 
        </div>
    </div>
  )
}

export default BodyImage