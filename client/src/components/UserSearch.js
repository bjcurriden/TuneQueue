import { useState, useEffect } from 'react';
import { useUserContext } from '../contexts/userDataContext';
import UserCard from "./UserCard";
import "./UserSearch.css"


function UserSearch() {
  const { rootAccessToken, spotifyApi, isSubmitted, setIsSubmitted } = useUserContext()
  const [inputData, setInputData] = useState("")
  const [user, setUser] = useState(null);
  // const{ isSubmitted, setIsSubmitted } = useState(false)
  spotifyApi.setAccessToken(rootAccessToken)

  function handleChange(e) {
    setInputData(e.target.value)
    if (e.target.value === "") {
      setIsSubmitted(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitted(true)
    spotifyApi.getUser(inputData).then(res => setUser(res.body)).catch(e => console.log('error searching user: ', e.message))
    setInputData('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Username" value={inputData} onChange={handleChange} />
      </form>
      <div className="box">
        <UserCard user={user} submitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
      </div>
    </div>
  )
}


export default UserSearch