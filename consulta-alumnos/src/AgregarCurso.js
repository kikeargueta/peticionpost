import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from './R.jpeg'; 
import './AgregarCurso.css'; 

const AgregarCurso = () => {
  const [curso, setCurso] = useState({ nombre: '', creditos: 0, descripcion: '' });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso({ ...curso, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://test-deploy-12.onrender.com/cursos', curso);
      setMensaje('Curso agregado exitosamente');
      setCurso({ nombre: '', creditos: 0, descripcion: '' });
    } catch (error) {
      setMensaje('Error al agregar el curso');
    }
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
        <div style={{ marginTop: '80px' }}> {/* margen superior */}
          <h2 className="text-center mb-4">Agregar Curso</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                className="form-control"
                value={curso.nombre}
                onChange={handleChange}
                placeholder="Nombre del curso"
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="number"
                name="creditos"
                className="form-control"
                value={curso.creditos}
                onChange={handleChange}
                placeholder="Créditos"
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                name="descripcion"
                className="form-control"
                value={curso.descripcion}
                onChange={handleChange}
                placeholder="Descripción"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg mt-4">Agregar Curso</button>
            {mensaje && <p className="text-success">{mensaje}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgregarCurso;
