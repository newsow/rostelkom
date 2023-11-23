import React from 'react'
import './css/MainChat.css'

const MainChat = () => {
  return (
    <div className='mainGroup'>
      <img className='logoMainGroup' src='https://apktake.com/storage/967c2ae04b169f07e7fa8fdfd110551e/5f2afee86bb4eApkTake.com.png'></img>
      <div className='textMainGroup'>
        <a className='nameMainGroup'>mainGroup</a>
        {/* <a className='lastMessage'>lastMessage</a> */}
      </div>
    </div>
  )
}

export default MainChat