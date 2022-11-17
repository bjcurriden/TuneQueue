import React from 'react';
import { useState, useEffect } from 'react';
import PlaylistSearchResult from '../components/PlaylistSearchResult';
import "./MyPlaylist.css"
import { useUserContext } from '../contexts/userDataContext';
const placeholder = require('../assets/placeholder.jpeg')



function MyPlaylists({code, page}) {
  const [playlists, setPlaylists] = useState([])
  const { rootAccessToken, spotifyApi } = useUserContext()
  spotifyApi.setAccessToken(rootAccessToken)
  console.log("rootAccessToken: ", rootAccessToken)
  
  let userId = page.id || "bjcurriden"
  console.log("this should be the page", page)
  
  useEffect(() => {
    if (rootAccessToken) {
      spotifyApi.getUserPlaylists(userId).then(res => {
        console.log(res)
        setPlaylists(
          res.body.items.map(playlist => {
            return {
              name: playlist.name,
              uri: playlist.uri,
              img: playlist.images[0].url ? playlist.images[0].url : placeholder,
              owner: playlist.owner.display_name
            } 
            
          }))
      })
    }
  }, [rootAccessToken, page])



  return rootAccessToken ? (
    <>
      <div className="page">
        <h1>My Playlists</h1>
        <div className="playlist-container">
          {playlists.map(playlist => (
            <PlaylistSearchResult playlist={playlist} key={playlist.uri} />
          ))}
        </div>

      </div>
    </>
  ) : <h1>No User</h1>
}

export default MyPlaylists