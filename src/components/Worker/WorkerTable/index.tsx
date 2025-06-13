import React, { useState } from "react";
import style from "./style.module.scss";
import type { WorkersType } from "../../../types/types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { deleteWorker } from "../../../store/slices/workerSlice";
import ChangeModal from "../ChangeTable";

const WorkerTable = () => {
  const dispatch = useDispatch();
  const [isMessage, setIsMessage] = useState<boolean>(false);
  const [changeValue,setChangeValue]=useState<WorkersType>();
  const [isModal, setIsModal] = useState<boolean>(true);
  const workerData = useSelector((state: RootState) => state.worker.workers);
  const handleChange = (id: number) => {
    setIsModal(true);
      const selectedItem = workerData.find((item) => item.id === id);
      setChangeValue(selectedItem);

  };

  return (
    <div className={style.workerTable}>
        {isModal && changeValue ? (
  <ChangeModal setIsModal={setIsModal} data={changeValue} />
) : null}

      <h2 className={style.workerTable_title}>İşçilərin Siyahısı</h2>
      <div className={style.workerTable_container}>
        <table>
          <thead>
            <tr>
              <th className={style.table_series}>Sıra</th>
              <th>Ad və Soyad</th>
              <th>Email</th>
              <th>Əlaqə Nömrəsi</th>
              <th>Vəzifə</th>
              <th>Departament</th>
              <th>İşləmə yeri</th>
              <th>Maaş</th>
              <th>Başlama tarixi</th>
              <th>Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            {workerData &&
              workerData.map((item, index) => (
                <tr key={item.id}>
                  <td className={style.table_series}>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>{item.position}</td>
                  <td>{item.department}</td>
                  <td>{item.place}</td>
                  <td>{item.salary} AZN</td>
                  <td>{item.date}</td>
                  <td className={style.table_buttons}>
                    <button
                      className={style.table_buttons_item}
                      onClick={() => dispatch(deleteWorker(item.id))}
                    >
                      Sil
                    </button>
                    <button
                      onClick={() => handleChange(item.id)}
                      className={style.table_buttons_item}
                    >
                      Dəyiş
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {workerData.length === 0 ? 
        <p className={style.workerTable_message}>Məlumat Yoxdur</p>
       : null}
    </div>
  );
};

export default WorkerTable;
