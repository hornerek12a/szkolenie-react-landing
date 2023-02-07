import React from 'react'
import styles from "./Header.module.css";
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <img src={logo} alt="Company logo"/>
      <nav>
        <ul>
            <li>
                <Link to ="/features">Features</Link>
            </li>
            <li>
                <Link to ="/team">Team</Link>
            </li>
            <li>
                <Link to ="/signin">Signin</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
