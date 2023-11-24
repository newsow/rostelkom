import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

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
      <button onClick={logout}>
        Выйти
      </button>
    </div>
  )
}

export default Messenger