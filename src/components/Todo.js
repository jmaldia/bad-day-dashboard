import React from 'react'

const TextDecodeOptions = (props) => {
    const todos = [
        {title: 'Check in to flight'},
        {title: 'Check out of AirBnB'},
        {title: 'Pack'},
        {title: 'Lunch'}
    ];
    
    return (
        <div style={styles}>
            <h2>Your Todos</h2>
            {
                todos.map((todo) => {
                    return (
                        <div>
                            <img src='#' alt='Contact'></img>
                            <h3>{todo.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    );
};

const styles = {
    
};

export default TextDecodeOptions;