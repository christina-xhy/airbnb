import RoomItem from '@/components/room-item'
import React, { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RoomsWrapper } from './style'
import SectionRooms from '@/components/section-rooms'

const EntireRooms = memo(() => {
  const { roomList } = useSelector((state)=>({
    roomList:state.entire.roomList
  }))

  return (
    <RoomsWrapper>
      {
        roomList.map(item =>{
          return (
            <RoomItem roomList={item} itemWidth = "20%"/>
          )
        })
      }
    </RoomsWrapper>
  )
})

export default EntireRooms