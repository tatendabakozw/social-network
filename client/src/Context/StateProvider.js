import {createContext, useContext, useReducer} from 'react'

//the data layer
export const StateContext = createContext()

//the provider
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//when ever a value is being changed in state useStateValue is called
export const useStateValue = () => useContext(StateContext)