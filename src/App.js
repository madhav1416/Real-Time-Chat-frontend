import './App.css';
import Login from "./components/login";
import Signup from './components/signup';
import ChatBox from './components/ChatBox';
import { Route , Switch ,Redirect,BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    {!localStorage.getItem("user") &&
    <Redirect push to="/login"/>
    }
    <Switch>
      <Route path="/login" component={() =><Login/>}/>
      <Route path="/signup" component={() =><Signup/>}/>
      { JSON.parse(localStorage.getItem('user')) && <Route path="/chatbox" component={() =><ChatBox/>}/>}
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
