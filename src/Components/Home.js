import React from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";

function Home() {
    return (
      <div>
        <NavBar />
        <Header />
        <Blogs />
        <Footer />
      </div>
    )
  }

export default Home;