import React from 'react'
import Card from '../../components/Card/Card'
import iconAccessAnyWhere from "../../images/icon-access-anywhere.svg"
import iconSecurity from "../../images/icon-security.svg";
import iconAnyFile from "../../images/icon-any-file.svg";
import iconCollaboration from "../../images/icon-collaboration.svg"
import styles from "./BodyCard.module.css";

const BodyCard = () => {
  console.log(styles)
  return (
  <div className={styles.div}>
        <Card  title="Access your files, anywhere" desc="The ability to use a smartphone, tablet or computer to access our account means your files follow you everywhere." image={iconAccessAnyWhere}/>
        <Card title="Security you can trust" desc="2-factor authentication and user-controlled encryption are just a couplke of the security feautere we allow to help secure your files" image={iconSecurity}/>
        <Card title="Real-time collaboration" desc="Securely share files and folders with friends, family and collagues for live collaboration. No email attachmetns required." image={iconCollaboration}/>
        <Card title="Store-any type of file" desc="Whether youre sharing holidays photos or work documents. Fylo has you covered allowing for all file type to be securely stored adn shared" image={iconAnyFile}/>
  </div>
  )
}

export default BodyCard