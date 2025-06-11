import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { HistoryInitialState, HistoryType } from '../../types/types'


const initialState:HistoryInitialState = {
    history:[]
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