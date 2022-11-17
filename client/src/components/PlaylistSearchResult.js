import play from "../assets/playbutton.png"
import "./PlaylistSearchResult.css"
import {useState} from "react";
import { addToQueue, removeFromQueue } from "../ApiService/ApiService"

function PlaylistSearchResult({playlist, setQueue}) {

  const [clicked, setClicked] = useState(false)

  function handleClick() {
    setClicked(!clicked)
    addToQueue({
      name: playlist.name,
      image: playlist.img,
      owner: playlist.owner
    })
  }

  function handleDelete() {
    removeFromQueue(playlist.name)
    setQueue(prev => prev.filter(el => el.name !== playlist.name))
  }

  let heart;
  if(clicked === true){
    heart = "❤️"
  } else {
    heart="🖤"
  }

  return (
    
      <div className="container">
        <img className="play-button" src={play} alt="play button" />
        <img className="playlist-pic" src={playlist.img} alt="playlist cover" />
        <div className="info">
          <h3>{playlist.name}</h3>
          <h5>Shared by: {playlist.owner}</h5>
        </div>
        <div className="button-container">
          <p className="heart" onClick={handleClick}>{heart}</p>
          <p className="trash" onClick={handleDelete}>🗑</p>
        </div>
  
  
      </div>
    
  )
}

export default PlaylistSearchResult