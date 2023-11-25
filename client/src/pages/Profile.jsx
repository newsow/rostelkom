import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [user,setUser] = useState([])
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get('http://localhost:5000/auth/user',{
      headers:{
        'Authorization': `Bearer ${token}`
      }}).then(response=>{
        setUser(response.data)
      },[])
  })
  if(!token){
    return navigate('/main')
  }


  return (

  <div className='mx-auto'>
    <div className='p-12 text-center text-2xl'>
      <h1 className='text-2xl'>Личный кабинет</h1>
      <div className='my-52'>
          <img src="https://mywebicons.ru/i/png/e79fb99288e6e8ebcf0579d19497b2f5.png" className='w-44 mx-auto' alt=""/>
          <h2>Имя: <span>{user.first_name}</span></h2>
          <h2>Фамилия: <span>{user.last_name}</span></h2>
          <h2>email: <span> {user.email}</span></h2>
      </div>
    </div>
  </div>
  )
}

export default Profile