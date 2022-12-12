import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SectionRooms= memo((props) => {
 const { roomList = [],itemWidth} = props
  return (
    <RoomsWrapper>
      {/* 加工roomList数据 ，加工itemWidth数据*/}
    {
      roomList?.slice(0,8)?.map(item => {
        return <RoomItem itemDate = {item} itemWidth = {itemWidth} key={item.id}/>
      })
    }
    {/* 总共展示8条数据 itemwidth */}
    </RoomsWrapper>
   
  )
})

SectionRooms
.propTypes = {
  roomList:PropTypes.array
}

export default SectionRooms
