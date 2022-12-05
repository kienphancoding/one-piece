import Home from "../pages/Home";
import Members from "../pages/Members";
import PageNotFound from "../pages/PageNotFound";

let routes = [
  { path: "/", component: Home },
  { path: "/members", component: Members },
  { path: "*", component: PageNotFound },
];

export { routes };
