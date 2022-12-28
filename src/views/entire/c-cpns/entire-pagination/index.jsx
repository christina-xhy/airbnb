import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PaginationWrapper } from './style'
import { Pagination } from '@mui/material'
import { changeCurrentPageAction, fetchRoomListAction } from '@/store/modules/entire/createActions'

const EntirePagination = memo(() => {
  const {totalCount,currentPage,roomList} = useSelector((state)=>({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList:state.entire.roomList
  }))
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage +1) * 20
  const pageCount = Math.ceil(totalCount/20)

  const dispatch = useDispatch()
  function pageChangeHandle(event,pageCount){
    //更新最新的页码
    // dispatch(changeCurrentPageAction(pageCount -1 ))
    dispatch(fetchRoomListAction(pageCount -1 ))
  }

  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className='info'>
        <Pagination count ={pageCount} onChange ={pageChangeHandle}/>
        <div className='desc'>
          第{startCount} - {endCount}房源，总共{totalCount}多条数据
        </div>
      </div>
      
        )
      }
    </PaginationWrapper>
  )
})

export default EntirePagination