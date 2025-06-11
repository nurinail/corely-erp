import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import type { WorkersType } from "../../../types/types";
import { useDispatch } from "react-redux";
import { changeWorker } from "../../../store/slices/workerSlice";

type PropsWorkerType = {
  data: WorkersType;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChangeModal = ({ data, setIsModal }: PropsWorkerType) => {
  const dispatch = useDispatch();
  const [editValue, setEditValue] = useState<WorkersType>(data);

  useEffect(() => {
    setEditValue(data);
  }, [data]);

  const handleChange = () => {
    dispatch(changeWorker(editValue));
    setIsModal(false);
  };

  return (
    <div className={style.changeModal}>
      <div className={style.changeModal_container}>
        <h2 className={style.changeModal_container_title}>İşçi Dəyişimi</h2>
        <form className={style.changeModal_container_form}>
          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>Ad və Soyad</label>
            <input
            className={style.changeModal_container_form_item_input}
              type="text"
              value={editValue.name}
              onChange={(e) =>
                setEditValue({ ...editValue, name: e.target.value })
              }
            />
          </div>
          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>Email</label>
            <input
            className={style.changeModal_container_form_item_input}
              type="email"
              value={editValue.email}
              onChange={(e) =>
                setEditValue({ ...editValue, email: e.target.value })
              }
            />
          </div>
          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>Əlaqə nömrəsi</label>
            <input
            className={style.changeModal_container_form_item_input}
              type="number"
              value={editValue.number}
              onChange={(e) =>
                setEditValue({ ...editValue, number: Number(e.target.value) })
              }
            />
          </div>
          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>Vəzifə</label>
            <input
            className={style.changeModal_container_form_item_input}
              type="text"
              value={editValue.position}
              onChange={(e) =>
                setEditValue({ ...editValue, position: e.target.value })
              }
            />
          </div>
          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>Departament</label>
            <input
            className={style.changeModal_container_form_item_input}
              type="text"
              value={editValue.department}
              onChange={(e) =>
                setEditValue({ ...editValue, department: e.target.value })
              }
            />
          </div>
          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>İşləmə yeri</label>
            <input
            className={style.changeModal_container_form_item_input}
              type="text"
              value={editValue.place}
              onChange={(e) =>
                setEditValue({ ...editValue, place: e.target.value })
              }
            />
          </div>
          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>Maaş</label>
            <input
            className={style.changeModal_container_form_item_input}
              type="number"
              value={editValue.salary}
              onChange={(e) =>
                setEditValue({
                  ...editValue,
                  salary: Number(e.target.value),
                })
              }
            />
          </div>
          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>Başlama tarixi</label>
            <input
            className={style.changeModal_container_form_item_input}
              type="date"
              value={editValue.date}
              onChange={(e) =>
                setEditValue({ ...editValue, date: e.target.value })
              }
            />
          </div>

          <div className={style.changeModal_container_form_buttons}>
            <button className={style.changeModal_container_form_buttons_item} type="button" onClick={handleChange}>
              Dəyiş  
            </button>
            <button className={style.changeModal_container_form_buttons_item} type="button" onClick={() => setIsModal(false)}>
              Ləğv et
            </button> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeModal;
