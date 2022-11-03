import { getPosts } from "./operations/getTodoFetch"
import { createReducer } from "@reduxjs/toolkit"
import { deletePosts } from "./operations/deleteTodoFetch"
import { AddNewTodos } from "./operations/addNewTodoFetch"


const getPostsReducer = createReducer([], (builder) => {
    builder
        .addCase(getPosts.fulfilled, (_, action) => {
            return action.payload
        })
        .addCase(deletePosts.fulfilled, (state, action) => {
            const newState = [...state]
            console.log(action.payload);
            const index = newState.findIndex(item => item.id === action.payload)
            newState.splice(index, 1)
            return newState
        })
        .addCase(AddNewTodos.fulfilled, (state, action) => {
            if (action.payload) {
                return [action.payload, ...state]
            }
        })
})

export default getPostsReducer