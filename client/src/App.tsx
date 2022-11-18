import { library } from "@fortawesome/fontawesome-svg-core";
import { faImage, faSmile } from "@fortawesome/free-regular-svg-icons";
import {
  faBell,
  faCaretDown,
  faEllipsisV,
  faSignOutAlt,
  faSpinner,
  faTimes,
  faTrash,
  faUpload,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Chat from "./components/Chat/Chat";
import PrivateRoute from "./hoc/PrivateRoute";

library.add(
  faSmile,
  faImage,
  faSpinner,
  faEllipsisV,
  faUserPlus,
  faSignOutAlt,
  faTrash,
  faCaretDown,
  faUpload,
  faTimes,
  faBell
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Chat />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>404 page not found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
