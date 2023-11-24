import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {

  const imageUrl = 'https://img.kvmeter.ru/upload/iblock/06e/06e1982866ddbbf5e67d7fb9273274b0.jpg';
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const redirectChat = (status) =>{
      if(status === 200){
          return navigate('/chat')
      }
  }
  const login = async(e) =>{
      try {
          e.preventDefault()
          const response = await axios.post('http://localhost:5000/auth/login',{
              email,
              password,
          }
          )
          localStorage.setItem('token',response.data.token) 
          redirectChat(response.status)
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
			<p className="mt-2 text-sm text-gray-600">Пожалуйста, зайдите в свой аккаунт</p>
		</div>
		
		<form className="mt-8 space-y-6" onSubmit={(e)=>login(e)}>
			<input type="hidden" name="remember" value="true" />
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
			<div className="flex items-center justify-between">
					
				
			</div>
			<div>
				<button type="submit" className="w-full flex justify-center inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Войти
                </button>
			</div>
			<p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
				<span>Нет аккаунта?</span>
				<Link to='/registration' className="text-blue-500 hover:text-blue-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
        >Зарегестрируйтесь</Link>
			</p>
		</form>
	</div>
</div>
    </div>
  )
}

export default Login