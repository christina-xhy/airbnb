import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
// import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'
import SectionRooms from '@/components/section-rooms'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'
const HomeSectionV3 = memo((props) => {
  const { infoData } = props
  return (
    <SectionV3Wrapper>
     
        <SectionHeader title = {infoData.title} subtitle = {infoData.subtitle}/>
        <div className='room-list'>
          {/* <ScrollView> */}
            <div className='item'>
            <SectionRooms  roomList = {infoData?.list} itemWidth = "25%"/>
            <SectionFooter name = 'plus'/>

            </div>
           
            
          {/* {
            infoData.list.map(item => {
              return <RoomItem itemData = {item } itemWidth = "20%" key = {item.id}/>
            })
          } */}
           
          {/* </ScrollView> */}
        </div>

    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
infoData:PropTypes.object
}

export default HomeSectionV3