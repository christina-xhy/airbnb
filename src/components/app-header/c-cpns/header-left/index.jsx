
import IconLogo from '@/assets/img/svg/icon_logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'

const HeadLeft = memo((props) => {
  const navigate = useNavigate()
  function logoClickHandle(){
    navigate("/home")
  }

  return (
    <LeftWrapper>
      <div className = 'logo' onClick = {logoClickHandle}>
        <IconLogo/>
      </div>
      
    </LeftWrapper>
  )
})



export default HeadLeft
