import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { WorkerInitialState, WorkersType } from "../../types/types";

const initialState: WorkerInitialState = {
  workers: [],
};

export const workerSlice = createSlice({
  name: "worker",
  initialState,
  reducers: {
    addWorker: (
      state: WorkerInitialState,
      action: PayloadAction<WorkersType>
    ) => {
      state.workers.push(action.payload);
    },
    deleteWorker: (
      state: WorkerInitialState,
      action: PayloadAction<number>
    ) => {
      state.workers = state.workers.filter(
        (item) => item.id !== action.payload
      );
    },
    changeWorker: (
      state: WorkerInitialState,
      action: PayloadAction<WorkersType>
    ) => {
      const workerIndex = state.workers.findIndex(
        (item) => item.id === action.payload.id
      );
      state.workers[workerIndex] = {...state.workers[workerIndex],...action.payload};
    },
  },
});

export const { addWorker, deleteWorker, changeWorker } = workerSlice.actions;

export default workerSlice.reducer;
