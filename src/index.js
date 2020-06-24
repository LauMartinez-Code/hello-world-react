import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome';

const App = () => {    
    return (
        <div>
            <Welcome/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
            // (componente a mostrar , donde se muestra)

//root es un 'id' de un <div> q esta en public/index.html