import React, { useEffect, useState } from 'react';
import {useDebounce }  from 'use-debounce';
import { useResultContext } from '../contexts/ResultsContextProvider.js';

import {Links} from './Links.jsx';

export const Search = () => {
  const [text, setText] = useState('Elon Musk');
  const { setSearchTerm } = useResultContext();
  const [debouncedValue]= useDebounce(text, 500);

  useEffect(() => {
    if(debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue])
  
  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
        <input 
          type="text" 
          className='sm:w-96 w-80 h-10 dark:bg-gray-200 dark:text-slate-800 border rounded-full p-3 shadow-sm outline-none hover:shadow-lg' 
          value={text} 
          placeholder="Search Goggle or type URL" 
          onChange={(e) => setText(e.target.value)}
        />
        
        {(!text && (
          <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500" onClick={() => setText('')}  >
            X
          </button>
        ))}
        
        
        <Links />
    </div>
  )
}
