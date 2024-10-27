import { useEffect, useReducer, useState } from 'react'

import { initState, reducer } from './store/store.js'
import { API } from './api/api.js'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    API.getAll(dispatch)
  }, [])


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home countries={state.countries} />} />
      </Routes>
    </div>
  )
}

export default App
