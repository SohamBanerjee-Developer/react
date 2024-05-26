import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos : [{id : 1, text : " hello world"}]
}
export const todoSlice = createSlice({
    name: 'todo',// the key is noy user defined
    initialState,// the key is noy user defined
    reducers: {// the key is noy user defined
        addTodo: (state, action)=>{// the parameters are not userdefined
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{// the parameters are not userdefined
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer