"use client";
import { Usuario } from "@/models/InfoUsuario";
import { useState, useEffect } from "react";
import InfoUsuario from "./InfoUsuario";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Formulario from "./Formulario";


export default function FormularioContacto() {
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");
  const [correo, setCorreo] = useState<string>("");
  const [fechaNacimiento, setFechaNacimiento] = useState<Date | null>(null);
  const [edad, setEdad] = useState<number | null>(null);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isSubmited, setSubmited] = useState<boolean>(false);

  
  const calcularEdad = (fecha: Date): number => {
    const fechaNacimiento = new Date(fecha);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  };

  useEffect(() => {
    if (isSubmited) {
      const timer = setTimeout(() => setSubmited(false), 11000);
      return () => clearTimeout(timer);
    }
  }, [isSubmited]);



  const submitForm = (e:any) =>{
    e.preventDefault();
    console.log("datos de formulario:", {nombre, apellido, correo, telefono, fechaNacimiento})
    if (nombre && apellido && telefono && correo && fechaNacimiento) {
        const nuevoUsuario: Usuario = { 
          nombre, 
          apellido, 
          telefono, 
          correo, 
          fechaNacimiento, 
          edad: calcularEdad(fechaNacimiento) 
        };
        setUsuarios([...usuarios, nuevoUsuario]);
        setNombre("");
        setApellido("");
        setTelefono("");
        setCorreo("");
        setFechaNacimiento(null);
        setEdad(null);
        setSubmited(true);
        console.log("el estado de isSubmited es:",isSubmited)
      }
    
  }

  const camposFormulario = [
    { label: "Nombre", value: nombre, onChange: (e:any) => setNombre(e.target.value), type: "text" },
    { label: "Apellido", value: apellido, onChange: (e:any) => setApellido(e.target.value), type: "text" },
    { label: "Teléfono", value: telefono, onChange: (e:any) => setTelefono(e.target.value), type: "text" },
    { label: "Correo", value: correo, onChange: (e:any) => setCorreo(e.target.value), type: "text" },
  ];

  return (
    <>
      {isSubmited && <p className="text-green-500 text-center text-4xl">Registrado :D !!!!!!</p>}
      <form className="max-w-sm mx-auto mt-5" onSubmit={submitForm}>
        <Formulario campos={camposFormulario} />
        <div className="mb-5">
          <label htmlFor="fechaNacimiento" className="form-label">
            Fecha de Nacimiento
          </label>
          <DatePicker
            selected={fechaNacimiento}
            onChange={(date: Date | null) => {
              setFechaNacimiento(date);
              setEdad(date ? calcularEdad(date) : null);
            }}
            dateFormat="dd/MM/yyyy"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholderText="Selecciona tu fecha de nacimiento"
          />
        </div>

        {edad !== null && <p>Edad: {edad} años</p>}

        <button type="submit" className="btn btn-primary">
          Enviar información
        </button>
        <InfoUsuario usuarios={usuarios} />
      </form>
    </>
  );
}


