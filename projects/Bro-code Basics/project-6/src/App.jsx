import List from "./List"
function App() {
  const Fruits=[{id:1, name:"apples",calories:95},
               {id:2, name:"orange",calories:75},
                {id:3,name:"banana",calories:160},
                 {id:4,name:"coconut",calories:89},
                  {id:5,name:"Pineapple",calories:182}];
  const Vegetables=[{id:7, name:"apples",calories:95},
                  {id:8, name:"orange",calories:75},
                   {id:9,name:"banana",calories:160},
                    {id:10,name:"coconut",calories:89},
                     {id:11,name:"Pineapple",calories:182}];

  return (
    <>

    {Fruits.length >0 ? <List items={Fruits} category="fruits"/>:null}
    {Vegetables.length > 0 && <List items={Vegetables} category="vegetables"/>}
    </>
  )
}

export default App
