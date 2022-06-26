import React from 'react';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from  'react-loader-spinner';

export const Loading = () => {
  return (
    <div className='flex justify-center items-center text-gray-900'>
        <Loader type="Puff" color="#00bfff" height={50} width={80} />
        
    </div>
  )
}
