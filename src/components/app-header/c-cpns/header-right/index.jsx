
import IconAvatar from '@/assets/img/svg/icon_avatar'
import IconMenu from '@/assets/img/svg/icon_menu'
import IconGlobal from '@/assets/img/svg/icon_global'
import React, { memo } from 'react'
import { RightWrapper } from './style'
import { useState,useEffect } from 'react'

const HeadRight= memo((props) => {
  const [showPanel,setShowPanel] = useState(false)

  useEffect(()=>{
    function windowHandleClick(){
      setShowPanel(false)
    }
    window.addEventListener('click',windowHandleClick,true)//监听事件，true参数是设置使用捕获事件

    return ()=>{
      window.removeEventListener('click',windowHandleClick,true)//取消监听事件
    }
  },[])


  function profileHandle(){
    setShowPanel(true)
  }
  return (
 <RightWrapper>
   <div className = "btns">
      <span className='btn'>登陆</span>
      <span className='btn'>注册</span>
      <span className='btn'><IconGlobal/></span>
   </div>
    <div className="profile" onClick ={
      profileHandle
    } >
      <IconMenu/>
      <IconAvatar/> 
    </div>
    {showPanel && (
      <div className='panel'>
      <div className='top'>
        <div className='item register'>注册</div>
        <div className='item login'>登陆</div>
      </div>
      <div>
        <div className='bottom'>
          <div className='item'>出租房源</div>
          <div className='item'>开展体验</div>
          <div className='item'>帮助</div>
        </div>
      </div>
    </div>
    )}
 </RightWrapper>
 )
})

export default HeadRight
