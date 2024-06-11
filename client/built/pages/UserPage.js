"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MyPlaylists_1 = __importDefault(require("./MyPlaylists"));
var userDataContext_1 = require("../contexts/userDataContext");
require("./UserPage.css");
var ApiService_js_1 = require("../ApiService/ApiService.js");
function UserPage(_a) {
    var page = _a.page, user = _a.user;
    var selectedUser = (0, userDataContext_1.useUserContext)().selectedUser;
    var source = selectedUser ? selectedUser.images : null;
    var url = (source === null || source === void 0 ? void 0 : source.length) ? source[0].url : require('../assets/placeholder.jpeg');
    function handleFriendAdd() {
        (0, ApiService_js_1.addFriend)({
            name: selectedUser.display_name,
            image: url,
            id: selectedUser.id,
        });
    }
    function handleFriendRemove() {
        (0, ApiService_js_1.removeFriend)(selectedUser.name);
    }
    console.log("selectedUser", selectedUser);
    return (<div className="page-container">
      <h1 className="user-name">{selectedUser.display_name || selectedUser.name}</h1>
      <img className="user-image" src={selectedUser.image || url}/>
      <div className="buttons">
      <button onClick={handleFriendAdd}>Add Friend</button>
      <button onClick={handleFriendRemove}>Remove Friend</button>
      </div>
      <div className="playlists">
        <MyPlaylists_1.default page={selectedUser}/>
      </div>
    </div>);
}
exports.default = UserPage;
