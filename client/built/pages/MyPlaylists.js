"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var PlaylistSearchResult_1 = __importDefault(require("../components/PlaylistSearchResult"));
require("./MyPlaylist.css");
var userDataContext_1 = require("../contexts/userDataContext");
var placeholder = require('../assets/placeholder.jpeg');
function MyPlaylists(_a) {
    var code = _a.code, page = _a.page;
    var _b = (0, react_2.useState)([]), playlists = _b[0], setPlaylists = _b[1];
    var _c = (0, userDataContext_1.useUserContext)(), rootAccessToken = _c.rootAccessToken, spotifyApi = _c.spotifyApi;
    spotifyApi.setAccessToken(rootAccessToken);
    console.log("rootAccessToken: ", rootAccessToken);
    var userId = page.id || "bjcurriden";
    console.log("this should be the page", page);
    (0, react_2.useEffect)(function () {
        if (rootAccessToken) {
            spotifyApi.getUserPlaylists(userId).then(function (res) {
                console.log(res);
                setPlaylists(res.body.items.map(function (playlist) {
                    return {
                        name: playlist.name,
                        uri: playlist.uri,
                        img: playlist.images[0].url ? playlist.images[0].url : placeholder,
                        owner: playlist.owner.display_name
                    };
                }));
            });
        }
    }, [rootAccessToken, page]);
    return rootAccessToken ? (<>
      <div className="page">
        <h1>My Playlists</h1>
        <div className="playlist-container">
          {playlists.map(function (playlist) { return (<PlaylistSearchResult_1.default playlist={playlist} key={playlist.uri}/>); })}
        </div>

      </div>
    </>) : <h1>No User</h1>;
}
exports.default = MyPlaylists;
