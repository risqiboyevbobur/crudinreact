import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import Navbaritem from "./components/Navbar";
import Header from "./components/Header/Header";
import {   BrowserRouter as Router,Route, Routes } from "react-router-dom";
import GetData from "./components/GetData/GetData";


function App() {
  return (
  <>
 <Router>
<Navbaritem/>
<Routes>
  <Route path="/home" element={<Header/>}/>
  <Route path="/result" element={<GetData/>}/>
</Routes>
 </Router>



{/* <Header/> */}
 

  </>
  );
}

export default App;
