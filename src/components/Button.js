import React from 'react';

const Button =({name})=>{
    return <div>
        <button className='py-1 px-3 m-2 rounded-lg bg-gray-200 font-semibold'>{name}</button>
    </div>
}
export default Button;