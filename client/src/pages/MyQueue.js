import { getQueue } from "../ApiService/ApiService";
import { useState, useEffect } from "react";
import PlaylistSearchResult from "../components/PlaylistSearchResult";
import "./MyQueue.css";

function MyQueue() {
  const [queue, setQueue] = useState([]);

  async function loadQueue() {
    try {
      const arr = await getQueue();
      return arr
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadQueue().then((result) => setQueue(result));
  }, [])

  return (
    <>
      <div className="page">
        <h1>My Queue</h1>
        <div className="playlist-container">
          {queue.map(playlist => <PlaylistSearchResult playlist={playlist} setQueue={setQueue}/>)}
          
        </div>
      </div>

    </>
  )
}

export default MyQueue