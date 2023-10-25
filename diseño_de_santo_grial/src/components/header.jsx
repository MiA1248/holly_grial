// header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

export const Header = () => {
  return (
      <div className="grid w-full h-full justify-content-start  bg-teal-50">

        <div className="col-6 ">
        <h1>Milagros Alvarado</h1>
        <h6>Desarrolladora Web Frontend</h6>
      </div>
      <div className="col-6 p-5 justify-content-end">
        <Link to="https://www.linkedin.com/in/milagros-alvarado-456021263">
          <Button label="LinkedIn" icon="pi pi-link" className="p-button-raised p-button-outlined p-button-rounded" />
        </Link>
        <Link to="https://github.com/MiA1248">
          <Button label="GitHub" icon="pi pi-github" className="p-button-raised p-button-outlined p-button-rounded" />
        </Link>
      </div>
      </div>
  );
};

