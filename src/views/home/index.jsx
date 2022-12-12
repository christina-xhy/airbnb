import React, { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { Button, Space } from 'antd';



import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'


const Home = memo(()=>{  


  //派发异步的事件；发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction()) // 调用redux的网络请求的数据。
  },[dispatch])


  //  从redux中获取数据
  const {goodPriceInfo,highScoreInfo,discountInfo} = useSelector((state)=>({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo: state.home.discountInfo
  }),shallowEqual)

  const [name,setName] = useState("佛山")//父子一、定义name数据

  const tabClickHandle = useCallback(function(index,name){
    setName(name)
  },[])//父子三
  
//组件 tab name ------ section-tabs 设置 数据的转换,map映射数据为字符串 ?
  const tabNames = discountInfo.dest_address?.map(item => item.name)

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        <div className='discount'>
          <SectionHeader title = {discountInfo.title} subtitle={discountInfo.subtitle}/>
          <SectionTabs tabNames = { tabNames} tabClick= {tabClickHandle}/>
          {/* 父子二 父子间通信，子传父。tabClick（函数）实现通信 -- section-tabs。index.jsx*/}
          <SectionRooms roomList = {discountInfo.dest_list?.[name]} itemWidth ="33.33333%"/>
        </div>
    
        {
          // !!Object.keys(goodPriceInfo).length &&
          <HomeSectionV1 infoData = {goodPriceInfo}/>
        }
        
        {
          //  !!Object.keys(highScoreInfo).length &&
           <HomeSectionV1 infoData = {highScoreInfo}/>
        }
        

      </div>
    
    </HomeWrapper>
  )
})



export default Home