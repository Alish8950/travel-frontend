import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup } from "./pages";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
