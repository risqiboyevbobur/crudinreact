import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import Navbaritem from "./components/Navbar";
import Header from "./components/Header/Header";
import {   BrowserRouter as Router,Route, Routes } from "react-router-dom";
import GetData from "./components/GetData/GetData";
import Edit from "./components/EditPage/Edit";


function App() {
  return (
  <>
 <Router>
<Navbaritem/>
<Routes>
  <Route path="/home" element={<Header/>}/>
  <Route path="/result/edit/:id" element={<Edit/>}/>
  <Route path="/result" element={<GetData/>}/>
  <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
</Routes>
 </Router>



{/* <Header/> */}
 

  </>
  );
}

export default App;
