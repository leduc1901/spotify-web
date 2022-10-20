import { Home } from "../pages/Home";
import { Library } from "../pages/Library";
import { Search } from "../pages/Search";

export const routes = [
  {
    path: "/",
    component: Home,
    title: "Soundcloud Web",
  },
  {
    path: "/search",
    component: Search,
    title: "Soundcloud Web - Search",
  },
  {
    path: "/library",
    component: Library,
    title: "Soundcloud Web - Library",
  },
];
