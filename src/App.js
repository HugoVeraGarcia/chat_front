import  { HashRouter, Routes, Route }  from 'react-router-dom'; 
import  { Home, Enterprise, Login, NewUser }  from "./pages";
//import  {LoadingPage, NavBar}  from "./components"
import  { NavBar }  from "./components"
//import Home from "./pages/Home";

//import './styles/styles.css';
//import { useSelector } from 'react-redux';

function App() {

  // const isLoading = useSelector(state => state.isLoading);

  return (
    <HashRouter>
      <NavBar />
    
      <div className="App">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/login" element={<Login />} />
              <Route path="/newuser" element={<NewUser />} />
          </Routes>
      </div>
    </HashRouter>

  );
}

export default App;
