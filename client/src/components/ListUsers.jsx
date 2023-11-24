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
        <div className="searchGroup">
            <label for="Search" className="sr-only"> Search </label>

          <input
            type="text"
            id="Search"
            placeholder="Поиск..."
            class="w-full rounded-md border-blue-500 py-2.5 pe-10 shadow-sm sm:text-sm p-3 border-none"
          />
        </div>
          <div className="listGroup">
            <div className='searchGroup'>
              <form>
              </form>
            </div>
          </div>
      </div>
      
    </>
    
  )
}

export default ListUsers