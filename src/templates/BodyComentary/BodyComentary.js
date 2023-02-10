import React from 'react'
import Commentary from '../../components/Commentary/Commentary'
import profile1 from "../../images/profile-1.jpg"
import profile2 from "../../images/profile-2.jpg"
import profile3 from "../../images/profile-3.jpg"
import styles from "./BodyCommentary.module.css"


const BodyComentary = () => {
  return (
    <div>
      <div class={styles.wrapper}>
        <Commentary image={profile1} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." name="Satish Patel" desc="Founder ..."/>
        <Commentary image={profile2} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." name="Bruce McKenzie" desc="Founder ..."/>
        <Commentary image={profile3} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." name="Iva Boyd" desc="Founder ..."/>
      </div>
    </div>
  )
}

export default BodyComentary