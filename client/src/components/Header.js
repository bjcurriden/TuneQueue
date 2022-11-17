import "./Header.css"
import UserSearch from "./UserSearch";

function Header({code, page, setPage }) {
  return (
    <div className="head">
      <h1>TuneQueue</h1>
      <UserSearch code={code} page={page} setPage={setPage}/>
    </div>
  )
}

export default Header