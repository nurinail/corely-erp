import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { OtherInitialState } from '../../types/types'


const initialState:OtherInitialState = {
  loading:false,
  isAdmin:true,
}

export const otherSlice = createSlice({
  name: 'other',
  initialState,
  reducers: {
   handleLoading:(state:OtherInitialState,action:PayloadAction<boolean>)=>{
    state.loading=action.payload
   },
   changeRol:(state:OtherInitialState,action:PayloadAction<boolean>)=>{
    state.isAdmin=action.payload
   }
  },
})

export const { handleLoading} = otherSlice.actions

export default otherSlice.reducer