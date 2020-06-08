import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';

const App = () => {    
    return (
        <div>
            <Welcome/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
            // (componente a mostrar , donde se muestra)

//root es un 'id' de un <div> q esta en public\index.html
//npm start ,ctrl C
//dato curioso: si este archivo se llamara Index.js en lugar de index.js no compilaria
