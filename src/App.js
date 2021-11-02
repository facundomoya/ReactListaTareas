
import './App.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import "bootstrap/dist/css/bootstrap.min.css"
import FormTareas from './components/FormTareas';

function App() {
  return (
    //se añade el componente Titulo
   <>
   <Titulo></Titulo>
   <Subtitulo comision="16i" estado={true}/>
   <FormTareas></FormTareas>
   </>

  );
}

export default App;
