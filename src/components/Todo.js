import React from 'react'
import { SSL_OP_SINGLE_DH_USE } from 'constants';

const TextDecodeOptions = (props) => {
    const todos = [
        {title: 'Check in to flight'},
        {title: 'Check out of AirBnB'},
        {title: 'Pack'},
        {title: 'Lunch'}
    ];
    
    return (
        <div style={styles.container}>
            <h3>Your Todos</h3>
            {
                todos.map((todo) => {
                    return (
                        <div>
                            <img src='#' alt='Contact'></img>
                            <h4>{todo.title}</h4>
                        </div>
                    )
                })
            }
        </div>
    );
};

const styles = {
    container: {
        width: 600,
        padding: 20,
        margin: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 1
    }
};

export default TextDecodeOptions;