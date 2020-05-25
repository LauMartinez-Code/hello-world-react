import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import OtherComponent from './OtherComponent'

// Los nombres de componentes deben comenzar con Mayusculas!
function Saludo() {
    return <p>Hello World from home, <Name/></p>;
}

const Name = () => {    
    const [name, setNombre] = useState('Lautaro'); //equivalente a las propiedades Get y Set
    
    const updateName = () => {
        let txtnombre = document.getElementById("txtName").value;
        
        if (!txtnombre == '') 
            setNombre(txtnombre);
    }  

    return (    //actualiza todo lo que esta despues de <Name/> pero no lo anterior
        <span>
            <span><strong>{name}!!</strong></span>                
            <OtherComponent funcion={updateName}/>
        </span>
    );
};

const App = () => {    
    return (
        <div>
            <Saludo/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
            // (componente a mostrar , donde se muestra)

//root es un 'id' de un <div> q esta en public\index.html
//npm start ,ctrl C
//dato curioso: si este archivo se llamara Index.js en lugar de index.js no compilaria



/* Manera alternativa de hacerlo separado por Componentes

const Lbl = () => {
    return <label class="label" for="txtName">Enter Name: </label>;
}

const Input = () => {
    return <input id="txtName" type="text"/>;
}

const Btn = () => {
    return <button style={styles}>Submit</button>;
}

const App = () => {
    return <div><Lbl/><Input/><Btn/></div>
}

ReactDOM.render(<App />, document.getElementById("root")); */