import React, { useEffect, useState } from "react";
import classNames from "classnames";
import style from "./newOrder.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../../store/slices/orderSlice";
import type { OrderType } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../../store/store";
import { handleCalculate } from "../../../store/slices/financeSlice";
import { addHistory } from "../../../store/slices/historySlice";

const NewOrder = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [isMessage, setIsMessage] = useState<boolean>(false);
    const [isMessageboolean, setIsMessageboolean] = useState<boolean>(false);
 
  const [messageValue, setMessageValue] = useState<string>(
    "Satış miqdarı cari miqdardan az ola bilməz!"
  );
    const inventors = useSelector(
    (state: RootState) => state.inventor.inventory
  );

  const [ordersData, setOrdersData] = useState<OrderType[] | null>(null);
  useEffect(() => {
    if (ordersData && ordersData.length === 0) {
      setIsMessage(true);
    } else if (ordersData === null) {
      setIsMessage(true);
    } else {
      setIsMessage(false);
    }
  }, [ordersData]);
  const handleDelete = (id: number) => {
    setOrdersData((prev) =>
      prev ? prev.filter((item) => item.id !== id) : prev
    );
  };
  const { 
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OrderType>({
    mode: "onSubmit",
    defaultValues: {
      customer: "",
      method: "",
    },
  });
  const onSubmit = (data: Omit<OrderType, "id" | "total" | "desc">) => {
    const orderId = Date.now();
    const newOrder: OrderType = {
      ...data,
      id: orderId,
      count: Number(data.count),
      prices: Number(data.prices),
      total: Number(data.count) * Number(data.prices),
      desc: `${data.product} satışı`,
    };
    inventors.map((item) => {
      if (item.product === data.product && data.count > item.count) {
        setIsMessageboolean(true);
      } else{
        setOrdersData((prev) => (prev ? [...prev, newOrder] : [newOrder]));
        reset();
        setIsMessageboolean(false);
        dispatch(addHistory({
          id:orderId,
          desc:"Məhsul Satışı",
          date:data.date,
          name:data.product,
          method:data.method,
          total:Number(data.count) * Number(data.prices),
          transaction:"Məhsul satışı"
        }))
        dispatch(handleCalculate({
          amount:Number(data.count) * Number(data.prices),
          method:data.method,
        }))
      }
    })
  };
  const addToData = () => {
    ordersData
      ? ordersData.map((item) => {
          dispatch(addOrder(item));
        })
      : null;
    setOrdersData(null);
  };
  return (
    <div className={style.newOrderComp}>
      <div className={style.newOrderComp_title}>
        <h2 className={style.newOrderComp_title_text}>Satışlar</h2>
        <button type="submit" onClick={()=>navigate("/ordertable")} className={style.newOrderComp_title_btn}>satış cədvəli</button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={style.newOrderComp_form}
      >
        <div className={style.newOrderComp_form_item}>
          <label className={style.newOrderComp_form_item_label} htmlFor="">
            Məhsul adı
          </label>
          <select
            className={classNames(style.newOrderComp_form_item_input,errors.product&&style.active)}
            {...register("product", {
              required: {
                value: true,
                message: "Məhsul adı daxil edin!",
              },
            })}
            
          >
            <option defaultValue="" value="">---</option>
            {
              inventors.map((item)=>(
                <option value={item.product}>{item.product}</option>
              ))
            }
          </select>
          <p className={style.error_message}>{errors.product?.message}</p>
        </div>
        <div className={style.newOrderComp_form_item}>
          <label className={style.newOrderComp_form_item_label} htmlFor="">
            Müştəri
          </label>
          <input
            className={classNames(style.newOrderComp_form_item_input,errors.customer&&style.active)}
            type="text"
            {...register("customer", {
              required: {
                value: true,
                message: "Müştəri adı daxil edin!",
              },
            })}
            placeholder="daxil edin"
          />
                    <p className={style.error_message}>{errors.customer?.message}</p>
        </div>
        <div className={style.newOrderComp_form_item}>
          <label className={style.newOrderComp_form_item_label} htmlFor="">
            Miqdar
          </label>
          <input
            className={classNames(style.newOrderComp_form_item_input,errors.count&&style.active)}
            type="number"
            placeholder="daxil edin"
            {...register("count", {
              required: {
                value: true,
                message: "Miqdar daxil edin!",
              },
            })}
          />
                    <p className={style.error_message}>{errors.count?.message}</p>
        </div>
        <div className={style.newOrderComp_form_item}>
          <label className={style.newOrderComp_form_item_label} htmlFor="">
            Qiymət
          </label>
          <input
            className={classNames(style.newOrderComp_form_item_input,errors.prices&&style.active)}
            type="number"
            placeholder="daxil edin"
            {...register("prices", {
              required: {
                value: true,
                message: "Qiymət daxil edin!",
              },
            })}
          />
                      <p className={style.error_message}>{errors.prices?.message}</p>
        </div>
        <div className={style.newOrderComp_form_item}>
          <label className={style.newOrderComp_form_item_label} htmlFor="">
            Mədaxil forması
          </label>
          <select
            className={classNames(style.newOrderComp_form_item_input,errors.method&&style.active)}
            id=""
            {...register("method", {
              required: {
                value: true,
                message: "Mədaxil formanı seçin!",
              },
            })}
          >
            <option value="" disabled>
              ---
            </option>
            <option value="cash-in">nağd</option>
            <option value="debitor-in">nisyə</option>
            <option value="bank-in">bank hesabı</option>
          </select>
                    <p className={style.error_message}>{errors.method?.message}</p>
        </div>
        <div className={style.newOrderComp_form_item}>
          <label className={style.newOrderComp_form_item_label} htmlFor="">
            Tarix
          </label>
          <input
            className={classNames(style.newOrderComp_form_item_input,errors.date&&style.active)}
            type="date"
            {...register("date", {
              required: {
                value: true,
                message: "Tarix daxil edin!",
              },
            })}
          />
                    <p className={style.error_message}>{errors.date?.message}</p>
        </div>
        <div className={style.newOrderComp_form_item}>
          <label className={style.newOrderComp_form_item_label} htmlFor="">
            Qeyd
          </label>
          <textarea
            className={classNames(
              classNames(style.newOrderComp_form_item_input,errors.note&&style.active),
              style.newOrderComp_form_item_textarea
            )}
            id=""
            {...register("note", {
              required: {
                value: true,
                message: "Qeyd əlavə edin!",
              },
            })}
          ></textarea>
                    <p className={style.error_message}>{errors.note?.message}</p>
        </div>
        <button type="submit" className={style.newOrderComp_form_btn}>
          Əlavə et
        </button>
      </form>
      <div className={style.newOrderComp_table_container}>
        <table>
          <thead>
            <tr>
              <th>Sıra</th>
              <th>Məhsul adı</th>
              <th>Müştəri</th>
              <th>Miqdar</th>
              <th>Qiymət</th>
              <th>Cəmi</th>
              <th>Pulun mədaxili</th>
              <th>Tarix</th>
              <th>Qeyd</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            {ordersData &&
              ordersData.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.product}</td>
                  <td>{item.customer}</td>
                  <td>{item.count}</td>
                  <td>{item.prices}</td>
                  <td>{item.total} AZN</td>
                  <td>{item.method}</td>
                  <td>{item.date}</td>
                  <td title={item.note}>{item.note}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className={style.delete_btn}
                    >
                      sil
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {isMessage ? (
          <p className={style.newOrderComp_table_container_message}>
            Satış yoxdur
          </p>
        ) : null}
      </div>
      {
        isMessageboolean?<p style={{color:"red",position:"absolute",top:"64%",fontSize:"16px",left:"28%"}}>{messageValue}</p>:null
      }
      <button
        onClick={addToData}
        className={style.newOrderComp_table_container_save_btn}
      >
        Təsdiq et
      </button>
    </div>
  );
};

export default NewOrder;
