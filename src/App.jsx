// App.js
import { useState } from "react";
import Header from "./Header";
import Caurosel from "./Caurosel";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Footer from "./Footer";
import Contact from "./Contact";
import Card3 from "./Card3";

function App() {
  return (
    <>
      <Header />
      <div className="pt-20">
        {" "}
        {/* Adjust this padding to fit your header height */}
        <Caurosel />
        <Card1 />
        <Card3 />
        <Card2 />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
