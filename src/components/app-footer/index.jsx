import { FooterWrapper } from './style'
import React, { memo } from 'react'
import footerData from "@/assets/data/footer.json"

const AppFooter
 = memo((props) => {
  return (
   <FooterWrapper>
      <div className='wrapper'>
        <div className='service'>
          {
            footerData.map( item => {
              return (
                <div className='item'key ={item.name}>
                  <div className='name' key={item.name}>
                    <div className='list'>
                      {
                        item.list.map((item)=>{
                            return <div className='item' key={item}>{item}</div>
                        })
                      }
                    </div>
                  </div>
                </div>
              )
            })

            }

          
        </div>
      </div>
   </FooterWrapper>
  )
})



export default AppFooter
