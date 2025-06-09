import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddOffer from './componentes/addOffer';
import OfferList from './componentes/offerList';
 import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormOfertas from './componentes/Form'; 


function App() {
  const [ofertas, setOfertas] = React.useState([
    { puesto: 'Desarrollador Frontend', salario: 50000 },
    { puesto: 'Desarrollador Backend', salario: 60000 },
    { puesto: 'Diseñador UX/UI', salario: 55000 },
    { puesto: 'Administrador de Sistemas', salario: 70000 },
    { puesto: 'Gerente de Proyectos', salario: 80000 }
  ]);

   const anadir = (nuevo) => {
    
      setOfertas([...ofertas, nuevo]);
    
    
  console.log(ofertas);
  };
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<OfferList  offers={ofertas} />} />
    <Route path="/api/offer/new" element={<AddOffer setOfertas={setOfertas} />} />
    <Route path="/form" element={<FormOfertas ofertas={ofertas} setOfertas={anadir} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
