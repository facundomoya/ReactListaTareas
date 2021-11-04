import React, {useState} from 'react';
import ListaTareas from './ListaTareas';

const FormTareas = () => {
    //aqui va la logica
    //crar los state necesarios
    const [tareaIndividual,setTareaIndividual] = useState("")
    const [tareas,setTareas]= useState([])

    const guardarTarea=(e)=>{
        console.log(e.target.value)
        setTareaIndividual(e.target.value)//quiero que lo que se guarde dentro del state sea lo que estoy tipeando en el input
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("desde handlesubmit")
        setTareas([...tareas,tareaIndividual])
        //limpiar el input
        setTareaIndividual("")

    }
    return (
    //aqui va el maquetado y muy poca logica

        <>
        <form className="container my-5" onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
        <input type="text" placeholder="Ingrese una tarea" className="form-control" onChange={e=> setTareaIndividual(e.target.value)} />
        <button type="submit" className="btn btn-outline-light">Agregar</button>
        </div>
        </form>
        <section className="container">
            <ListaTareas arregloTareas={tareas}></ListaTareas>
        </section>
        </>
    );
};

export default FormTareas;