import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import type { WorkersType } from "../../../types/types";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addWorker } from "../../../store/slices/workerSlice";

const CreateWorker = () => {
    const dispatch=useDispatch();
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WorkersType>({
    mode: "onSubmit",
    defaultValues: {
     department:"",
     place:"",
    },
  });
  const onSubmit=(data:Omit<WorkersType,"id"|"desc">)=>{
    const workerId=Date.now();
    const newWorker:WorkersType={
        ...data,
        id:workerId,
        number:Number(data.number),
        salary:Number(data.salary),
        desc:"İşə qəbul",
    }
    dispatch(addWorker(newWorker));
    reset();
  }
 
  return <div className={style.createWorker}>
    <h2 className={style.createWorker_title}>Yeni İşçi</h2>
    <form onSubmit={handleSubmit(onSubmit)} className={style.createWorker_form} >
        <div className={style.createWorker_form_item}>
            <label className={style.createWorker_form_item_label} htmlFor="">Ad və Soyad</label>
            <input className={classNames(style.createWorker_form_item_input,errors.name&&style.active_border)} type="text" placeholder="Daxil et"
             {...register("name", {
              required: {
                value: true,
                message: "Ad və Soyad daxil edin!",
              },
            })} />
            <p className={style.createWorker_form_item_message}>{errors.name?.message}</p>
        </div>
        <div className={style.createWorker_form_item}>
            <label className={style.createWorker_form_item_label} htmlFor="">Email</label>
            <input className={classNames(style.createWorker_form_item_input,errors.email&&style.active_border)} type="email" placeholder="Daxil et"
             {...register("email", {
              required: {
                value: true,
                message: "Email daxil edin!",
              },
            })} />
            <p className={style.createWorker_form_item_message}>{errors.email?.message}</p>
        </div>
        <div className={style.createWorker_form_item}>
            <label className={style.createWorker_form_item_label} htmlFor="">Nömrə</label>
            <input className={classNames(style.createWorker_form_item_input,errors.number&&style.active_border)} type="text" placeholder="Daxil et"
             {...register("number", {
              required: {
                value: true,
                message: "Nömrə daxil edin!",
              },
            })} />
            <p className={style.createWorker_form_item_message}>{errors.position?.message}</p>
        </div>
        <div className={style.createWorker_form_item}>
            <label className={style.createWorker_form_item_label} htmlFor="">Vəzifə</label>
            <input className={classNames(style.createWorker_form_item_input,errors.position&&style.active_border)} type="text" placeholder="Daxil et"
             {...register("position", {
              required: {
                value: true,
                message: "Vəzifə daxil edin!",
              },
            })} />
            <p className={style.createWorker_form_item_message}>{errors.position?.message}</p>
        </div>
        <div className={style.createWorker_form_item}>
            <label className={style.createWorker_form_item_label} htmlFor="">Tarix</label>
            <input className={classNames(style.createWorker_form_item_input,errors.date&&style.active_border)} type="date"
             {...register("date", {
              required: {
                value: true,
                message: "Tarix daxil edin!",
              },
            })} />
            <p className={style.createWorker_form_item_message}>{errors.position?.message}</p>
        </div>
        <div className={style.createWorker_form_item}>
            <label className={style.createWorker_form_item_label} htmlFor="">Departament</label>
            <select
             className={classNames(style.createWorker_form_item_input,errors.department&&style.active_border)}
             {...register("department", {
              required: {
                value: true,
                message: "Department seçin!",
              },
            })}  id="">
              <option value="" disabled>---</option>
              <option value="İnsan Resursları">İnsan Resursları (HR)</option>
              <option value="Maliyyə">Maliyyə</option>
              <option value="Mühasibat">Mühasibat</option>
              <option value="Marketinq">Marketinq</option>
              <option value="Satış">Satış</option>
              <option value="Müştəri Xidmətləri">Müştəri Xidmətləri</option>
              <option value="İnformasiya Texnologiyaları">
                İnformasiya Texnologiyaları (IT)
              </option>
              <option value="Logistika">Logistika</option>
              <option value="Hüquq">Hüquq</option>
              <option value="Tədqiqat və İnkişaf&d">
                Tədqiqat və İnkişaf (R&D)
              </option>
              <option value="İctimai Əlaqələr">İctimai Əlaqələr (PR)</option>
              <option value="İdarəetmə">İdarəetmə</option>
              <option value="Daxili Nəzarət">Daxili Nəzarət</option>
            </select>
            <p className={style.createWorker_form_item_message}>{errors.department?.message}</p>
        </div>
        <div className={style.createWorker_form_item}>
            <label className={style.createWorker_form_item_label} htmlFor="">Departament</label>
            <select
             className={classNames(style.createWorker_form_item_input,errors.place&&style.active_border)}
             {...register("place", {
              required: {
                value: true,
                message: "İş yeri seçin!",
              },
            })}  id="">
            <option value="">---</option>
            <option value="Hibrid">Hibrid</option>
            <option value="Uzaqdan">Uzaqdan</option>
            <option value="Ofis">Ofis</option>
            </select>
            <p className={style.createWorker_form_item_message}>{errors.place?.message}</p>
        </div>
        <div className={style.createWorker_form_item}>
            <label className={style.createWorker_form_item_label} htmlFor="">Əmək Haqqı</label>
            <input className={classNames(style.createWorker_form_item_input,errors.salary&&style.active_border)} type="number" placeholder="Daxil et"
             {...register("salary", {
              required: {
                value: true,
                message: "ƏməkHaqqı daxil edin!",
              },
              min:{
                value:345,
                message:"Əmək Haqqı 345 AZN-dən az ola bilməz"
              }
            })} />
            <p className={style.createWorker_form_item_message}>{errors.salary?.message}</p>
        </div>
        <button className={style.createWorker_form_btn} type="submit">Əlavə et</button>
    </form>
    
  </div>;
};

export default CreateWorker;
