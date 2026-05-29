import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Homepage from "../pages/Homepage";
import Saved from "../pages/Saved";

function Approutes() {
  return(
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/saved" element={<Saved />} />

    </Routes>
  )
}

export default Approutes