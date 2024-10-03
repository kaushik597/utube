import React from 'react'
import Button from "./Button"

const Buttonslist = () => {
  const list=["All","N. T. Rama Rao Jr", "Music", "APIs", "Live", "Podcasts", "Computer Programming", "Romantic comedies","Comedy", "test"]
  return (
    <div className='flex'>
      {
    list.map(feature=><Button name={feature} />)
  }
    </div>
  )
}

export default Buttonslist