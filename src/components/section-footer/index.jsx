import IconMoreArrow from '@/assets/img/svg/icon_more_arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const { name } = props
  let showMessage = '显示全部'  
  if(name){
    showMessage = `显示更多${name}房源`
  }
//事件处理，跳转详情页，路由的跳转
  const navigate = useNavigate()
  function moreClickHandle(){
    navigate('/entire')
  }
  return (
    <FooterWrapper color = { name ? "pink" : "#000"}>
        <div className='info' onClick ={moreClickHandle}>
          <span className='text'>{showMessage}</span>
          <IconMoreArrow/>
        </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
 name: PropTypes.string
}

export default SectionFooter