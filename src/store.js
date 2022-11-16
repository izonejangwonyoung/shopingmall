import {useState} from "react";
import {configureStore, createSlice} from "@reduxjs/toolkit";

let user = createSlice({
    name: 'user',
    initialState: '홍은채'
})


let stock = createSlice({
        name: 'stock',
        initialState: [1, 23, 4]
    }
)

let cartList = createSlice({
    name: 'cartList',
    initialState:[
        {id: 0, name: '허윤진', count: 2},
        {id:1, name:'김채원', count:1},
        {id:2,name:'홍은채',count:1},
        {id:3,name:'카즈하',count: 4},
        {id:4,name:'미야와키 사쿠라',count: 407},
        {id:5,name:'오해원',count: 68},
        {id:6,name:'설윤아',count: 33},
        {id:7,name:'최윤진',count: 113},
        {id:8,name:'장규진',count: 3},
    ],
    reducers:{
        changeName(state){
            state[6]=({id:6,name:'귀여운 설윤아',count:44})
        }
    }
})
export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cartList:cartList.reducer
    }
})
export let {changeName}=cartList.actions