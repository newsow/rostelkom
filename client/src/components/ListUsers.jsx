import React from 'react'
import './css/List.css'
import MainChat from './MainChat'
import ChatUser from './ChatUser'

const ListUsers = () => {
  return (
    <div className='listUsers'>
      <div className="listGroup">
        <div className='searchGroup'>
          <form>
            <input className='inputSearch' placeholder='Search...'/>
            {/* <button className='submitSearch'></button> */}
          </form>
        </div>
          <MainChat/>
          <ChatUser/>
          <ChatUser/>
          <ChatUser/>
          <ChatUser/>
          <ChatUser/>
          <ChatUser/>
          <ChatUser/>
          <ChatUser/>
          <ChatUser/>
          <ChatUser/>
          <ChatUser/>
          <ChatUser/>
        </div>
    </div>
  )
}

export default ListUsers