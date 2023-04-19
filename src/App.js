import { Route, Routes, BrowserRouter } from "react-router-dom";

import Main from "./pages/main.js"
import Chat from "./pages/chat.js"
import Register from "./pages/register.js"

function App({}) {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/chat" element={<Chat></Chat>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;