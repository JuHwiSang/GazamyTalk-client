import {Route} from "react-router-dom";

import Main from "./main.js"


function App({}) {
  return (
    <div className="App">
    <Route path="/">
      <Main></Main>
    </Route>
    <Route path="/chat">
      <Chat></Chat>
    </Route>
    </div>
  );
}

export default App;