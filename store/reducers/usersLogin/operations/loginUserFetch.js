import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Router from "next/router";

import { LOGIN } from "../types";

export const loginUsers = createAsyncThunk(
    LOGIN,
    async (values) => {
        try {
            const res = await axios.post('https://dummyjson.com/auth/login', values)
            await Router.push("/todo")
            return res.data
        } catch (e) {
            console.log(e);
        }
    }
)

