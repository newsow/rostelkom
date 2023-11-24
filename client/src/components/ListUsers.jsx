import React from 'react'
import './css/List.css'
import MainChat from './MainChat'
import ChatUser from './ChatUser'
import Message from './Message'
import Chat from './Chat'

const ListUsers = () => {
  return (
    <>
      <div className='listUsers'>
        <div className="listGroup">
          <div className='searchGroup'>
            <form>
            </form>
            <MainChat/>
            <ChatUser/>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default ListUsers