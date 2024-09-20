import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ConsultaAlumnos from './ConsultaAlumnos';
import AgregarCurso from './AgregarCurso';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="mt-4">Sistema de Gestión de Cursos</h1>
        <div className="d-flex justify-content-center mb-4">
          <Link to="/consulta" className="btn btn-primary me-2">Consulta de Alumnos</Link>
          <Link to="/agregar" className="btn btn-success">Agregar Curso</Link>
        </div>
        <Routes>
          <Route path="/consulta" element={<ConsultaAlumnos />} />
          <Route path="/agregar" element={<AgregarCurso />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
