import React from "react";
import { Route, Routes } from "react-router-dom";
import style from "./appRoute.module.scss";
import NewInventor from "../../components/Inventor/CreateInventor/NewInventor";
import InventorTable from "../../components/Inventor/InventorTable";
import OrderTable from "../../components/Order/OrderTable/OrderTable";
import NewOrder from "../../components/Order/createOrder/NewOrder";
import CreateWorker from "../../components/Worker/CreateWorker";
import WorkerTable from "../../components/Worker/WorkerTable";
const AppRoute = () => {
  return (
    <div className={style.appRoute}>
      <Routes>
        <Route path="/"></Route>
        <Route path="/history"></Route>
        <Route path="/signup"></Route>
        <Route path="/signin"></Route>
        <Route path="/order" element={<NewOrder />}></Route>
        <Route path="/ordertable" element={<OrderTable />}></Route>
        <Route path="/inventor" element={<NewInventor />}></Route>
        <Route path="/finance"></Route>
        <Route path="/inventortable" element={<InventorTable />}></Route>
        <Route path="/createWorker" element={<CreateWorker/>}></Route>
        <Route path="/tableWorker" element={<WorkerTable/>}></Route>
        <Route path="*"></Route>
      </Routes>
    </div>
  );
};

export default AppRoute;
