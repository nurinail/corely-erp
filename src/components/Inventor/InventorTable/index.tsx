import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import ChangeModal from "../ChangeModal";
import type { InventoryType } from "../../../types/types";
import { deleteInventor } from "../../../store/slices/inventorSlice";

const InventorTable = () => {
  const isAdmin = useSelector((state: RootState) => state.other.isAdmin);
  const dispatch=useDispatch();
  const [isMessage, setIsMessage] = useState<boolean>(true);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [changeValue, setChangeValue] = useState<InventoryType>();
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
  const handleChange = (id: number) => {
  setIsModal(true);
  const selectedItem = inventorData.find((item) => item.id === id);
  setChangeValue(selectedItem);
};
  return (
    <div className={style.inventorTable}>
      {isModal ? <ChangeModal setIsModal={setIsModal} data={changeValue}/> : null}
      <h2 className={style.inventorTable_title}>Məhsul Siyahısı</h2>
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
                    <button
                      onClick={() => handleChange(item.id)}
                      className={style.table_buttons_item}
                    >
                      Dəyiş
                    </button>
                    <button onClick={()=>dispatch(deleteInventor(item.id))} className={style.table_buttons_item}>Sil</button>
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
