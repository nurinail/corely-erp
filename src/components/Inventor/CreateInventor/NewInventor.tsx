import React, { useState } from "react";
import { useForm } from "react-hook-form";
import type { HistoryType, InventoryType } from "../../../types/types";
import classNames from "classnames";
import style from "./newInventor.module.scss";
import PentingInventoryTable from "../PendingInventoryTable";
import { useDispatch } from "react-redux";
import { addHistory } from "../../../store/slices/historySlice";
import { handleCalculate } from "../../../store/slices/financeSlice";
const NewInventor = () => {
  const dispatch=useDispatch();
  const [inventorData, setInventorData] = useState<InventoryType[] | null>(
    null
  );
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InventoryType>({
    mode: "onSubmit",
    defaultValues: {
      method: "",
      category: "",
    },
  });
  const onSubmit = (data: Omit<InventoryType, "id" | "total" | "desc">) => {
    const inventorId = Date.now();
    const total = Number(data.count) * Number(data.prices);
    const newInventor: InventoryType = {
      ...data,
      id: inventorId,
      count: Number(data.count),
      prices: Number(data.prices),
      total: total,
      desc: `${data.product} alışı`,
    };
    const historyItem:HistoryType={
      ...data,
      id:inventorId,
      desc:"Mal alışı",
      transaction:data.method,
      total:Number(data.count) * Number(data.prices),
      name:data.product
      
    }
    setInventorData((prev) => [...(prev ?? []), newInventor]);
    dispatch(addHistory(historyItem));
    dispatch(handleCalculate({
      amount:total,
      method:data.method
    }))
    reset();
    

  };
  return (
    <div className={style.newInventor_comp}>
      <h2 className={style.newInventor_comp_title}>Yeni Məhsul</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={style.newInventor_comp_form}
      >
        <div className={style.newInventor_comp_form_item}>
          <label className={style.newInventor_comp_form_item_label} htmlFor="">
            Məhsul adı
          </label>
          <input
            placeholder="daxil edin"
            type="text"
            className={classNames(style.newInventor_comp_form_item_input,errors.product&&style.active)}
            {...register("product", {
              required: {
                value: true,
                message: "Məhsul adı daxil edin!",
              },
            })}
          />
          <p className={style.error_message}>{errors.product?.message}</p>
        </div>
        <div className={style.newInventor_comp_form_item}>
          <label className={style.newInventor_comp_form_item_label} htmlFor="">
            Categoriya
          </label>
          <select
            className={classNames(
              classNames(style.newInventor_comp_form_item_input,errors.category&&style.active),
              style.newInventor_comp_form_item_select
            )}
            {...register("category", {
              required: {
                value: true,
                message: "Kateqoriya daxil edin!",
              },
            })}
          >
            <option value="" disabled>
              ---
            </option>
            <option value="məişət">Məişət</option>
            <option value="elektron">Elektronika</option>
          </select>
          <p className={style.error_message}>{errors.category?.message}</p>
        </div>
        <div className={style.newInventor_comp_form_item}>
          <label className={style.newInventor_comp_form_item_label} htmlFor="">
            Məxaric forması
          </label>
          <select
            className={classNames(
              classNames(style.newInventor_comp_form_item_input,errors.method&&style.active),
              style.newInventor_comp_form_item_select
            )}
            {...register("method", {
              required: {
                value: true,
                message: "Məxaric forması seçin!",
              },
            })}
          >
            <option value="">---</option>
            <option value="cash-out">nağd</option>
            <option value="loan-in">borc</option>
            <option value="bank-out">bank hesabı</option>
          </select>
          <p className={style.error_message}>{errors.method?.message}</p>
        </div>
        <div className={style.newInventor_comp_form_item}>
          <label className={style.newInventor_comp_form_item_label} htmlFor="">
            Miqdar
          </label>
          <input
            placeholder="daxil edin"
            type="number" 
            className={classNames(style.newInventor_comp_form_item_input,errors.count&&style.active)}
            {...register("count", {
              required: {
                value: true,
                message: "Miqdar daxil edin!",
              },
            })}
          />
          <p className={style.error_message}>{errors.count?.message}</p>
        </div>
        <div className={style.newInventor_comp_form_item}>
          <label className={style.newInventor_comp_form_item_label} htmlFor="">
            Qiymət
          </label>
          <input
            placeholder="daxil edin"
            type="number"
            className={classNames(style.newInventor_comp_form_item_input,errors.prices&&style.active)}
            {...register("prices", {
              required: {
                value: true,
                message: "Qiymət daxil edin!",
              },
            })}
          />
          <p className={style.error_message}>{errors.prices?.message}</p>
        </div>
        <div className={style.newInventor_comp_form_item}>
          <label className={style.newInventor_comp_form_item_label} htmlFor="">
            Tarix
          </label>
          <input
            placeholder="daxil edin"
            type="date"
            className={classNames(style.newInventor_comp_form_item_input,errors.date&&style.active)}
            {...register("date", {
              required: {
                value: true,
                message: "Tarix daxil edin!",
              },
            })}
          />
          <p className={style.error_message}>{errors.date?.message}</p>
        </div>
        <div className={style.newInventor_comp_form_item}>
          <label className={style.newInventor_comp_form_item_label} htmlFor="">
            Qeyd
          </label>
          <textarea
            className={classNames(
              classNames(style.newInventor_comp_form_item_input,errors.note&&style.active),
              style.newInventor_comp_form_item_textarea
            )}
            {...register("note", {
              required: {
                value: true,
                message: "Qeyd daxil edin!",
              },
            })}
          ></textarea>
          <p className={style.error_message}>{errors.note?.message}</p>
        </div> 
        <button className={style.newInventor_comp_form_btn} type="submit">
          Əlavə et
        </button>
      </form>
      <PentingInventoryTable
        setInventorData={setInventorData}
        inventorData={inventorData}
      />
    </div>
  );
};

export default NewInventor;
