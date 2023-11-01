import React, { useContext } from 'react';
import { AuthProvider } from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthProvider)
    const location = useLocation()
    
    if(loading) {
        return <span className="loading loading-spinner loading-lg"></span>   
    }

    if(user?.email){
        return children
    }
    
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRouter;