import { useEffect, useReducer, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { initState, reducer } from './store/store.js'
import Header from './Components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import { API } from './api/api.js'
import './App.css'
import CountryPage from './pages/CountryPage/CountryPage.jsx'

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    API.getAll(dispatch)
  }, [])

  return (
    <div className='App'>
      <Header dispatch={dispatch} />
      <Routes>
        <Route path='/' element={<Home countries={state.countries} />} />
        <Route path='/:name' element={<CountryPage dispatch={dispatch} state={state} />} />
      </Routes>
    </div>
  )
}

export default App
