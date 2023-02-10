import React from 'react'
import Header from '../Header/Header'

export const MainTemplate = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}
