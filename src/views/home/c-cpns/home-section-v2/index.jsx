import PropTypes from 'prop-types'
import { useCallback,useState} from 'react'
import React, { memo } from 'react'
import { SectionV2Wrapper } from './style'

import SectionTabs from '@/components/section-tabs'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const HomeSectionV2 = memo((props) => {
  const {infoData} = props

   const [name,setName] = useState("佛山")//父子一、定义name数据
//组件 tab name ------ section-tabs 设置 数据的转换,map映射数据为字符串 ?
   const tabNames = infoData.dest_address?.map(item => item.name)

   const tabClickHandle = useCallback(function(index,name){
    setName(name)
  },[])//父子三

  return (
    <SectionV2Wrapper>
        <SectionHeader title = {infoData.title} subtitle={infoData.subtitle}/>
          <SectionTabs tabNames = { tabNames} tabClick= {tabClickHandle}/>
          {/* 父子二 父子间通信，子传父。tabClick（函数）实现通信 -- section-tabs。index.jsx*/}
          <SectionRooms roomList = {infoData.dest_list?.[name]} itemWidth ="33.33333%"/>
       
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {}

export default HomeSectionV2