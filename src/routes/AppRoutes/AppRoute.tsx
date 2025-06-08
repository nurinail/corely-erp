import React from "react";
import { Route, Routes } from "react-router-dom";
import style from "./appRoute.module.scss";
import NewInventor from "../../components/Inventor/CreateInventor/NewInventor";
import NewOrder from "../../components/NewOrder/NewOrder";
import OrderTable from "../../components/OrderTable/OrderTable";
const AppRoute = () => {
  return (
    <div className={style.appRoute}>
      <Routes>
        <Route path="/"></Route>
        <Route path="/history"></Route>
        <Route path="/signup"></Route>
        <Route path="/signin"></Route>
        <Route path="/order" element={<NewOrder/>}></Route>
        <Route path="/ordertable" element={<OrderTable/>}></Route>
        <Route path="/finance"></Route>
        <Route path="/inventor" element={<NewInventor/>}></Route>
        <Route path="/hr"></Route>
        <Route path="*"></Route>
      </Routes>
    </div>
  );
};

export default AppRoute;
