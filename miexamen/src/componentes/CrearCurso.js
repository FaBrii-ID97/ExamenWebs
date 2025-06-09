import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormCurso = ({ cursos, setCursos }) => {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [nivel, setNivel] = useState('Básico');
    const [duracion, setDuracion] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones
        if (!id || isNaN(id) || id <= 0) { 
            alert('ID inválido');
            return;
        }
        if (!nombre || nombre.length < 5) {
            alert('Nombre inválido');
            return;
        }
        if (!['Básico', 'Intermedio', 'Avanzado'].includes(nivel)) {
            alert('Nivel inválido');
            return;
        }
        if (!duracion || isNaN(duracion) || duracion < 10 || duracion > 100) {
            alert('Duración inválida');
            return;
        }

        const nuevoCurso = { id: parseInt(id), nombre, nivel, duracion: parseInt(duracion) };
        setCursos([...cursos, nuevoCurso]);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Crear Curso</h1>
            <label>ID:</label>
            <input type="number" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
            <label>Nombre:</label>
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <label>Nivel:</label>
            <select value={nivel} onChange={(e) => setNivel(e.target.value)}>
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
            </select>
            <label>Duración:</label>
            <input type="number" placeholder="Duración (horas)" value={duracion} onChange={(e) => setDuracion(e.target.value)} />
            <button type="submit">Crear Curso</button>
        </form>
    );
};
export default FormCurso;
