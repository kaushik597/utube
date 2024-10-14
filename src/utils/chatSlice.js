import { createSlice } from "@reduxjs/toolkit";
import { CHAT_OFFSET_COUNT } from "./constants";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addChatMessages:(state,action)=>{
            state.messages.splice(CHAT_OFFSET_COUNT,1)
            state.messages.unshift(action.payload)

        }
    }
})

export const {addChatMessages}=chatSlice.actions;
export default chatSlice.reducer;