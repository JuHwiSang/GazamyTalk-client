import { Route, Router, Routes, BrowserRouter } from "react-router-dom";

import Main from "./pages/main.js"
import Chat from "./pages/chat.js"


function App({}) {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/chat" element={<Chat></Chat>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;