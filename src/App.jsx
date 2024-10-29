import { createContext, useEffect, useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'

import CountryPage from './pages/CountryPage/CountryPage.jsx'
import { initState, reducer } from './store/store.js'
import Header from './Components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import { API } from './api/api.js'
import './App.css'

export const MainContext = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initState);


  useEffect(() => {
    API.getAll(dispatch)
  }, [])

  return (
    <div className={state.isDarkMode ? 'App dark' : 'App'}>
      <MainContext.Provider
        value={{
          state,
          dispatch
        }}
      >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:name' element={<CountryPage />} />
        </Routes>
      </MainContext.Provider>
    </div>
  )
}

export default App
