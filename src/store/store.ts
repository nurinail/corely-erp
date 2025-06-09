import { configureStore } from "@reduxjs/toolkit";
import  orderSlice  from "./slices/orderSlice";
import  otherSlice  from "./slices/otherSlice";
import  inventorSlice  from "./slices/inventorSlice";
import  workerSlice  from "./slices/workerSlice";
import  financeSlice  from "./slices/financeSlice";
import  historySlice  from "./slices/historySlice";
import  authenticationSlice  from "./slices/authenticationSlice";
export const store = configureStore({
  reducer: {
    order:orderSlice,
    other:otherSlice,
    inventor:inventorSlice,
    worker:workerSlice,
    finance:financeSlice,
    history:historySlice,
    authentication:authenticationSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
