import { configureStore } from "@reduxjs/toolkit";
import Bankreducer from './bankSlice'
import cardSlice from "./cardSlice";

const store = configureStore({
    reducer:{
        Bank : Bankreducer,
        card : cardSlice
    }
})

export default  store ; 