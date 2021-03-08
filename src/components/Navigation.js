import React,{Component} from 'react';

class Navigation extends Component{

    
    

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark" >

        <p className="text-white"> 
        <a href="">{this.props.titulo}</a>
        </p>
        
        </nav>

        )
    }
}

export default Navigation;