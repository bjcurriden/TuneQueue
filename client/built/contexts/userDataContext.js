"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserContext = void 0;
var react_1 = require("react");
var spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
var UserContext = (0, react_1.createContext)(null);
var spotifyApi;
spotifyApi = new spotify_web_api_node_1.default({
    clientId: "4fcf236dbb744e89be617d84a23a2396"
});
var authCode = new URLSearchParams(window.location.search).get('code');
function UserDataContext(props) {
    var _a = (0, react_1.useState)(), userToken = _a[0], setUserToken = _a[1];
    var _b = (0, react_1.useState)(), rootAccessToken = _b[0], setRootAccessToken = _b[1];
    var _c = (0, react_1.useState)(), selectedUser = _c[0], setSelectedUser = _c[1];
    var _d = (0, react_1.useState)(false), isSubmitted = _d[0], setIsSubmitted = _d[1];
    var children = props.children;
    (0, react_1.useEffect)(function () {
        if (!rootAccessToken)
            return;
        spotifyApi.setAccessToken(rootAccessToken);
    }, [rootAccessToken]);
    spotifyApi.setAccessToken(rootAccessToken);
    (0, react_1.useEffect)(function () {
        setUserToken(authCode);
    }, []);
    return (<UserContext.Provider value={{ userToken: userToken, setUserToken: setUserToken, rootAccessToken: rootAccessToken, setRootAccessToken: setRootAccessToken, spotifyApi: spotifyApi, selectedUser: selectedUser, setSelectedUser: setSelectedUser, isSubmitted: isSubmitted, setIsSubmitted: setIsSubmitted }}>
  {children}
    </UserContext.Provider>);
}
exports.default = UserDataContext;
var useUserContext = function () { return (0, react_1.useContext)(UserContext); };
exports.useUserContext = useUserContext;
