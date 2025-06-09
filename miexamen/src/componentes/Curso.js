import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Curso = ({ curso }) => {
    const navigate = useNavigate();

    return (
        <div className='curso'>
            <h2>{curso.nombre}</h2>
            <p>Nivel: {curso.nivel}</p>
            <p>Duración: {curso.duracion} horas</p>
        </div>
    );
};
export default Curso;