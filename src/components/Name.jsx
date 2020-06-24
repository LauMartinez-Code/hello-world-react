import React, {useState} from 'react';
import InputTextAndButton from './InputTextAndButton';

export default function Name() {    
    const [name, setName] = useState('Lautaro'); //equivalente a las propiedades Get y Set
    
    const updateName = () => {
        let txtnombre = document.getElementById("txtName").value;
        
        if (!txtnombre == '') { setName(txtnombre); }
    }  

    return (    //actualiza todo lo que esta despues de <Name/> pero no lo anterior
        <span>
            <span><strong>{name}!!</strong></span>                
            <InputTextAndButton funcion={updateName}/>
        </span>
    );
};