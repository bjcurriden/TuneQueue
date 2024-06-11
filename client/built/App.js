"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap/dist/css/bootstrap.min.css");
require("./App.css");
var Login_1 = __importDefault(require("./components/Login"));
var NavBar_1 = __importDefault(require("./components/NavBar"));
var Header_1 = __importDefault(require("./components/Header"));
var MyQueue_1 = __importDefault(require("./pages/MyQueue"));
var MyPlaylists_1 = __importDefault(require("./pages/MyPlaylists"));
var MyFriends_1 = __importDefault(require("./pages/MyFriends"));
var react_router_dom_1 = require("react-router-dom");
var userDataContext_1 = require("./contexts/userDataContext");
var useAuth_1 = __importDefault(require("./useAuth"));
var UserPage_1 = __importDefault(require("./pages/UserPage"));
var react_1 = require("react");
function App() {
    var userToken = (0, userDataContext_1.useUserContext)().userToken;
    var code = userToken;
    var _a = (0, react_1.useState)(), page = _a[0], setPage = _a[1];
    (0, useAuth_1.default)(code);
    return (code ? <div>
    <Header_1.default code={code} page={page} setPage={setPage}/>
    <div className="body">
      <NavBar_1.default code={code} page={page} setPage={setPage}/>
      <div className="pages-container">
        <react_router_dom_1.Routes code={code} page={page} setPage={setPage}>
          <react_router_dom_1.Route path="/" element={<MyQueue_1.default />}/>
          <react_router_dom_1.Route page={page} setPage={setPage} code={code} path="/myplaylists" element=<MyPlaylists_1.default page={page} setPage={setPage} code={code}/>/>
          <react_router_dom_1.Route path="/myfriends" element={<MyFriends_1.default />}/>
          <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
          <react_router_dom_1.Route page={page} setPage={setPage} path="/userPage" element={<UserPage_1.default page={page} setPage={setPage}/>}/>
        </react_router_dom_1.Routes>
      </div>
    </div>

  </div> : <Login_1.default />);
}
exports.default = App;
