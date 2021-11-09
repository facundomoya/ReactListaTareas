import React, { useState, useEffect } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  //aqui va la logica
  let tareasLocalStorage = JSON.parse(localStorage.getItem("listaTareas")) || [];
  //crar los state necesarios
  const [tareaIndividual, setTareaIndividual] = useState("");
  const [tareas, setTareas] = useState(tareasLocalStorage);

  //aqui uso el ciclo de vida de un componente
  useEffect(()=>{
    //esto funciona en montaje y actualizacion
    console.log("USE EFFECT")//si se agrega el arreglo vacio, solo se ejecuta la fase de montaje
    localStorage.setItem("listaTareas",JSON.stringify(tareas))
  },[tareas])//entre corchetes solo van los states, porque es lo que quiero que se modifiquen
    

/*   const guardarTarea = (e) => {
    console.log(e.target.value);
    setTareaIndividual(e.target.value); //quiero que lo que se guarde dentro del state sea lo que estoy tipeando en el input
  }; */
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("desde handlesubmit");
    setTareas([...tareas, tareaIndividual]);
    //limpiar el input
    setTareaIndividual("");
  };

  const borrarTarea = (nombre) => {
    let arregloModificado = tareas.filter((tarea) => {
      return tarea !== nombre;
    });
    console.log(arregloModificado);
    setTareas(arregloModificado);
  };

  return (
    //aqui va el maquetado y muy poca logica

    <>
      <form className="container my-5" onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <input
            type="text"
            placeholder="Ingrese una tarea"
            className="form-control"
            onChange={(e) => setTareaIndividual(e.target.value)}
          />
          <button type="submit" className="btn btn-outline-light">
            Agregar
          </button>
        </div>
      </form>
      <section className="container">
        <ListaTareas
          arregloTareas={tareas}
          borrarTarea={borrarTarea}
        ></ListaTareas>
      </section>
    </>
  );
};

export default FormTareas;
