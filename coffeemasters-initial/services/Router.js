const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Link clicked");
        //const url = event.target.href;
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });
    //event handler for url changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });
    //check the intital url
    Router.go(location.pathname);
  },
  go: (route, addtoHistory = true) => {
    console.log(`Going to ${route}`);
    if (addtoHistory) {
      history.pushState({ route }, "", route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("h1");
        pageElement.textContent = "menu";
        break;
      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "your order";
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("h1");
          pageElement.textContent = "Deatils";
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.id = paramId;
        }
    }
    if (pageElement) {
      const cache = document.querySelector("main");

      cache.innerHTML = "";
      cache.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};
export default Router;
