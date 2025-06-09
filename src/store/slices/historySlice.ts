import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { HistoryInitialState, HistoryType } from '../../types/types'


const initialState:HistoryInitialState = {
    history:[
  // {
  //     id: 1,
  //     name: "Laqonda", 
  //     total: 144,
  //     date: "12-12-2025", 
  //     method: "cash-out", 
  //     desc: "Laqonda satışı",
  //     transaction:"xərc"
  //   },
  //   {
  //     id: 2,
  //     name: "Direl", 
  //     total: 100,
  //     date: "02-02-2025", 
  //     method: "bank-out", 
  //     desc: "Direl satışı",
  //     transaction:"xərc"
  //   },
  //   {
  //     id: 3,
  //     name: "Tozsoran", 
  //     total: 240,
  //     date: "03-03-2025", 
  //     method: "loan-in", 
  //     desc: "Tozsoran satışı",
  //     transaction:"xərc"
  //   },
  //   {
  //     id: 4,
  //     name: "Paltaryuyan", 
  //     total: 180,
  //     date: "01-01-2025", 
  //     method: "cash-out", 
  //     desc: "Paltaryuyan satışı",
  //     transaction:"xərc"
  //   },
  //   {
  //     id: 5,
  //     name: "Komputer", 
  //     total: 360,
  //     date: "03-05-2025", 
  //     method: "bank-out", 
  //     desc: "Komputer satışı",
  //     transaction:"xərc"
  //   },
  //   {
  //     id: 6,
  //     name: "Turnik", 
  //     total: 500,
  //     date: "12-03-2025", 
  //     method: "loan-out", 
  //     desc: "Turnik satışı",
  //     transaction:"xərc"
  //   },
  //   {
  //     id: 11,
  //     name: "Turnik", 
  //     total: 200,
  //     date: "12-03-2025", 
  //     method: "cash-in", 
  //     desc: "Məhsul satışı",
  //     transaction:"gəlir"
  //   },
  //   {
  //     id: 22,
  //     name: "Turnik", 
  //     total: 300,
  //     date: "12-03-2025", 
  //     method: "bank-in", 
  //     desc: "Məhsul satışı",
  //     transaction:"gəlir"
  //   },
  //   {
  //     id: 33,
  //     name: "Turnik", 
  //     total: 400,
  //     date: "12-03-2025", 
  //     method: "debitor-in", 
  //     desc: "Məhsul satışı",
  //     transaction:"gəlir"
  //   },
  //   {
  //     id: 44,
  //     name: "Turnik", 
  //     total: 500,
  //     date: "12-03-2025", 
  //     method: "cash-in", 
  //     desc: "Məhsul satışı",
  //     transaction:"gəlir"
  //   },
  //   {
  //     id: 55,
  //     name: "Turnik", 
  //     total: 600,
  //     date: "12-03-2025", 
  //     method: "bank-in", 
  //     desc: "Məhsul satışı",
  //     transaction:"gəlir"
  //   },
  //   {
  //     id: 66,
  //     name: "Turnik", 
  //     total: 700,
  //     date: "12-03-2025", 
  //     method: "debitor-in", 
  //     desc: "Məhsul satışı",
  //     transaction:"gəlir"
  //   },
    ]
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory:(state:HistoryInitialState,action:PayloadAction<HistoryType>)=>{
        state.history.push(action.payload)
    }
    
  },
})

export const {addHistory } = historySlice.actions

export default historySlice.reducer