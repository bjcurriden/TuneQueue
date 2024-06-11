"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./UserCard.css");
var react_router_dom_1 = require("react-router-dom");
var userDataContext_1 = require("../contexts/userDataContext");
function UserCard(_a) {
    var user = _a.user;
    var _b = (0, userDataContext_1.useUserContext)(), isSubmitted = _b.isSubmitted, setIsSubmitted = _b.setIsSubmitted;
    console.log("userCard user: ", user);
    var source = user ? user.images : null;
    var url = (source === null || source === void 0 ? void 0 : source.length) ? source[0].url : require('../assets/placeholder.jpeg');
    var setSelectedUser = (0, userDataContext_1.useUserContext)().setSelectedUser;
    function handleClick() {
        setSelectedUser(user);
        setIsSubmitted(false);
    }
    return isSubmitted ? (<react_router_dom_1.Link onClick={handleClick} className="user-container" to="/userPage">

      {user ?
            <>
          <img src={url} alt="profile"/>
          <div className="username">
            <h2>{user ? user.display_name : 'no user found'}</h2>
          </div>
        </>
            :
                <h3>no user found</h3>}
    
    </react_router_dom_1.Link>) : '';
}
exports.default = UserCard;
