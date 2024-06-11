"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./Header.css");
var UserSearch_1 = __importDefault(require("./UserSearch"));
function Header(_a) {
    var code = _a.code, page = _a.page, setPage = _a.setPage;
    return (<div className="head">
      <h1>TuneQueue</h1>
      <UserSearch_1.default code={code} page={page} setPage={setPage}/>
    </div>);
}
exports.default = Header;
