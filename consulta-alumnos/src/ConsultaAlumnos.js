import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from './R.jpeg'; 
import './ConsultaAlumnos.css';

const ConsultaAlumnos = () => {
  const [carnet, setCarnet] = useState('');
  const [alumno, setAlumno] = useState(null);
  const [error, setError] = useState('');

  const handleBuscar = async () => {
    try {
      const response = await axios.get('https://test-deploy-12.onrender.com/estudiantes');
      const alumnos = response.data;
      const alumnoEncontrado = alumnos.find(alumno => alumno.Carnet === carnet);

      if (alumnoEncontrado) {
        setAlumno(alumnoEncontrado);
        setError('');
      } else {
        setError('No se encontró el estudiante');
        setAlumno(null);
      }
    } catch {
      setError('Error al buscar el estudiante');
      setAlumno(null);
    }
  };

  const handleLimpiar = () => {
    setCarnet('');
    setAlumno(null);
    setError('');
  };

  const handleCancelar = () => {
    console.log('Acción cancelada');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 position-relative">
        <img
          src={imagen}
          alt="Imagen"
          className="position-absolute top-0 end-0 p-2"
          style={{ width: '400px', height: 'auto' }}
        />
        <div style={{ marginTop: '70px' }}>
          <h2 className="text-center mb-4">Consulta de Alumnos</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={carnet}
              onChange={e => setCarnet(e.target.value)}
              placeholder="Ingrese el carnet"
            />
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button
              onClick={handleBuscar}
              className="btn btn-primary btn-lg"
            >
              Buscar
            </button>
            <button
              onClick={handleLimpiar}
              className="btn btn-secondary btn-lg"
            >
              Limpiar
            </button>
            <button
              onClick={handleCancelar}
              className="btn btn-danger btn-lg"
            >
              Cancelar
            </button>
          </div>
          {error && <p className="text-danger mt-3">{error}</p>}
          {alumno && (
            <div className="mt-4">
              <p><strong>Nombre:</strong> {alumno.Estudiante}</p>
              <p><strong>Correo:</strong> {alumno.Email}</p>
              <p><strong>Sección:</strong> {alumno.Seccion}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultaAlumnos;
