//conditional rendering-allows you to control what gets rendered
//in your application based on certain conditions
//show,hide or chnage components

import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedin={true} UserName=" BroCode" />
    </>
  );
}

export default App;
