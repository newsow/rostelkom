import React from 'react'
import "./css/Message.css"

const Message = ({message}) => {
  const notYourStyle = {
    div1:"flex items-end",
  div2:"flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start",
  message:"px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600",
  img:"w-6 h-6 rounded-full order-1"
} 
const yourStyle = {
  div1:"flex items-end justify-end",
  div2:"flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end",
  message:"px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ",
  img:"w-6 h-6 rounded-full order-2"
}
  
  return (
    <div class="flex items-end">
    <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
       <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Can be verified on any platform using docker</span></div>
    </div>
    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1"></img>
  </div>
  )
}

export default Message