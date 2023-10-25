//home.jsx
import React from 'react';
import { Leftcontent } from "../components/leftcontent";
import { Rigthcontent } from '../components/rigthcont';
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";

export const Home = () => {
  return (
    <div className="holy-grail h-screen w-full">
      <Header />
      <div className="holy-grail-body">
        <div className="holy-grail-content hg-sidebar ">
          <Main />
        </div>
        <div className="holy-grail-sidebar-1 hg-sidebar ">
          <Leftcontent />
        </div>
        <div className=" hg-sidebar ">
          <Rigthcontent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
