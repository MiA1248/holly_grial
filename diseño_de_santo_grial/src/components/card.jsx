// card.jsx
import React from 'react';
import { Card as PrimeCard } from 'primereact/card';
import { Link } from 'react-router-dom';
export default function Mcard({ title, imageSrc, to}) {
    const header = (
        <img alt="Card" src={imageSrc} />
    );
    return (
        <div className="card flex justify-content-center p-3 h-full ">
             <Link to={to}>
            <PrimeCard title={title} header={header} className="md:w-25rem">
            </PrimeCard>
            </Link>
        </div>
    );
}
