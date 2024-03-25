import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route excat path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
