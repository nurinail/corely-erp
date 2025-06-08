import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import type { InventoryType } from "../../../types/types";
import { useDispatch } from "react-redux";
import { addNewInventor } from "../../../store/slices/inventorSlice";

type PropsInventorType = {
  inventorData: InventoryType[] | null;
  setInventorData: React.Dispatch<React.SetStateAction<InventoryType[] | null>>;
};
const PentingInventoryTable = ({
  inventorData,
  setInventorData,
}: PropsInventorType) => {
  const [isMessage, setIsMessage] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (inventorData === null || inventorData.length === 0) {
      setIsMessage(true);
    } else {
      setIsMessage(false);
    }
  }, [inventorData]);
  const handleAddToData = () => {
    inventorData &&
      inventorData.map((item) => {
        dispatch(addNewInventor(item));
        setInventorData(null);  
      });
  };
  return (
    <>
      <div className={style.pentingInventoryTable}>
        <table>
          <thead>
            <tr>
              <th>Sıra</th>
              <th>Ad</th>
              <th>Tarix</th>
              <th>Kateqoriya</th>
              <th>Məxaric forması</th>
              <th>Miqdar</th>
              <th>Qiymət</th>
              <th>Cəmi</th>
              <th>Qeyd</th>
            </tr>
          </thead>
          <tbody>
            {inventorData &&
              inventorData.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.product}</td>
                  <td>{item.date}</td>
                  <td>{item.category}</td>
                  <td>{item.cashflow}</td>
                  <td>{item.count}</td>
                  <td>{item.prices}</td>
                  <td>{item.total}</td>
                  <td title={item.note}>{item.note}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {isMessage ? (
          <p className={style.pentingInventoryTable_message}>Məhsul Yoxdur</p>
        ) : null}
      </div>
      <button onClick={handleAddToData} className={style.send_data_btn}>
        Təsdiq et
      </button>
    </>
  );
};

export default PentingInventoryTable;
