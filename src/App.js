import Home from "./pages/home.jsx"
import SelectCourse from './pages/selectcourse.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './login.jsx'
import Table from "./table.jsx"
import './App.css';

function App() {
  return (
    /*<div className="App">
      <SelectCourse/>
    </div>*/
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Table />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
