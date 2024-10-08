//* Import Necessary functions from Redux toolkit
import { createSlice, nanoid } from "@reduxjs/toolkit";

//* Define the initial state for the Todo Slice
const initialState = {
    todos: [{
        id: 1,
        text: "Hello"
    }]
}

//* Create a slice for the todos, which includes the initial state, reducers and actions
export const todoSlice = createSlice({
    name: "todo", //? Name of the slice
    initialState, // ? Initial State for the Slice
    reducers: { //? Reducer function to handle Actions
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, newText} = action.payload
            const existingTodo = state.todos.find(todo =>  todo.id === id)

            if(existingTodo){
                existingTodo.text = newText
            }
        },
    }
})

// * Export actions generated by createSlice
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// * Export the reducer to be used in Store.
export default todoSlice.reducer