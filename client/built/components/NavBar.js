"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./NavBar.css");
var react_router_dom_1 = require("react-router-dom");
function NavBar(_a) {
    var code = _a.code, setPage = _a.setPage;
    return (<div className="nav-container">
      <div className="top">
        <react_router_dom_1.Link to="/">My Queue</react_router_dom_1.Link>
        <react_router_dom_1.Link to="/myplaylists" onClick={setPage("bjcurriden")}>My Playlists</react_router_dom_1.Link>
        <react_router_dom_1.Link to="/myfriends">My Friends</react_router_dom_1.Link>
      </div>
      {/* <div className="bottom">
          <Link to="/login">Logout</Link>
        </div> */}
    </div>);
}
exports.default = NavBar;
