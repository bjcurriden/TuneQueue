"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
var App_1 = __importDefault(require("./App"));
var react_router_dom_1 = require("react-router-dom");
var userDataContext_1 = __importDefault(require("./contexts/userDataContext"));
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(<>
    <userDataContext_1.default>
      <react_router_dom_1.BrowserRouter>
        <App_1.default />
      </react_router_dom_1.BrowserRouter>
    </userDataContext_1.default>
  </>);
