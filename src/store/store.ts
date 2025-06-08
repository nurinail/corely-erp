import { configureStore } from "@reduxjs/toolkit";
import  orderSlice  from "./slices/orderSlice";
import  otherSlice  from "./slices/otherSlice";
import  inventorSlice  from "./slices/inventorSlice";
export const store = configureStore({
  reducer: {
    order:orderSlice,
    other:otherSlice,
    inventor:inventorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
