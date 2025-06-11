import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import type { InventoryType } from "../../../types/types";
import { useDispatch } from "react-redux";
import { changeInventor } from "../../../store/slices/inventorSlice";

type PropsInventorType = {
  data: InventoryType; 
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChangeModal = ({ data, setIsModal }: PropsInventorType) => {
  const dispatch = useDispatch();
  const [editValue, setEditValue] = useState<InventoryType>(data);

  useEffect(() => {
    setEditValue((prev) => ({
      ...prev,
      total: Number(prev.count) * Number(prev.prices),
    }));
  }, [editValue.count, editValue.prices]);

  const handleChange = () => {
    dispatch(changeInventor(editValue));
    setIsModal(false);
  };

  return (
    <div className={style.changeModal}>
      <div className={style.changeModal_container}>
        <h2 className={style.changeModal_container_title}>Məhsul Dəyişimi</h2>
        <form className={style.changeModal_container_form}>
          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>
              Məhsul
            </label>
            <input
              type="text"
              className={style.changeModal_container_form_item_input}
              value={editValue.product}
              onChange={(e) =>
                setEditValue({ ...editValue, product: e.target.value })
              }
            />
          </div>

          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>
              Kateqoriya
            </label>
            <input
              type="text"
              className={style.changeModal_container_form_item_input}
              value={editValue.category}
              onChange={(e) =>
                setEditValue({ ...editValue, category: e.target.value })
              }
            />
          </div>

          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>
              Miqdar
            </label>
            <input
              type="number"
              className={style.changeModal_container_form_item_input}
              value={editValue.count}
              onChange={(e) =>
                setEditValue({
                  ...editValue,
                  count: Number(e.target.value),
                })
              }
            />
          </div>

          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>
              Qiymət
            </label>
            <input
              type="number"
              className={style.changeModal_container_form_item_input}
              value={editValue.prices}
              onChange={(e) =>
                setEditValue({
                  ...editValue,
                  prices: Number(e.target.value),
                })
              }
            />
          </div>

          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>
              Cəmi
            </label>
            <input
              type="number"
              className={style.changeModal_container_form_item_input}
              value={editValue.total}
              disabled
            />
          </div>

          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>
              Tarix
            </label>
            <input
              type="date"
              className={style.changeModal_container_form_item_input}
              value={editValue.date}
              onChange={(e) =>
                setEditValue({ ...editValue, date: e.target.value })
              }
            />
          </div>

          <div className={style.changeModal_container_form_item}>
            <label className={style.changeModal_container_form_item_label}>
              Qeyd
            </label>
            <input
              type="text"
              className={style.changeModal_container_form_item_input}
              value={editValue.note}
              onChange={(e) =>
                setEditValue({ ...editValue, note: e.target.value })
              }
            />
          </div>

          <div className={style.changeModal_container_form_buttons}>
            <button
              type="button"
              onClick={handleChange}
              className={style.changeModal_container_form_buttons_item}
            >
              Dəyiş
            </button>
            <button
              type="button"
              onClick={() => setIsModal(false)}
              className={style.changeModal_container_form_buttons_item}
            >
              Ləğv et
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeModal;
