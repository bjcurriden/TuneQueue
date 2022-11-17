import "./FriendCard.css"
import { useUserContext } from "../contexts/userDataContext";
import { Link } from "react-router-dom"



function FriendCard({ friend }) {
  const { setSelectedUser } = useUserContext()


  function handleFriend() {
    setSelectedUser(friend)
  }

  return (

    <Link to="/userPage" className="friend-container" onClick={handleFriend}>
      <img className="friend-pic" src={friend.image} alt="profile" />
      <div className="username">
        <h2>{friend.name}</h2>
      </div>
      
    </Link>

  )
}

export default FriendCard