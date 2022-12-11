import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { Button, Space } from 'antd';



import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'

import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'


const Home = memo(()=>{
    //派发异步的事件；发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction()) // 调用redux的网络请求的数据。
  },[dispatch])
    
  //  从redux中获取数据
  const {goodPriceInfo} = useSelector((state)=>({
    goodPriceInfo:state.home.goodPriceInfo
  }),shallowEqual)

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        <div className='good-price'>
          <SectionHeader title= {goodPriceInfo.title}/> {/* 父传子通信 */}
          <h2>{goodPriceInfo?.title}</h2>
          <SectionRooms roomList ={goodPriceInfo?.list}/>
        </div>
      </div>
    
    </HomeWrapper>
  )
})



export default Home