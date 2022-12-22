import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { EntireWrapper } from './style'

const Entire = memo((props) => {
  return (
   <EntireWrapper>
    <div className='filter'>filter</div>
    <div className='rooms'>rooms</div>
    <div className='pagination'>pagination</div>
   </EntireWrapper>
  )
})

Entire.propTypes = {}

export default Entire
