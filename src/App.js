import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/Signup'
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
      <Route path="/Login" component={Login} />
      <Route path="/About" component={About} />
      <Route path="/Signup" component={SignUp} />
    </div>
  );
}
export default App;
