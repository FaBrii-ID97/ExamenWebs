import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormOfertas = ({ ofertas, setOfertas }) => {
    
  const [puesto, setPuesto] = useState('');
  const [salario, setSalario] = useState('');

 

    const navigate = useNavigate();

    const handleAddOffer = () => {  
        navigate('/');
        }

    const handleSubmit = (e) => {
      e.preventDefault();
      setOfertas({puesto: puesto, salario: parseFloat(salario)});
    };

  return (
    <form onSubmit={handleSubmit}>
         <button onClick={handleAddOffer}>Volver a la lista de ofertas</button>
      <input
        type="text"
        placeholder="Puesto"
        value={puesto}
        onChange={(e) => setPuesto(e.target.value)}
      />
      <input
        type="number"
        placeholder="Salario"
        value={salario}
        onChange={(e) => setSalario(e.target.value)}
      />
      <button type="submit">Añadir Oferta</button>
    </form>


   
  );
}
export default FormOfertas;