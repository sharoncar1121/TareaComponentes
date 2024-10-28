import { InfoUsuarioLista } from '@/models/InfoUsuario'
import React from 'react'

export default function InfoUsuario({ usuarios }: InfoUsuarioLista) {
  return (
    <div className="mt-5">
    <h2>Lista de Usuarios Registrados</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Teléfono</th>
          <th>Correo</th>
          <th>Fecha de Nacimiento</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario, index) => (
          <tr key={index}>
            <td>{usuario.nombre}</td>
            <td>{usuario.apellido}</td>
            <td>{usuario.telefono}</td>
            <td>{usuario.correo}</td>
            <td>{usuario.fechaNacimiento ? usuario.fechaNacimiento.toString() : ''}</td>
            <td>{usuario.edad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
