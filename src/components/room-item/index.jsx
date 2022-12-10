import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
  const {itemDate} = props
  return (
    <ItemWrapper verifyColor ={itemDate?.verify_info?.text_color || "#39576a"} >
      <div className='inner'>
        <div className='cover'>
          <img src={itemDate.picture_url} alt='' /> 
          {/* img直接展示图片 */}
        </div>
        <div className='desc'>
          {itemDate.verify_info.messages.join('.')}
          {/* 展示数组，并且用 - 拼接样式 */}
        </div>
        <div className='name'>{itemDate.name}</div>
        <div className='price'>¥{itemDate.price}/晚</div>
      </div>
      
      
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemDate:PropTypes.object
}

export default RoomItem