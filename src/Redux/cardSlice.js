
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    list : [],
    historyList : [],
    selectedCard : {},
   nameCard : '',
   numberCard : '',
   yearCard : '',
   monthCard : '',
   cardCash : '',
   idCard : '',


cvv2Card: '',

passwordCart: '',

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

        setCardDetails : (state , action ) => {
            return{...state , ...action.payload}
        }

        // selectCard: (state, action) => {
        //     state.selectedCard = action.payload;
        // },
       

       },
})

export const {addCard ,setCardDetails} = cardSlice.actions
export default cardSlice.reducer


