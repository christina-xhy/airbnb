import PropTypes from 'prop-types'
import React, { memo, useRef ,useState} from 'react'
import { ItemWrapper } from './style'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/img/svg/icon_arrow_left';
import IconArrowRight from '@/assets/img/svg/icon_arrow_right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  //把Item设置为动态的数值。如果不传数据则设置一个默认值为25%
  const {itemData,itemWidth = "25%" } = props
  const [selectIndex,setSelectIndex] = useState(0)
  const sliderRef = useRef()

  function controlClickHandle(isRight = true ){
    //1. 上一个面板下一个面板 绑定在这个组件上则调用next（）/prev（）
    isRight ? sliderRef.current.next() : sliderRef.current.prev()

    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length -1
    if(newIndex > length - 1 ) newIndex = 0
    setSelectIndex(newIndex)

  }
  const pictureElement = (
    <div className='cover'> 
    <img src={itemData.picture_url} alt='' />  
    </div>
  )
  const sliderElement = (
    <div className='slider'>
    <div className='control'>
      <div className='btn left' onClick = {e => controlClickHandle(false)}>
        <IconArrowLeft width = '25' height ='25'/>
      </div>
      <div className='btn right' onClick = {e => controlClickHandle(true)}>
        <IconArrowRight width = '25' height = '25'/>
      </div>
    </div>
    <div className='indicator'>
      <Indicator selectIndex = {selectIndex}>
        {
         itemData.picture_urls?.map((item,index)=>{
            return(
              <div className='item' key={item}>
                <span className={classNames("dot",{active: selectIndex === index })} ></span>
              </div>
            )
         })
        }
      </Indicator>
    </div>
    <Carousel dots = {false} ref ={sliderRef}>
      {
        itemData?.picture_urls?.map(item =>{
          return(
            <div className='cover' key={item}> 
              <img src={item} alt=''/>
            </div>
          )
        })
      }
    </Carousel>
  </div>
  )

  return (
    <ItemWrapper verifyColor ={itemData?.verify_info?.text_color || "#39576a"}
    itemWidth = {itemWidth}
    >
      {/* 动态传入数据设置itemWidth，需要进入section-rooms 搭配设置 */}

      <div className='inner'>
       {!itemData.picture_urls ? pictureElement : sliderElement}
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