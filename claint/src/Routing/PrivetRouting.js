import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { myContxt } from '../contextApi/AuthContext';

const PrivetRouting = ({children}) => {
    const {user,loadding} = useContext(myContxt)
    const location = useLocation()
   
    if(loadding){
        return <div className="w-2/12 m-auto mt-10 bg-slate-300 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    
    if(!user?.uid){
       return  <Navigate to = '/login' state={{from: location}} replace></Navigate>
    }
    
    return children
   
};

export default PrivetRouting;