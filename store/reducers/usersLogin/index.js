import { loginUsers } from "./operations/loginUserFetch"
import { createReducer } from "@reduxjs/toolkit"


const userReducer = createReducer({}, (builder) => {
    builder
        .addCase(loginUsers.fulfilled, (_, action) => {
            return action.payload
        })
})

export default userReducer