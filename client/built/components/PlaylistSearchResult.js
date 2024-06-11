"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var playbutton_png_1 = __importDefault(require("../assets/playbutton.png"));
require("./PlaylistSearchResult.css");
var react_1 = require("react");
var ApiService_1 = require("../ApiService/ApiService");
function PlaylistSearchResult(_a) {
    var playlist = _a.playlist, setQueue = _a.setQueue;
    var _b = (0, react_1.useState)(false), clicked = _b[0], setClicked = _b[1];
    function handleClick() {
        setClicked(!clicked);
        (0, ApiService_1.addToQueue)({
            name: playlist.name,
            image: playlist.img,
            owner: playlist.owner
        });
    }
    function handleDelete() {
        (0, ApiService_1.removeFromQueue)(playlist.name);
        setQueue(function (prev) { return prev.filter(function (el) { return el.name !== playlist.name; }); });
    }
    var heart;
    if (clicked === true) {
        heart = "❤️";
    }
    else {
        heart = "🖤";
    }
    return (<div className="container">
        <img className="play-button" src={playbutton_png_1.default} alt="play button"/>
        <img className="playlist-pic" src={playlist.img} alt="playlist cover"/>
        <div className="info">
          <h3>{playlist.name}</h3>
          <h5>Shared by: {playlist.owner}</h5>
        </div>
        <div className="button-container">
          <p className="heart" onClick={handleClick}>{heart}</p>
          <p className="trash" onClick={handleDelete}>🗑</p>
        </div>
  
  
      </div>);
}
exports.default = PlaylistSearchResult;
