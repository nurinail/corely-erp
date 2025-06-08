import React, { useState } from "react";
import { useForm } from "react-hook-form";
import type { InventoryType } from "../../../types/types";
import classNames from "classnames";
import style from "./newInventor.module.scss";
import PentingInventoryTable from "../PendingInventoryTable";
const NewInventor = () => {
    const [inventorData,setInventorData]=useState<InventoryType[] | null>(null)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<InventoryType>({
        mode: "onSubmit",
        defaultValues: {
            cashflow: "",
            category:"",
        },
    });
      const onSubmit=(data:Omit<InventoryType,"id"|"total"|"desc">)=>{
        const inventorId=Date.now();
        const total=Number(data.count)*Number(data.prices);
        const newInventor:InventoryType={
            ...data,
            id:inventorId,
            count:Number(data.count),
            prices:Number(data.prices),
            total:total,
            desc:`${data.product} alışı`,
        };
        setInventorData(prev => [...(prev ?? []), newInventor]);
        console.log(data)
         }
  return <div className={style.newInventor_comp}>
    <h2 className={style.newInventor_comp_title}>Yeni Məhsul</h2>
    <form onSubmit={handleSubmit(onSubmit)} className={style.newInventor_comp_form}>
        <div className={style.newInventor_comp_form_item}>
            <label className={style.newInventor_comp_form_item_label} htmlFor="">Məhsul adı</label>
            <input placeholder="daxil edin" type="text" className={style.newInventor_comp_form_item_input}
             {...register("product", {
              required: { 
                value: true,
                message: "Məhsul adı daxil edin!",
              },
            })}
            />
            <p>{errors.product?.message}</p>
        </div>
        <div className={style.newInventor_comp_form_item}>
            <label className={style.newInventor_comp_form_item_label} htmlFor="">Categoriya</label>
            <select className={classNames(style.newInventor_comp_form_item_input,style.newInventor_comp_form_item_select)}
             {...register("category", {
              required: {
                value: true,
                message: "Kateqoriya daxil edin!",
              },
            })}
            >
                <option value="" disabled>---</option>
                <option value="məişət">Məişət</option>
                <option value="elektron">Elektronika</option>
            </select>
            <p>{errors.category?.message}</p>
        </div>
        <div className={style.newInventor_comp_form_item}>
            <label className={style.newInventor_comp_form_item_label} htmlFor="">Məxaric forması</label>
            <select className={classNames(style.newInventor_comp_form_item_input,style.newInventor_comp_form_item_select)} 
             {...register("cashflow", {
              required: {
                value: true,
                message: "Məxaric forması seçin!",
              },
            })}
            >
                <option value="">---</option>
                <option value="nağd">nağd</option>
                <option value="borc">borc</option>
                <option value="bank">bank hesabı</option>
            </select>
            <p>{errors.cashflow?.message}</p>
        </div>
        <div className={style.newInventor_comp_form_item}>
            <label className={style.newInventor_comp_form_item_label} htmlFor="">Miqdar</label>
            <input placeholder="daxil edin" type="number" className={style.newInventor_comp_form_item_input} 
             {...register("count", {
              required: {
                value: true,
                message: "Miqdar daxil edin!",
              },
            })}/>
            <p>{errors.count?.message}</p>
        </div>
        <div className={style.newInventor_comp_form_item}>
            <label className={style.newInventor_comp_form_item_label} htmlFor="">Qiymət</label>
            <input placeholder="daxil edin" type="number" className={style.newInventor_comp_form_item_input} 
             {...register("prices", {
              required: {
                value: true,
                message: "Qiymət daxil edin!",
              },
            })}/>
        </div>
        <div className={style.newInventor_comp_form_item}>
            <label className={style.newInventor_comp_form_item_label} htmlFor="">Tarix</label>
            <input placeholder="daxil edin" type="date" className={style.newInventor_comp_form_item_input} 
             {...register("date", {
              required: {
                value: true,
                message: "Tarix daxil edin!",
              },
            })}/>
            <p>{errors.date?.message}</p>
        </div>
        <div className={style.newInventor_comp_form_item}>
            <label className={style.newInventor_comp_form_item_label} htmlFor="">Qeyd</label>
            <textarea className={classNames(style.newInventor_comp_form_item_input,style.newInventor_comp_form_item_textarea)} 
             {...register("note", {
              required: {
                value: true,
                message: "Qeyd daxil edin!",
              },
            })}></textarea>
            <p>{errors.note?.message}</p>
        </div>
        <button className={style.newInventor_comp_form_btn} type="submit">Əlavə et</button>
    </form>
    <PentingInventoryTable setInventorData={setInventorData} inventorData={inventorData}/>

   

  </div>;
};

export default NewInventor;
