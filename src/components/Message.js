import React from 'react'

const Message = ({name, msg}) => {
  return (
    <div className='flex items-center shadow-sm p-2 rounded-lg'>
         <img
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user"
          className="h-6"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{msg}</span>
    </div>
  )
}

export default Message