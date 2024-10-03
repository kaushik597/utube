import React from 'react'

const Videocard = ({info}) => {
  const {snippet, statistics}= info
  const {thumbnails, title, channelTitle}= snippet
  
  return (
    <div className='w-48 p-2 shadow-lg m-2 '>
      <img src={thumbnails.medium.url} alt="thumbnail" className='rounded-lg'></img>
      <h2 className='font-semibold py-2'>{title}</h2>
      <h4>{channelTitle}</h4>
      <p>{statistics.viewCount} Views</p>
      <p></p>
    </div>
  )
}

export default Videocard