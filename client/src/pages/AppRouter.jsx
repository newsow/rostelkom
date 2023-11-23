import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import Registration from './Registration'
const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
        </Routes>
    </div>
  )
}

export default AppRouter