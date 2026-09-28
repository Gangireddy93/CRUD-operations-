import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";

export default function rout({ userdata, setUserdata }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home userdata={userdata} setUserdata={setUserdata} />}/>
        <Route path="/create" element={<Create userdata={userdata} setUserdata={setUserdata} />}/>
        <Route path="/edit/:id" element={<Create userdata={userdata} setUserdata={setUserdata} />}/>
      </Routes>
    </BrowserRouter>
  );
}
