import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Lista de cursos ofrecidos, offers.
const ListaCursos = ({ offers }) => {
  const navigate = useNavigate();

  return (
    <div className='offer-list'>
      <h1>Lista de Cursos</h1>
      <button onClick={() => navigate('/CrearCurso')}>Crear</button>
      <ul>
        {offers.map((offer, index) => (
          <li key={index}>
            <strong>{offer.nombre}</strong> - Nivel: {offer.nivel} - Duración: {offer.duracion} horas &nbsp;
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListaCursos;
