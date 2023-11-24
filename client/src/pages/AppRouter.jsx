import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import Registration from './Registration'
import Messenger from './Messenger'
const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/chat' element={<Messenger/>}/>
        </Routes>
    </div>
  )
}

export default AppRouter