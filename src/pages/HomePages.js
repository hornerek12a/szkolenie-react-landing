import React from 'react'
import BodyCard1 from '../components/BodyCard/BodyCard1'
import BodyCard2 from '../components/BodyCard/BodyCard2'
import BodyTop from '../components/BodyTop/BodyTop'
import { MainTemplate } from '../components/MainTemplate/MainTemplate'



function HomePages() {
  return (
    <MainTemplate>
      <h2>Home pages</h2>
      <BodyTop/>
      <BodyCard1/>
      <BodyCard2/>
      
    </MainTemplate>
  )
}

export default HomePages