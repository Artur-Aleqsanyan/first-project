import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_TODO } from "../types";


export const getPosts = createAsyncThunk(
    GET_TODO,
    async () => {
        try {
            const res = await axios.get(`https://dummyjson.com/todos`)
            return res.data.todos
        } catch (e) {
            console.log(e);
        }
    }
)
