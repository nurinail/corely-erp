import { configureStore } from "@reduxjs/toolkit";
import  orderSlice  from "./slices/orderSlice";
import  otherSlice  from "./slices/otherSlice";
export const store = configureStore({
  reducer: {
    order:orderSlice,
    other:otherSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
