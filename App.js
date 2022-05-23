import React from "react";
import { useReducer } from "react";

import Datafetching from "./Dispatch/Axios";
import Data from "./Dispatch/AxiosId";
import { ComponentA } from "./Reducer/ComoponentA";

export const Component=React.createContext()
const initialState=0
const reducer=(state,action)=>{
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
function App() {

  const [ count, dispatch ] = useReducer(reducer,initialState)
  return (
    <Component.Provider 
      value={{ countState:count , countDispatch:dispatch }}>
        <div>              
          <Datafetching/>
          <br />
          <br />
          <br />
          <Data/>
          <br />
          <br />
          <br />
          Count = { count }
          <br />
          <br />
          <ComponentA />
      </div>
    </Component.Provider>
   
  );
}

export default App;
