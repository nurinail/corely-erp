import React, { useEffect, useState } from "react";
import style from "./orderTable.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import type { OrderType } from "../../../types/types";
import OrderTableItem from "./OrderTableItem";

const OrderTable = () => {
  const orders = useSelector((state: RootState) => state.order.orders);
  const isAdmin=useSelector((state:RootState)=>state.other.isAdmin)
  const [isMessage,setIsMessage]=useState<boolean>(false);
  useEffect(() => {
  if (orders.length === 0) {
    setIsMessage(true);
  } else {
    setIsMessage(false);
  }
}, [orders]);
  return   <div className={style.orderTable}>
      <div className={style.orderTable_title}>
        <h2 className={style.orderTable_title_text}>Satışlar</h2>
        <button className={style.orderTable_title_btn}>yeni satış</button>
      </div>
      <div className={style.orderTable_filter}>
        <input
          className={style.orderTable_filter_item}
          type="text" 
          placeholder="Axtar..."
        />
        <select className={style.orderTable_filter_item} name="" id="">
          <option value="" disabled>
            Ödənişə görə
          </option>
          <option value="cash-in">nağd</option>
          <option value="debitor-in">nisyə</option>
          <option value="bank-in">bank</option>
        </select>
      </div>
      <div className={style.orderTable_container}>
        <table className={style.orderTable_container_table}>
          <thead className={style.orderTable_container_table_head}>
            <tr>
              <th>Sıra</th>
              <th>Sifariş №</th>
              <th>Məhsul</th>
              <th>Ödəniş növü</th>
              <th>Tarix</th>
              <th>Məbləğ</th>
              {isAdmin?<th>Əməliyyat</th>:null}
              
            </tr>
          </thead>
          <tbody>
            {orders&&orders.map((item: OrderType, index:number) => (
                <OrderTableItem key={item.id} index={index + 1} order={item} />))}
          </tbody>
        </table>
        {isMessage?<p className={style.orderTable_container_message}>Satış Yoxdur</p>:null}
      </div>
    </div>;
};

export default OrderTable;
