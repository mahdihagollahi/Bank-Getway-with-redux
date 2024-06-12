import { configureStore } from "@reduxjs/toolkit";
import Bankreducer from './reducer'
const store = configureStore({
    reducer:{
        Bank : Bankreducer
    }
})

export default  store ; 