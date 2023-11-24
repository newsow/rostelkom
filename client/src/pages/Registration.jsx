import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const Registration = () => {
    const imageUrl = 'https://img.kvmeter.ru/upload/iblock/06e/06e1982866ddbbf5e67d7fb9273274b0.jpg';
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [secretKey,setSecretKey] = useState('')
    const {user,updateUser} = useContext(UserContext)
    const navigate = useNavigate()
    const redirectChat = (status,id) =>{
      if(status === 200){
          updateUser(id)
          return navigate('/chat')
      }
    } 
    const registration = async(e) =>{
        try {
            e.preventDefault()
            const response = await axios.post('http://localhost:5000/auth/registration',{
                
                first_name:firstName,
                last_name:lastName,
                email,
                password,
                secretKey
            }
            )
            localStorage.setItem('token',response.data.token) 
            redirectChat(response.status,response.data.id)
        } catch (error) {
            console.log(error)
        }

    }
    return (
      <div>
  
   <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
      style={{backgroundImage: `url(${imageUrl})`}}>
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
          <div className="text-center">
              <h2 className="mt-6 text-4xl font-bold text-gray-900">
                  Ростелеком.Ключ
              </h2>
              <p className="mt-2 text-sm text-gray-600">Пожалуйста, зарегестрируйтесь</p>
          </div>
          
          <form className="mt-8 space-y-6"  onSubmit={(e) => registration(e)}>
              <input type="hidden" name="remember" value="true" />
              <div className="relative">
                  <label className="text-sm font-bold text-gray-700 tracking-wide"
                    for="FirstName">
                    Имя</label>
                  <input className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Введите свое имя"
                    id="FirstName"
                    type="text"
                    name="FirstName"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    />
              </div>
              <div className="relative">
                  <label className="text-sm font-bold text-gray-700 tracking-wide"
                    for="LastName">
                    Фамилия</label>
                  <input className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Введите свою фамилию"
                    id="LastName"
                    type="text"
                    name="LastName"
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    />
              </div>
              <div className="relative">
                  <label className="text-sm font-bold text-gray-700 tracking-wide"
                    for="Email">
                    Email</label>
                  <input className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Введите email"
                    id="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
              </div>
              <div className="mt-8 content-center">
                  <label className="text-sm font-bold text-gray-700 tracking-wide"
          for="Password">
                      Пароль
                  </label>
                  <input className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"  placeholder="Введите пароль"
                    type="password"
                    id="Password"
                    name="password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    
              </div>
              <div className="relative">
                  <label className="text-sm font-bold text-gray-700 tracking-wide"
                    for="Address">
                    Адресс</label>
                  <input className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Введите ваш адресс"
                    id="Address"
                    type="text"
                    name="Address"
                    value={secretKey}
                    onChange={(e)=>setSecretKey(e.target.value)}
                    />


              </div>
              <div className="flex items-center justify-between">
                      
                  
              </div>
              <div>
                  <button type="submit" className="w-full flex justify-center inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                      Войти
                  </button>
              </div>
              <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Уже зарегестрированы?</span>
                  <Link to='/login' className="text-blue-500 hover:text-blue-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
          >Войдите</Link>
              </p>
          </form>
      </div>
  </div>
      </div>
    )
}

export default Registration