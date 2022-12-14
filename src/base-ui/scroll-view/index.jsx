
import IconArrowLeft from '@/assets/img/svg/icon_arrow_left'
import IconArrowRight from '@/assets/img/svg/icon_arrow_right'
import React, { memo,useEffect,useState ,useRef} from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  const [showLeft,setShowLeft] = useState(false)//左1 
  const  [showRight,setShowRight] = useState(false)//一 、定义内部的状态，showRight设置右侧按钮
  const [posIndex,setPosIndex] = useState(0)//A 记录每次选中的item的index=0的元素
  const totalDistanceRef= useRef()//1.用ref scroll边框位置获取这个元素
  //组件渲染完毕，判断是否显示右侧的按钮
  const scrollContentRef = useRef()
  useEffect(()=>{
    const scrollWidth = scrollContentRef.current.scrollWidth //可滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth //当前文档占的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance//2.用ref来记录distance的距离
    setShowRight(totalDistance > 0 ) //二、右侧按钮c显示的判断 
  },[props.children])//依赖children的数据

  function controlClickHandle(isRight){
    const newIndex = isRight ? posIndex + 1 : posIndex - 1 // 拿到新的偏移的item的index索引，因为数组可以用number去访问这个元素
    const newEl = scrollContentRef.current.children[newIndex] // 通过newIndex获取新的元素
    const newOffsetLeft = newEl.offsetLeft//设置这个元素距离最左边边框offset的距离
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`//设置滚动的距离
    setPosIndex(newIndex)
    //是否继续显示左和右侧按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)//3.用最新的distance做比较
    setShowLeft(newOffsetLeft > 0 ) // 都是用newOffLeft做比较
  }

  return (
   <ViewWrapper>
    { showLeft && (
      <div className = 'control left' onClick={e => controlClickHandle(false)}>
      <IconArrowLeft/>
      </div>
    )}
    { showRight && (
      <div className = 'control right' onClick={e => controlClickHandle(true)}>
      <IconArrowRight/>
      </div>
    )}
    <div className='scroll'>
      <div className='scroll-content' ref={scrollContentRef}>
        {/* 使用ref设置dom来获取元素 */}
      {props.children} 
      {/* props.children 展示tab的内容，并且作为父组件使用*/}
      </div>
    </div>
   
   </ViewWrapper>
  )
})



export default ScrollView