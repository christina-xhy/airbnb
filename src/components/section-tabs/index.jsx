
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo,useState } from 'react'
import { TabsWrapper } from './style'



const SectionTabs= memo((props) => {

  const{tabNames = [],tabClick } = props 
  const [currentIndex,setCurrentIndex] = useState(0)

  function itemClickHandle(index,name){
    setCurrentIndex(index)
    tabClick(index,name)//调用并且传递通信给父组件。注意调用这个函数，在监听onclick事件点击，同时传入item。item=name
  }
  return (
   <TabsWrapper>
        {tabNames.map ((item,index)=>{
          return (
            //tab的封装，需要安装classnames 库动态生成一些class属性// active:index === currentIndex是设置绑定选中的item的index 做展示
            <div key ={index} className={classNames('item',{active:index === currentIndex})}onClick ={ e => itemClickHandle(index,item)}> 
              
              {item}
            </div>
          )
        })}
   </TabsWrapper>
  )
})

SectionTabs.propTypes = {
tabNames:PropTypes.array
}

export default SectionTabs
