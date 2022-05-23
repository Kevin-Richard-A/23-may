import React from 'react'
import { Component } from '../App'
import { useContext } from 'react'
import {ComponentB} from './ComponentB';

export const ComponentA = () => {
    const countContext=useContext(Component)
  return (
    <div>
        ComponentA
         <button onClick={ () => countContext.countDispatch("increment")}>
            increment</button>
        <button onClick={ () => countContext.countDispatch("decrement")}>
            decrement</button>
        <button onClick={ () => countContext.countDispatch("reset")}>
            reset</button>
        <ComponentB />
    </div>
  )
}