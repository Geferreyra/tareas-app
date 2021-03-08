import React, {Component} from 'react';

class TareaForm extends Component {

    constructor(){
        super();
        this.state= {
            titulo:'',
            responsable:'',
            descripcion:'',
            prioridad:'low'
        };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

     }
 
    handleInput(e){
        const{value,name} = e.target;
        this.setState({
            [name]:value
        })
        console.log(this.state);

    }


    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTarea(this.state);
        console.log('Enviando informacion');

    }


 render() {
     return(
         <div className="card">
             <form  className="card-body" onSubmit={this.handleSubmit}>
                 <div className="form-group">
                     <input
                     type="text"
                     name="titulo"
                     onChange={this.handleInput}
                     className="form-control"
                     placeholder="Titulo de la Tarea"
                     />
                 </div>

                 <div className="form-group">
                     <input
                     type="text"
                     name="responsable"
                     className="form-control"
                     placeholder="Responsable"
                     onChange={this.handleInput}
                     />
                 </div>

                 <div className="form-group">
                     <input
                     type="text"
                     name="descripcion"
                     className="form-control"
                     placeholder="Descripcion"
                     onChange={this.handleInput}
                     />
                 </div>
                 <div className="form-group">
                     <select
                     name="prioridad"
                     className="form-control"
                     onChange={this.handleInput}
                     >
                   <option>Baja</option>
                   <option>Media</option>
                   <option>Alta</option>      
                     </select>
                 </div>
                 <button type="submit" className="btn btn-primary">
                     Guardar
                 </button>

             </form>
         </div>
     )
 }

}

export default TareaForm;
