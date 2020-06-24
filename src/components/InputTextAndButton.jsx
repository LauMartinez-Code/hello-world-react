import React from 'react';

const styles = {
    backgroundColor: 'blue',
    color: 'white',
    margin: '5px'
};

export default function InputTextAndButton(props) {    
    return (
        <div>
            <label style={{textDecoration: 'underline blue'}} for="txtName">Enter Name:</label>
            <input id="txtName" type="text" style={{margin: '7px'}} placeholder="your name" />
            <button style={styles} onClick={props.funcion}>Submit</button>
        </div>
    );
};
