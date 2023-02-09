import React from 'react'
import BodyCard from '../components/BodyCard/BodyCard'
import BodyTop from '../components/BodyTop/BodyTop'
import { MainTemplate } from '../components/MainTemplate/MainTemplate'



function HomePages() {
  return (
    <MainTemplate>
      <BodyTop/>
      <BodyCard/>
      
    </MainTemplate>
  )
}

export default HomePages