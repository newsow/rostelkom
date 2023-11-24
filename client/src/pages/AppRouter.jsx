import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import Registration from './Registration'
import Messenger from './Messenger'
import Main from './Main'
const AppRouter = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/chat' element={<Messenger/>}/>
        </Routes>
    </div>
  )
}

export default AppRouter