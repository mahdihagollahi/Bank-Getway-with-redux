
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    list : [],
    historyList : [],
    selectedCard : {},
   
    // cartCash: null,
//   idCart: "",
//     nameCard : '',
//     numberCard : '',
//     cvv2Card : '',
//     yearCard : '',
//     monthCard: '',
//     passwordCard: '',
//     cardCash: null
}



const cardSlice = createSlice({
    name : "card",
    initialState,
    reducers:{
        addCard : (state , action) => {
            state.list.push({
                id : state.list.length +1,
                ...action.payload
            })
        },

       

        // selectCard: (state, action) => {
        //     state.selectedCard = action.payload;
        // },

       },
})

export const {addCard} = cardSlice.actions
export default cardSlice.reducer


