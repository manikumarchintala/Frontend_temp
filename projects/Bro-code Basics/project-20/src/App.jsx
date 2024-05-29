import ComponentA from "./ComponentA.jsx";

//useContext()=react hook that allows you to share values between multiple
// levels of components without pasiing props 
//through each level.
//provider Component
//import {cerateContext} from React
//export const mycontext = createContext();
//<mycontext.provider value={value}>
//<Child/>
//<Mycontext.Provider>
//Consumer Components
//1.import React,{useContext} from'react';
//import{MyContext} from./ComponentA;
//2.constvalue=useContext(MyContext); 

function App() {


  return (
    <>
     <ComponentA />
    </>
  )
}

export default App
