import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { Button, Space } from 'antd';

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'


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

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>

        {<HomeSectionV2 infoData = {discountInfo}/>}
    
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