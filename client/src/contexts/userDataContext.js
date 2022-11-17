import {createContext, useContext, useState, useEffect} from 'react'
import SpotifyWebApi from "spotify-web-api-node";

const UserContext = createContext(null)

let spotifyApi 

spotifyApi = new SpotifyWebApi({
  clientId: "4fcf236dbb744e89be617d84a23a2396"
})



const authCode = new URLSearchParams(window.location.search).get('code')

export default function UserDataContext(props) {
  const [userToken, setUserToken] = useState()
  const [rootAccessToken, setRootAccessToken] = useState()
  const [selectedUser , setSelectedUser] = useState()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { children } = props;
  

  useEffect(() => {

    if (!rootAccessToken) return
    spotifyApi.setAccessToken(rootAccessToken)
  }, [rootAccessToken])

  spotifyApi.setAccessToken(rootAccessToken)
  
  useEffect(() => {
    setUserToken(authCode)
  }, [])

  return (
<UserContext.Provider value= {{userToken, setUserToken, rootAccessToken, setRootAccessToken, spotifyApi, selectedUser , setSelectedUser, isSubmitted, setIsSubmitted}}>
  {children}
</UserContext.Provider>)
}

export const useUserContext = () => useContext(UserContext)