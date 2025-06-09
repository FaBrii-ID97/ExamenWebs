import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListaCursos from './componentes/ListaCursos';
 import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormCurso from './componentes/CrearCurso';
import Curso from './componentes/Curso';

function App(){
  const [cursos, setCursos] = useState([
{ id: 1, nombre: "Introducción a React", nivel: "Básico", duracion: 20 }, 
{ id: 2, nombre: "Algoritmos Avanzados", nivel: "Avanzado", duracion: 60 }
  ]);

const EliminarCurso = (id) => {
  setCursos(cursos.filter(curso => curso.id !== id));
}

return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaCursos offers={cursos} EliminarCurso={EliminarCurso} />} />
        <Route path="/CrearCurso" element={<FormCurso cursos={cursos} setCursos={setCursos} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
