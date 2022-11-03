import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { DELETE_TODO } from "../types";


export const deletePosts = createAsyncThunk(
    DELETE_TODO,
    async (id) => {
        try {
            const res = await axios.delete(`https://dummyjson.com/todos/${id}`)
            return res.data.id
        } catch (e) {
            console.log(e);
        }
    }
)
