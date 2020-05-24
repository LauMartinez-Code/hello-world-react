import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
    backgroundColor: 'blue',
    color: 'white'
};

// Los nombres de componentes deben comenzar con Mayusculas!
function OtherComponent() {
    return <div>
                <br/>
                <label class="label" for="txtName">Enter Name: </label>
                <input id="txtName" type="text"/>
                <button style={styles}>Submit</button>
           </div>
}

function App() {
    return <div>Hello Word from Home, Lautaro!<br/><OtherComponent /></div>;
}

ReactDOM.render(<App />, document.getElementById("root"));



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

//root es un 'id' de un <div> q esta public\index.html
//npm start ,ctrl C
//dato curioso: si este archivo se llamara Index.js en lugar de index.js no compilaria