import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { InventoryInitialState, InventoryType } from "../../types/types";

const initialState: InventoryInitialState = {
  inventory: [
    // {
    //   id: 1,
    //   name: "Laqonda", 
    //   category: "Məişət", 
    //   count: 12, 
    //   prices: 12, 
    //   total: 144,
    //   date: "12-12-2025", 
    //   method: "cash-out", 
    //   desc: "Laqonda satışı",
    // },
    // {
    //   id: 2,
    //   name: "Direl", 
    //   category: "Mobil", 
    //   count: 10, 
    //   prices: 10, 
    //   total: 100,
    //   date: "02-02-2025", 
    //   method: "bank-out", 
    //   desc: "Direl satışı",
    // },
    // {
    //   id: 3,
    //   name: "Tozsoran", 
    //   category: "Elektronik", 
    //   count: 20, 
    //   prices: 12, 
    //   total: 240,
    //   date: "03-03-2025", 
    //   method: "loan-in", 
    //   desc: "Tozsoran satışı",
    // },
    // {
    //   id: 4,
    //   name: "Paltaryuyan", 
    //   category: "Məişət", 
    //   count: 20, 
    //   prices: 9, 
    //   total: 180,
    //   date: "01-01-2025", 
    //   method: "cash-out", 
    //   desc: "Paltaryuyan satışı",
    // },
    // {
    //   id: 5,
    //   name: "Komputer", 
    //   category: "Mobil", 
    //   count: 30, 
    //   prices: 12, 
    //   total: 360,
    //   date: "03-05-2025", 
    //   method: "bank-out", 
    //   desc: "Komputer satışı",
    // },
    // {
    //   id: 6,
    //   name: "Turnik", 
    //   category: "Elektronik", 
    //   count: 25, 
    //   prices: 20, 
    //   total: 500,
    //   date: "12-03-2025", 
    //   method: "loan-out", 
    //   desc: "Turnik satışı",
    // },
  ],
};

export const inventorSlice = createSlice({
  name: "inventor",
  initialState,
  reducers: {
    addNewInventor: (
      state: InventoryInitialState,
      action: PayloadAction<InventoryType>
    ) => {
      const newInventoryItem = {
        ...action.payload,
        total: action.payload.count * action.payload.prices,
      };
      state.inventory.push(newInventoryItem);
    },
    deleteInventor: (
      state: InventoryInitialState,
      action: PayloadAction<number>
    ) => {
      state.inventory = state.inventory.filter(
        (inventor) => inventor.id !== action.payload
      );
    },
    changeInventor: (
      state: InventoryInitialState,
      action: PayloadAction<InventoryType>
    ) => {
      const inventorIndex = state.inventory.findIndex(
        (item) => item.id === action.payload.id
      );
      state.inventory[inventorIndex] ={...state.inventory[inventorIndex],...action.payload} ;
    },
  },
});

export const { addNewInventor, deleteInventor, changeInventor } =
  inventorSlice.actions;

export default inventorSlice.reducer;
