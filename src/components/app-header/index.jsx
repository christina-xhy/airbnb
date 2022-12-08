
import React, { memo } from 'react'
import HeadCenter from './c-cpns/header-center'
import HeadLeft from './c-cpns/header-left'
import HeadRight from './c-cpns/header-right'
import { HeaderWrapper } from './style'

const AppHeader
 = memo((props) => {
  return (
    <HeaderWrapper>
      <HeadLeft/>
      <HeadCenter/>
      <HeadRight/>
    </HeaderWrapper>
  )
})



export default AppHeader
