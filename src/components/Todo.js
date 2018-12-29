import React from 'react'
// import { SSL_OP_SINGLE_DH_USE } from 'constants';

const Todo = (props) => {
    // const todos = [
    //     {title: 'Check in to flight'},
    //     {title: 'Check out of AirBnB'},
    //     {title: 'Pack'},
    //     {title: 'Lunch'}
    // ];
    console.log(props.todo)
    
    if (!props.todo){
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
                    props.todos.map((todo, index) => {
                        if (index < 6) {
                            return (
                                <div key={index}>
                                    <img src='#' alt='Contact'></img>
                                    <h4>{todo.project_id}</h4>
                                    <p><a href={todo.url}>My Todo</a></p>
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