import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {login, selectUser} from '../features/userSlice'
import { auth } from '../firebase'

function PrivateRoute({component: Component, ...rest}){
    const dispatch = useDispatch()
    

    const user = useSelector(selectUser)
    return(
        <Route {...rest} render={(props) => (
            user?.email !== null
              ? <Component {...props} />
              : <Redirect to='/' />
          )} />
    )
}

export default PrivateRoute
