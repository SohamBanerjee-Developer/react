import { useContext, createContext } from "react";
export const TodoContext = createContext({
    todos: [
        {
            id : 1,
            title : 'Buy groceries',
            completed : false,
        }
    ],
    addTodo : (title) =>{},
    updateTodo : (title, id)=>{},
    deleteTodo : (id)=>{},
    toggleCompleted : (id)=>{},
})
export function  useTodo(){
    return useContext(TodoContext)
}
export const TodoContextProvider = TodoContext.Provider;