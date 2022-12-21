import LongforItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LangforWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'


const HomeLongfor = memo((props) => {
  const {infoData} = props
  return (
   <LangforWrapper>
    <SectionHeader title= {infoData.title} subtitle = {infoData.subtitle}/>
    <div className='longfor-list'>
      <ScrollView>
      {
          infoData.list.map(item => {
            return <LongforItem itemData = {item} key={item.city}/>
          })
        
      }
      </ScrollView>
    </div>

   </LangforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData:PropTypes.object
}

export default HomeLongfor