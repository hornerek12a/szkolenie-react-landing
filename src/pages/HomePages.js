import React from 'react'
import BodyCard from '../templates/BodyCard/BodyCard'
import BodyComentary from '../templates/BodyComentary/BodyComentary'
import BodyImage from '../templates/BodyImage/BodyImage'
import BodyTop from '../templates/BodyTop/BodyTop'
import { MainTemplate } from '../templates/MainTemplate/MainTemplate'



function HomePages() {
  return (
    <MainTemplate>
      <BodyTop/>
      <BodyCard/>
      <BodyImage/>
      <BodyComentary/>
      
    </MainTemplate>
  )
}

export default HomePages