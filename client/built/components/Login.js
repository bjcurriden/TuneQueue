"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_bootstrap_1 = require("react-bootstrap");
var AUTH_URL = "https://accounts.spotify.com/authorize?client_id=4fcf236dbb744e89be617d84a23a2396&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
function Login() {
    return <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
    <a className="btn btn-success btn-lg" href={AUTH_URL}>
      Login with Spotify
    </a>
  </div>;
}
exports.default = Login;
