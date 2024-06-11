"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./FriendCard.css");
var userDataContext_1 = require("../contexts/userDataContext");
var react_router_dom_1 = require("react-router-dom");
function FriendCard(_a) {
    var friend = _a.friend;
    var setSelectedUser = (0, userDataContext_1.useUserContext)().setSelectedUser;
    function handleFriend() {
        setSelectedUser(friend);
    }
    return (<react_router_dom_1.Link to="/userPage" className="friend-container" onClick={handleFriend}>
      <img className="friend-pic" src={friend.image} alt="profile"/>
      <div className="username">
        <h2>{friend.name}</h2>
      </div>
      
    </react_router_dom_1.Link>);
}
exports.default = FriendCard;
