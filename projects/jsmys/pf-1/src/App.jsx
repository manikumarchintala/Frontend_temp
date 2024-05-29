import React from "react";
import { Brand,CTA,Navbar } from "./components";
import { Blog,Features,Footer,Header,Possibility,Whatgpt3 } from "./containers";
import'./App.css'
function App() {
  
  return (
   <div className="App">
    <div className="gradient__bg">
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <Whatgpt3/>
    <Features/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>
   </div>
  )
}

export default App
