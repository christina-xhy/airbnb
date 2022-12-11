import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { SectionV1Wrapper } from './style'

const HomeSectionV1= memo((props) => {
  const {infoData} = props
  debugger;
  return (
   <SectionV1Wrapper>

          <SectionHeader title = {infoData?.title} subtitle={infoData?.subtitle}/>
          <SectionRooms roomList = {infoData?.list}/>

   </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1
