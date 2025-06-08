import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

const InventorTable = () => {
  const isAdmin = useSelector((state: RootState) => state.other.isAdmin);
  const [isMessage, setIsMessage] = useState<boolean>(true);
  const inventorData = useSelector(
    (state: RootState) => state.inventor.inventory
  );
  useEffect(() => {
    if (inventorData.length === 0) {
      setIsMessage(true);
    } else {
      setIsMessage(false);
    }
  }, [inventorData]);
  return (
    <div className={style.inventorTable}>
      <table>
        <thead>
          <tr>
            <th className={style.table_series}>Sıra</th>
            <th>Sifariş Nömrəsi</th>
            <th>Kateqoriya</th>
            <th>Məxaric Forması</th>
            <th>Tarix</th>
            <th>Miqdar</th>
            <th>Qiymət</th>
            <th>Cəmi</th>
            <th>Qeyd</th>
            {isAdmin ? <th>Əməliyyat</th> : null}
          </tr>
        </thead>
        <tbody>
          {inventorData &&
            inventorData.map((item, index) => (
              <tr>
                <td className={style.table_series}>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>{item.cashflow}</td>
                <td>{item.date}</td>
                <td>{item.count}</td>
                <td>{item.prices}</td>
                <td>{item.total}</td>
                <td title={item.note} className={style.table_note}>
                  {item.note}
                </td>
                {isAdmin ? (
                  <td className={style.table_buttons}>
                    <button className={style.table_buttons_item}>Sil</button>
                    <button className={style.table_buttons_item}>Dəyiş</button>
                  </td>
                ) : null}
              </tr>
            ))}
        </tbody>
      </table>
      {isMessage ? (
        <p className={style.inventorTable_message}>Məlumat Yoxdur</p>
      ) : null}
    </div>
  );
};

export default InventorTable;
