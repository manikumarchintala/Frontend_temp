import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";
//its better to wait for the event of manipulation

window.app = {};
app.store = Store;
app.router = Router;
window.addEventListener("DOMContentLoaded", () => {
  //   let nav = document.querySelector("nav");
  //   console.log(nav);
  //   nav.innerHTML = `
  //     <h2>Hello Dom<h2/>
  //     <p>this is html within Javascript</p>`;
  loadData();
  app.router.init();
});
///event binding
//each dom element has a list of possible events we can listen
//basic load,click.dbclick
//value:change
//keyboard events:keyup,keydown,keypress
//mouseover,mouseout,pointer touch events
//scroll,focus and more API
//*some specific objects and  special events
//DOM contentLoaded,popstate in window
