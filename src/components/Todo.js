import React from 'react'
// import { SSL_OP_SINGLE_DH_USE } from 'constants';

const Todo = (props) => {
    // const todos = [
    //     {title: 'Check in to flight'},
    //     {title: 'Check out of AirBnB'},
    //     {title: 'Pack'},
    //     {title: 'Lunch'}
    // ];
    // console.log(props.todo)
    
    if (!props.todos){
        return (
            <div style={styles.container}>
                <h3>Your Todos</h3>
                
            </div>
        );
    } else {
        return (
            <div style={styles.container}>
                <h3>Your Todos</h3>
                {
                    props.todos.filter(todo => todo.due).map((todo, index) => {
                        if (index < 5) {
                            return (
                                <div key={index}>
                                <a href={todo.url} target="_blank" rel="noopener noreferrer"><h4>{todo.content}</h4></a>
                                </div>
                            )
                        } else {
                            return undefined;
                        }
                    })
                }
            </div>
        )
    }

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

export default Todo;