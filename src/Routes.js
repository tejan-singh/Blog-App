import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import App from "./App";

// provide the path in array form as objects to App.js where it render as props
export default [
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
    }
]