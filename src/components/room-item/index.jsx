import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import Rating from '@mui/material/Rating';

const RoomItem = memo((props) => {
  //把Item设置为动态的数值。如果不传数据则设置一个默认值为25%
  const {itemData,itemWidth = "25%" } = props
  debugger
  return (
    <ItemWrapper verifyColor ={itemData?.verify_info?.text_color || "#39576a"}
    itemWidth = {itemWidth}
    >
      {/* 动态传入数据设置itemWidth，需要进入section-rooms 搭配设置 */}

      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt='' /> 
         
          {/* img直接展示图片 */}
        </div>
        <div className='desc'>
          {itemData.verify_info.messages.join('.')}
          {/* 展示数组，并且用 - 拼接样式 */}
        </div>
            <div className='name'>{itemData.name}</div>
            <div className='price'>¥{itemData.price}/晚</div>
        <div className='bottom'>
          
        {/* 1.如果是0 则显示0.用？？ 来表示/ 2. 当值为undefined的时候 用 ｜｜ 设置  */}
        {/* Rating 是采用的material design集成设置的样式/也可以用ant design 集成*/}
            <Rating name="read-only" defaultValue={itemData.star_rating ?? 5} precision={0.5} readOnly
               sx={{fontSize:"8px",color:"#00848A" ,marginRight: "-1px"}} />
               <span className='count'>
                {itemData.reviews_count}
               </span>
               {
                itemData.bottom_info && <span className='extra'>-{itemData.bottom_info?.content}</span>
               
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