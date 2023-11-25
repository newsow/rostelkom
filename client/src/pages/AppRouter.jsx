import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import Registration from './Registration'
import Messenger from './Messenger'
import Main from './Main'
import Navbar from './Navbar'
import Profile from './Profile'
import Baraholka from './Baraholka'
const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Navbar/>}>
              <Route path='chat' element={<Messenger/>}/>
              <Route path='profile' element={<Profile/>}/>
              <Route path='baraholka' element={<Baraholka/>}/>
              
            </Route>
            <Route path='/main' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>

        </Routes>
    </div>
  )
}

export default AppRouter