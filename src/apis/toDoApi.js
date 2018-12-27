import TodoistApiREST from "todoist-api-ts";

import { keys } from '../utils/config';

const todoist = new TodoistApiREST(keys[0].todoistKey);

export const getAllTodos = () =>
    todoist.getAllTasks()
        .then(res => res)
        .catch(err => console.error(err));