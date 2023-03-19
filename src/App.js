// import logo from './logo.svg';
// import './App.css';
import Labs from "./labs/index";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/index"
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router"

function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <Routes>
                <Route index
                       element={<Labs/>}/>
                <Route path='/hello'
                       element={<HelloWorld/>}/>
                <Route path="/tuiter/*"
                       element={<Tuiter/>}/>
                <Route path="/*" element={<Labs/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
