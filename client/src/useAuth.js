import { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "./contexts/userDataContext";

function useAuth(code) {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()
  const {setCode, setRootAccessToken} = useUserContext()
 
  useEffect(() => {
    axios.post('http://localhost:3001/login', {
      code,
    }).then(res => {
      setAccessToken(res.data.accessToken)
      setRootAccessToken(res.data.accessToken)
      setRefreshToken(res.data.refreshToken)
      setExpiresIn(res.data.expiresIn)
      console.log(res.data)
      window.history.pushState({}, null, "/")
    })
      .catch(() => {
        // window.location = "/"
      })
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", {
          refreshToken,
        })
        .then(res => {
          setAccessToken(res.data.access_token)
          setRootAccessToken(res.data.access_token)
          setExpiresIn(res.data.expires_in)
        })
        .catch(() => {
          // window.location = "/"
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken;
}

export default useAuth