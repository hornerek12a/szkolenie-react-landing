import React from 'react'
import Card from '../Card/Card'
import iconAnyFile from "../../images/icon-any-file.svg";
import iconCollaboration from "../../images/icon-collaboration.svg"
import styles from "./BodyCard.module.css"


const BodyCard2 = () => {
  return (
    <div className={styles.div}>
        <Card title="Real-time collaboration" desc="Securely share files and folders with friends, family and collagues for live collaboration. No email attachmetns required." image={iconCollaboration}/>
      <Card title="Store-any type of file" desc="Whether youre sharing holidays photos or work documents. Fylo has you covered allowing for all file type to be securely stored adn shared" image={iconAnyFile}/>
    </div>
  )
}

export default BodyCard2