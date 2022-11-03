import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { ADD_NEW_TODO } from "../types";


export const AddNewTodos = createAsyncThunk(
    ADD_NEW_TODO,
    async (values, thunkAPI, id) => {
        try {
            const user = thunkAPI.getState().userLogin
            const res = await axios.post(`https://dummyjson.com/todos/add`, {
                todo: values.todo,
                completed: false,
                userId: user.id,
            })
            console.log(res.data);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }
)