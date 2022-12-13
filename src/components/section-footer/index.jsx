import IconMoreArrow from '@/assets/img/svg/icon_more_arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const { name } = props
  let showMessage = '显示全部'  
  if(name){
    showMessage = `显示更多${name}房源`
  }


  return (
    <FooterWrapper color = { name ? "pink" : "#000"}>
        <div className='info'>
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