import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ImgBank: '',
    list : [],
    selectedCard:{
        id : '',
       name : '',
       number :'',
       cvv2 : '',
       password : '',
       year : '',
       month: '',
       inventory: ''

    },

    AddCard:{
        id : '',
       name : '',
       number :'',
       cvv : '',
       password : '',
       year : '',
       month: '',
       inventory: ''

    },

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
        choseCard: (state , action) =>{
            const selectedCard = state.list.find(card => card.id === action.payload.id)
            if(selectedCard) {
                state.selectedCard ={
                    id : selectedCard.id,
                    name : selectedCard.name,
                   number : selectedCard.number,
                   cvv2 : selectedCard.cvv2,
                   password : selectedCard.password,
                   year : selectedCard.year,
                   month : selectedCard.month,
                   inventory : selectedCard.inventory,
                }
            }
        },

        Cardlist : (state , action) => {
            const NewCard ={
                id:state.listlength + 1 ,
                name: action.payload.name,
                number:action.payload.number,
                password:action.payload.password,
                cvv:action.payload.cvv,
                year:action.payload.year,
                month:action.payload.month,
                inventory:action.payload.inventory
              }
              state.list.push(NewCard)
        }
    }
})

export const {setImageCart , resetImageBank , choseCard , Cardlist} = Bank.actions
export default Bank.reducer