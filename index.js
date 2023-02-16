import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/Header";
import { Footer } from "./components/footer";
import { Body } from "./components/body";
import Error from "./components/error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Contact } from "./components/contact";
import { Restaurantmenu } from "./components/restaurantmen.js";
import { Profile } from "./components/profile";
import { Instamart } from "./components/instamart";
import About from "./components/about";
import userContext from "./utils/useContext";
// import { Provider } from "react-redux";
// import store from "./utils/store";
const Applayot = () => {
  const [User, setUser] = useState({
    name: "Adarsh Singh",
    email: "pransu@gmail.com",
  });
  return (
    <>
      <>
        <userContext.Provider
          value={{
            user: User,
            setUser,
          }}
        >
          <HeaderComponent />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayot />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // parentPath/{path} => localhost:1244/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Adarsh singh",
              age: "26",
            }}
          />
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurantmenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
