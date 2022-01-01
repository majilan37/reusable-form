import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Signin from "./pages/Signin";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
