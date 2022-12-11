import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import Rating from '@mui/material/Rating';

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
        <div className='bottom'>
        {/* 如果是0 则显示0.用？？ 来表示/｜｜ 是undefined的时候设置 */}
            <Rating name="read-only" defaultValue={itemDate.star_rating ?? 5} precision={0.5} readOnly
               sx={{fontSize:"8px",color:"#00848A" ,marginRight: "-1px"}} />
               <span className='count'>
                {itemDate.reviews_count}
               </span>
               {
                itemDate.bottom_info && <span className='extra'>-{itemDate.bottom_info?.content}</span>
               
               }
        </div>
    </div> 
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemDate:PropTypes.object
}

export default RoomItem