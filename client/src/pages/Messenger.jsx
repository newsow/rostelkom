import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Chat from '../components/Chat'
const Messenger = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!(localStorage.getItem('token'))){
      return navigate('/')
    }
  })

  const logout = () =>{
    localStorage.removeItem('token')
    return navigate('/')
  }
  return (
    <div>
      <Chat/>
    </div>
  )
}

export default Messenger