import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CreateBlog from "./Pages/CreateBlog";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";


// provide the path in array form as objects to App.js where it render as props
const RoutePathsObjects = [
    {
        path: "/",
        exact: true,
        component: () => <Home />,
    },

    {
        path: "/about",
        component: () => <About />,
    },

    {
        path: "/signup",
        component: () => <SignUp />,
    },

    {
        path: "/login",
        component: () => <Login />,
    },

    {
        path: "/create",
        component: () => <CreateBlog />,
    }
]

export default RoutePathsObjects;