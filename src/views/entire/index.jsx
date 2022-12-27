import { fetchRoomListAction } from '@/store/modules/entire/createActions'
import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo((props) => {
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(fetchRoomListAction())
  },[dispatch])//发送网络请求并且获取到数据

  return (
   <EntireWrapper>
    <EntireFilter/>
    <EntireRooms/>
    <EntirePagination/>
   </EntireWrapper>
  )
})

Entire.propTypes = {}

export default Entire
