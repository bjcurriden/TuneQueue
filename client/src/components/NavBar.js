import "./NavBar.css"
import { Link } from "react-router-dom"


function NavBar({code, setPage}) {
  return (
    <div className="nav-container">
      <div className="top">
        <Link to="/" >My Queue</Link>
        <Link to="/myplaylists" onClick={setPage("bjcurriden")}>My Playlists</Link>
        <Link to="/myfriends">My Friends</Link>
      </div>
      {/* <div className="bottom">
        <Link to="/login">Logout</Link>
      </div> */}
    </div>
  )
}

export default NavBar