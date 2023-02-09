import React from 'react'
import Card from '../Card/Card'
import iconAccessAnyWhere from "../../images/icon-access-anywhere.svg"
import iconSecurity from "../../images/icon-security.svg";
import styles from "./BodyCard.module.css";

const BodyCard1 = () => {
  console.log(styles)
  return (
  <div className={styles.div}>
        <Card  title="Access your files, anywhere" desc="The ability to use a smartphone, tablet or computer to access our account means your files follow you everywhere." image={iconAccessAnyWhere}/>
        <Card title="Security you can trust" desc="2-factor authentication and user-controlled encryption are just a couplke of the security feautere we allow to help secure your files" image={iconSecurity}/>
  </div>
  )
}

export default BodyCard1