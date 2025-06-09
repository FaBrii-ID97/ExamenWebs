// src/pages/OfferList.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './interfaz1.css';
const  OfferList= ({offers})=> {

  const navigate = useNavigate();

  return (
    <div className='offer-list'>
      <h1>Ofertas Laborales</h1>
      <button onClick={() => navigate('/')}>Add Offer</button>
      <ul>
        {offers.map((offer, index) => (
          <li key={ index}>
            <strong>{offer.puesto}</strong> - ${offer.salario} &nbsp;
            <button onClick={() => navigate(`/api/offfer/${offer.id}`)}>
              View offer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OfferList;
