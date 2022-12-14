import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LangforWrapper } from './style'


const HomeLongfor = memo((props) => {
  const {infoData} = props
  debugger;
  return (
   <LangforWrapper>

     <SectionHeader title= {infoData.title} subtitle = {infoData.subtitle}/>

   </LangforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData:PropTypes.object
}

export default HomeLongfor