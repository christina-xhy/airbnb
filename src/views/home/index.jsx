
import React, { memo, useEffect, useState } from 'react'
import TNRequest from '@/services'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'

const Home = memo((props) => {const [highScore,setHighScore] = useState({})
  //发送网络请求的代码
  useEffect(()=>{
    TNRequest.get({url:"/home/highscore"}).then(res => {
      console.log(res)
      setHighScore(res)
    })
  },[])
  return (
    <HomeWrapper>
      <HomeBanner/>
       <div>
      <h2>{highScore.title}</h2>
      <h4>{highScore.subtitle}</h4>
      <ul>
        {// ？. 可选链     list有值再显示
          highScore?.list?.map((item)=>{
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>   
    </div>
    </HomeWrapper>
   
  )
})



export default Home