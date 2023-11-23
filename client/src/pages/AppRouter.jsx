import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default AppRouter