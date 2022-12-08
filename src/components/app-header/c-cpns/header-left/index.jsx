
import IconLogo from '@/assets/img/svg/icon_logo'
import React, { memo } from 'react'
import { LeftWrapper } from './style'

const HeadLeft = memo((props) => {
  return (
    <LeftWrapper>
      <div className = 'logo'>
        <IconLogo/>
      </div>
      
    </LeftWrapper>
  )
})



export default HeadLeft
