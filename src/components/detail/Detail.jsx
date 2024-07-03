import React from 'react'
import "./detail.css"
import { auth, db } from '../../lib/firebase'
import { useChatStore } from '../../lib/chatStore'
import { useUserStore } from '../../lib/userStore'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Detail = () => {

  const { currentUser } = useUserStore()
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } = useChatStore()

  const handleBlock = async () => {
    if (!user) return;
    const userDocRef = doc(db, "users", currentUser.id)
    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id)
      })
      changeBlock()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='detail' >
      <div className="user">
        <img src={isCurrentUserBlocked ? "./avatar.png" : user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit, amet </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://i.etsystatic.com/38684853/r/il/47eb1f/4517429245/il_570xN.4517429245_srg4.jpg" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" className='icon' alt="" />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://i.etsystatic.com/38684853/r/il/47eb1f/4517429245/il_570xN.4517429245_srg4.jpg" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" className='icon' alt="" />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://i.etsystatic.com/38684853/r/il/47eb1f/4517429245/il_570xN.4517429245_srg4.jpg" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" className='icon' alt="" />
            </div>

          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button className='blockbutton' onClick={handleBlock} disabled={isCurrentUserBlocked} >{isCurrentUserBlocked ? "you are blocked" : isReceiverBlocked ? `User Blocked ` : `Block User `}</button>
        <button className="logout" onClick={() => auth.signOut()} >Logout</button>
      </div>
    </div>
  )
}

export default Detail