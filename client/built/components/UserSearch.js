"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var userDataContext_1 = require("../contexts/userDataContext");
var UserCard_1 = __importDefault(require("./UserCard"));
require("./UserSearch.css");
function UserSearch() {
    var _a = (0, userDataContext_1.useUserContext)(), rootAccessToken = _a.rootAccessToken, spotifyApi = _a.spotifyApi, isSubmitted = _a.isSubmitted, setIsSubmitted = _a.setIsSubmitted;
    var _b = (0, react_1.useState)(""), inputData = _b[0], setInputData = _b[1];
    var _c = (0, react_1.useState)(null), user = _c[0], setUser = _c[1];
    // const{ isSubmitted, setIsSubmitted } = useState(false)
    spotifyApi.setAccessToken(rootAccessToken);
    function handleChange(e) {
        setInputData(e.target.value);
        if (e.target.value === "") {
            setIsSubmitted(false);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitted(true);
        spotifyApi.getUser(inputData).then(function (res) { return setUser(res.body); }).catch(function (e) { return console.log('error searching user: ', e.message); });
        setInputData('');
    }
    return (<div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Username" value={inputData} onChange={handleChange}/>
      </form>
      <div className="box">
        <UserCard_1.default user={user} submitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
      </div>
    </div>);
}
exports.default = UserSearch;
