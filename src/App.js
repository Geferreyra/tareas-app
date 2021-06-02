import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {tareas} from './tareas.json';
 import TareaForm from './components/TareaForm';

console.log(tareas);
class App extends Component{
  constructor(){
    super();
    this.state = {
      tareas 
    }
this.handleAddTarea = this.handleAddTarea.bind(this);

  }

 handleAddTarea(tarea){
   this.setState({
     tareas:[...this.state.tareas, tarea]
   })
 }


removeTarea(index){
  if(window.confirm('Eliminar tarea ?' )){
    this.setState({
      tareas: this.state.tareas.filter((e,i)=> {
        return i!== index
      })
    })
  }
}
  
  render(){
  const tareas = this.state.tareas.map((tarea , i)=>{
    return(
   <div className="col-md-4" key={i}>    
   <div className="card mt-4">
     <div className="card-header">
       <h3>{tarea.titulo}</h3>
       <span className=" ml-2" >
         Prioridad : {tarea.prioridad} 
       </span> 
        
     </div>
     <div className="card-body"> 
     <p>{tarea.descripcion}</p>
     <p><mark>{tarea.responsable}</mark></p>
     </div>
     <div className="card-footer">
      <button className="btn btn-danger"
      onClick={this.removeTarea.bind(this, i)}> 
       Eliminar
      </button>
     </div>
    </div>
    </div>

  )


})
    return(
      <div className="App">
       <nav className="navbar navbar-dark bg-dark" >
         <a href="" className="text-white">
           Tareas 
           <span className="badge badge-pill badge-light ml-2">
                  {this.state.tareas.length}
           </span>
         </a>
       </nav> 

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
            <img src={logo} className="App-logo" alt="logo"></img>
            <TareaForm  onAddTarea={this.handleAddTarea} ></TareaForm>
            </div>
            
            <div className="col-md-8">
              <div className="row">
                {tareas}
                </div> 

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
