import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ImgBank: null,
}




const Bank = createSlice({
    name : 'Bank',
    initialState,
    reducers:{
        setImageCart: (state , action)=> {
            state.ImgBank = action.payload
        },
        resetImageBank : (state ) => {
            state.ImgBank = ''
        },
    }
})

export const{setImageCart ,resetImageBank } = Bank.actions;
export default Bank.reducer
