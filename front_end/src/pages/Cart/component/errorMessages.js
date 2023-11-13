import React, { useEffect } from 'react'

function Messages({item,must,setMust}) {

    useEffect(() => {
        
        const timeoutId = setTimeout(() => {
          setMust([]);  
        }, 5000);
    
        return () => {
          clearTimeout(timeoutId);  
        };
      }, [must,setMust]);  
  return (
    <div className="fade m-2 alert alert-danger show bg-transparent border border-4 p-3 border-danger" role="alert">
    
    <div className='fs-5 px-1 mx-1'>
      {item.message}
    </div>
  </div>
  )
}

export default Messages