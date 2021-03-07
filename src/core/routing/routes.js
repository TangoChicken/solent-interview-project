import Home from "Pages/Homepage";
import Profile from "Pages/Profilepage";

export default [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/profile",
    exact: true,
    component: Profile,
  },
];
