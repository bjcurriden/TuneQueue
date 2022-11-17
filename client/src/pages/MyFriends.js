import { getFriends } from "../ApiService/ApiService";
import { useState, useEffect } from "react";
import FriendCard from "../components/FriendCard";
import "./MyFriends.css"

function MyFriends() {
  const [friends, setFriends] = useState([]);

  async function loadFriends() {
    try {
      const arr = await getFriends();
      return arr
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadFriends().then((result) => setFriends(result))
  }, [])

  return (
    <>
    <div className="page">
      <h1>My Friends</h1>
      <div className="friends-container">
        {friends.map(friend => <FriendCard friend={friend} />)}
      </div>
    </div>

  </>
  )
}

export default MyFriends