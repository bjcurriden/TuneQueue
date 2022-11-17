import MyPlaylists from './MyPlaylists'
import { useUserContext } from '../contexts/userDataContext';

import "./UserPage.css"
import { addFriend, removeFriend } from '../ApiService/ApiService.js';

function UserPage({ page, user }) {
  const{ selectedUser } = useUserContext();
  const source = selectedUser ? selectedUser.images : null;
  const url = source?.length ? source[0].url : require('../assets/placeholder.jpeg')

  function handleFriendAdd () {
    addFriend({
      name: selectedUser.display_name,
      image: url,
      id: selectedUser.id,
    })
  }

  function handleFriendRemove () {
    removeFriend(selectedUser.name)
  }

  console.log("selectedUser",selectedUser)
  return (
    <div className="page-container">
      <h1 className="user-name">{selectedUser.display_name || selectedUser.name}</h1>
      <img className="user-image" src={ selectedUser.image || url} />
      <div className="buttons">
      <button onClick={handleFriendAdd}>Add Friend</button>
      <button onClick={handleFriendRemove}>Remove Friend</button>
      </div>
      <div className="playlists">
        <MyPlaylists page={selectedUser} />
      </div>
    </div>
  )
}

export default UserPage