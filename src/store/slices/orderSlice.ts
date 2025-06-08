import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CustomerType, OrderInitialState, OrderType } from "../../types/types";

const initialState: OrderInitialState = {
  orders: [],
  customers: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder:(state:OrderInitialState,action:PayloadAction<OrderType>)=>{
      state.orders.push(action.payload)
    },
    deleteOrder:(state:OrderInitialState,action:PayloadAction<number>)=>{
      state.orders=state.orders.filter((item)=>item.id!==action.payload)
    },
    handleFilter:(state:OrderInitialState,action:PayloadAction<string>)=>{
     
      
    },
    addCustomer:(state:OrderInitialState,action:PayloadAction<CustomerType>)=>{
      state.customers.push(action.payload)
    }
  },
});

export const {addOrder,deleteOrder,handleFilter,addCustomer} = orderSlice.actions;

export default orderSlice.reducer;
