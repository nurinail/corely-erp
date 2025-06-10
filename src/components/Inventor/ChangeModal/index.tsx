import React, { useState } from "react";
import style from "./style.module.scss";
import type { InventoryType } from "../../../types/types";

//  id:number;
//     product:string;//
//     category:string;//
//     count:number;//
//     prices:number;//
//     total:number;
//     date:string;//
//     cashflow:string;//
//     desc:string;
//     note:string;
type PropsInventorType={
    data:InventoryType
}
const ChangeModal = ({data}:PropsInventorType) => {
    const [editValue,setEditValue]=useState<InventoryType>(data);
  return (
    <div className={style.changeModal}>
      <div className={style.changeModal_container}>
        <h2 className={style.changeModal_container_title}>Məhsul Dəyişimi</h2>
        <form className={style.changeModal_container_form}>
          <div className={style.changeModal_container_form_item}>
            <label
              htmlFor=""
              className={style.changeModal_container_form_item_label}
            >Məhsul</label>
            <input
              type="text"
              className={style.changeModal_container_form_item_input}
              value={editValue.product}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, product: e.target.value })}
            />
          </div>
          <div className={style.changeModal_container_form_item}>
            <label
              htmlFor=""
              className={style.changeModal_container_form_item_label}
            >Məhsul</label>
            <input
              type="text"
              className={style.changeModal_container_form_item_input}
              value={editValue.product}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, product: e.target.value })}
            />
          </div>
          <div className={style.changeModal_container_form_item}>
            <label
              htmlFor=""
              className={style.changeModal_container_form_item_label}
            >Məhsul</label>
            <input
              type="text"
              className={style.changeModal_container_form_item_input}
              value={editValue.product}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, product: e.target.value })}
            />
          </div>
          <div className={style.changeModal_container_form_item}>
            <label
              htmlFor=""
              className={style.changeModal_container_form_item_label}
            >Məhsul</label>
            <input
              type="text"
              className={style.changeModal_container_form_item_input}
              value={editValue.product}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, product: e.target.value })}
            />
          </div>
          <div className={style.changeModal_container_form_item}>
            <label
              htmlFor=""
              className={style.changeModal_container_form_item_label}
            >Məhsul</label>
            <input
              type="text"
              className={style.changeModal_container_form_item_input}
              value={editValue.product}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, product: e.target.value })}
            />
          </div>
          <div className={style.changeModal_container_form_item}>
            <label
              htmlFor=""
              className={style.changeModal_container_form_item_label}
            >Məhsul</label>
            <input
              type="text"
              className={style.changeModal_container_form_item_input}
              value={editValue.product}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, product: e.target.value })}
            />
          </div>
          <div className={style.changeModal_container_form_item}>
            <label
              htmlFor=""
              className={style.changeModal_container_form_item_label}
            >Məhsul</label>
            <input
              type="text"
              className={style.changeModal_container_form_item_input}
              value={editValue.product}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, product: e.target.value })}
            />
          </div>
          <div className={style.changeModal_container_form_item}>
            <label
              htmlFor=""
              className={style.changeModal_container_form_item_label}
            >Məhsul</label>
            <input
              type="text"
              className={style.changeModal_container_form_item_input}
              value={editValue.product}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, product: e.target.value })}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeModal;
