
import './App.css';
import { Nav } from './component/nav';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import { Home } from './component/home';
import { Politice } from './component/politice';
import { Cricket } from './component/cricket';
import { Footbal } from './component/footbal';
import { Bussiness } from './component/Bussiness';
import { Footer } from './component/footer';
import { Technology } from './component/technology';
function App() {
  return (

    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/politice" element={<Politice />}></Route>
          <Route exact path="/cricket" element={<Cricket />}></Route>
          <Route exact path="/football" element={<Footbal />}></Route>
          <Route exact path="/bussiness" element={<Bussiness />}></Route>
          <Route exact path='/technology' element={< Technology/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>









  );
}

export default App;
