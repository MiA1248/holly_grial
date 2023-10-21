//home.jsx
import React from 'react';
import { Sidebarright } from "../components/sidebarright";
import { Sidebarleft } from "../components/sidebarleft";
import { Header } from "../components/header";
import { Main } from "../components/mainContent";
import { Footer } from "../components/footer";

export const Home = () => {
  return (
    <div className="grid ">
      <div className="col-12 ">
        <Header />
      </div>
      <div className="col-2 ">
        <Sidebarright />
      </div>
      <div className="col-8 ">
       <Main />
      </div>
      <div className="col-2 ">
        <Sidebarleft />
      </div>
      <div className="col-12">
        <Footer />
      </div>
    </div>
  );
  
}