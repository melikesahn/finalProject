import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
     
    if(loading){
        return <div className='text-center mt-20'>
            <div class="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-28 h-28 border-8 text-cyan-800 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-cyan-800 rounded-full">
                <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className="animate-ping">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
                </svg>
            </div>
        </div>
           </div>
    }
    if(user){
        return children;
    }

  return (
    <Navigate to="/login" state={{from:location}} replace></Navigate>
  )
}

export default PrivateRoute
