import Students from "./students"
function App() {

  return (
    <>
      <Students name="spogebob" age={30} isStudent={true}/>
      <Students name="Patrick" age={40} isStudent={false}/>
      <Students name="pikachu" age={15} isStudent={false}/>
      <Students name="charmander" age={5} isStudent={false}/>
      <Students/>
    </>
  )
}

export default App
