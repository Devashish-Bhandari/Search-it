import React from 'react'


export const Footer = () => {
  const d= new Date();
  let year= d.getFullYear();

  return (
    <div className='text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200'>
        <h1>@{year} Search It.Inc</h1>
    </div>
  )
}
