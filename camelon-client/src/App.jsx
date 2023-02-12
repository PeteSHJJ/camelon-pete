import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Mainpage from "./pages/Mainpage/Mainpage";
import { Provider } from "react-redux";
import Store from "./store/Store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Provider store={Store}>
        <Mainpage />
      </Provider>
    </div>
  );
}

export default App;
