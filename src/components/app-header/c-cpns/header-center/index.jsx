
import IconSearch from '@/assets/img/svg/icon_search'
import React, { memo } from 'react'
import { CenterWrapper } from './style'

const HeadCenter = memo((props) => {
  return (
   <CenterWrapper>
    <div className='search-bar'>
       <div className='text'>
        搜索房源体验
       </div>
        <span className='icon'>
          <IconSearch/>
        </span>
       </div>
     
   </CenterWrapper>
  )
})



export default HeadCenter