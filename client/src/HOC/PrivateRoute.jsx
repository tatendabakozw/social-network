import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useStateValue } from '../Context/StateProvider'

function PrivateRoute({component: Component, ...rest}) {
    const [{user}] = useStateValue()
    return (
        <Route {...rest} render={(props) => (
            user ? (<Component {...props} />)
              : (<Redirect to='/' />)
          )} />
    )
}

export default PrivateRoute
