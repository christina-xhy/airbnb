
import React, { memo,useEffect,useState ,useRef} from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  //定义内部的状态，showRight设置右侧按钮
  const  [showRight,setShowRight] = useState(false)
  const [posIndex,setPosIndex] = useState(0)//记录每次item距离左侧scroll的距离
  const totalDistanceRef= useRef()//1.
  //组件渲染完毕，判断是否显示右侧的按钮
  const scrollContentRef = useRef()
  useEffect(()=>{
    const scrollWidth = scrollContentRef.current.scrollWidth //可滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth //当前文档占的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance//2.
    setShowRight(totalDistance > 0 ) //右侧按钮显示的判断

  },[props.children])//依赖children的数据

  function rightClickHandle(){
    const newIndex = posIndex + 1
    const newEl = scrollContentRef.current.children[newIndex]//代表点击选中的元素
    const newOffsetLeft = newEl.offsetLeft//设置这个元素距离最左边边框offset的距离
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    //是否继续显示右侧按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)//3.
  }

  return (
   <ViewWrapper>
    <button>左边按钮</button>
    {showRight && <button onClick={rightClickHandle}>右边按钮</button>}
    <div className='scroll-content' ref={scrollContentRef}>
      {props.children}
    </div>
   </ViewWrapper>
  )
})



export default ScrollView