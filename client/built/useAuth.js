"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var axios_1 = __importDefault(require("axios"));
var userDataContext_1 = require("./contexts/userDataContext");
function useAuth(code) {
    var _a = (0, react_1.useState)(), accessToken = _a[0], setAccessToken = _a[1];
    var _b = (0, react_1.useState)(), refreshToken = _b[0], setRefreshToken = _b[1];
    var _c = (0, react_1.useState)(), expiresIn = _c[0], setExpiresIn = _c[1];
    var _d = (0, userDataContext_1.useUserContext)(), setCode = _d.setCode, setRootAccessToken = _d.setRootAccessToken;
    (0, react_1.useEffect)(function () {
        axios_1.default.post('http://localhost:3001/login', {
            code: code,
        }).then(function (res) {
            setAccessToken(res.data.accessToken);
            setRootAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            console.log(res.data);
            window.history.pushState({}, null, "/");
        })
            .catch(function () {
            // window.location = "/"
        });
    }, [code]);
    (0, react_1.useEffect)(function () {
        if (!refreshToken || !expiresIn)
            return;
        var interval = setInterval(function () {
            axios_1.default
                .post("http://localhost:3001/refresh", {
                refreshToken: refreshToken,
            })
                .then(function (res) {
                setAccessToken(res.data.access_token);
                setRootAccessToken(res.data.access_token);
                setExpiresIn(res.data.expires_in);
            })
                .catch(function () {
                // window.location = "/"
            });
        }, (expiresIn - 60) * 1000);
        return function () { return clearInterval(interval); };
    }, [refreshToken, expiresIn]);
    return accessToken;
}
exports.default = useAuth;
