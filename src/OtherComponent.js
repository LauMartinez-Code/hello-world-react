import React from 'react';

const styles = {
    backgroundColor: 'blue',
    color: 'white',
    margin: '10px'
};

export default function OtherComponent(props) {    
    return (
        <div>
            <label class="label" for="txtName">Enter Name: </label>
            <input id="txtName" type="text" placeholder="your name"/>
            <button style={styles} onClick={props.funcion}>Submit</button>
        </div>
    );
};
