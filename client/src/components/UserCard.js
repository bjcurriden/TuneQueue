import "./UserCard.css";
import { Link } from "react-router-dom"
import { useUserContext } from "../contexts/userDataContext";


function UserCard({ user }) {
  const { isSubmitted, setIsSubmitted } = useUserContext()
  console.log("userCard user: ", user);
  const source = user ? user.images : null;
  const url = source?.length ? source[0].url : require('../assets/placeholder.jpeg')

  const{ setSelectedUser } = useUserContext();


  function handleClick () {
    setSelectedUser(user)
    setIsSubmitted(false)
  }
  return isSubmitted ? (
    <Link onClick={handleClick} className="user-container" to="/userPage" >

      {user ?
        <>
          <img src={url} alt="profile" />
          <div className="username">
            <h2>{user ? user.display_name : 'no user found'}</h2>
          </div>
        </>
        :
        <h3>no user found</h3>}
    
    </Link>
  ) : ''
}

export default UserCard