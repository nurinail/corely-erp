import React, { useState } from "react";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import type { DepositeType, HistoryType } from "../../../types/types";
import { useDispatch } from "react-redux";
import { addDeposite } from "../../../store/slices/financeSlice";
import { addHistory } from "../../../store/slices/historySlice";

type ModalType = {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const CashInModal = ({ setIsModal }: ModalType) => {
  const dispatch = useDispatch();
  const [isMessage, setIsMessage] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DepositeType>({
    mode: "onSubmit",
    defaultValues: {
      method: "",
    },
  });
  const onSubmit = (data: DepositeType) => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();

    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");

    const formattedDate = `${day}-${month}-${year}`;
    const newDeposite: DepositeType = {
      ...data,
      amount: Number(data.amount),
    };
    const historyDeposite: HistoryType = {
      ...data,
      id: Date.now(),
      total: Number(data.amount),
      desc: `${data.method}-a pul mədaxili`,
      date: formattedDate,
      transaction: "Mədaxil",
      name: "Mədaxil",
      cashflow:data.method,
    };
    dispatch(addHistory(historyDeposite));
    setTimeout(() => {
      setIsModal(false);
    }, 1500);
    reset();
    setIsMessage(true);
    dispatch(addDeposite(newDeposite));
  };

  return (
    <div className={style.cashInModal}>
      <div className={style.cashInModal_container}>
        <h2 className={style.cashInModal_container_title}>Depozit et</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={style.cashInModal_container_form}
          action=""
        >
          <div className={style.cashInModal_container_form_item}>
            <label
              className={style.cashInModal_container_form_item_label}
              htmlFor="method"
            >
              Hesab növü
            </label>
            <select
              className={style.cashInModal_container_form_item_input}
              id=""
              {...register("method", {
                required: {
                  value: true,
                  message: "Method seçmək vacibdir!",
                },
              })}
            >
              <option value="" disabled>
                Seçin
              </option>
              <option value="bank-in">Bank hesabına</option>
              <option value="cash-in">Nağd pul</option>
            </select>
            <p style={{ color: "red" }}>{errors.method?.message}</p>
          </div>
          <div className={style.cashInModal_container_form_item}>
            <label
              className={style.cashInModal_container_form_item_label}
              htmlFor="amount"
            >
              Məbləğ
            </label>
            <input
              className={style.cashInModal_container_form_item_input}
              type="number"
              placeholder="AZN"
              {...register("amount", {
                required: {
                  value: true,
                  message: "Məbləğ daxil edin!",
                },
                min: {
                  value: 1,
                  message: "Ən azı 1 AZN daxil edilməlidir!",
                },
              })}
            />
            <p style={{ color: "red" }}>{errors.amount?.message}</p>
          </div>
          {isMessage ? (
            <p
              style={{ color: "green" }}
              className={style.cashInModal_container_form_message}
            >
              Pul əlavə edildi
            </p>
          ) : null}
          <div className={style.cashInModal_container_form_button}>
            <button
              className={style.cashInModal_container_form_button_item}
              type="submit"
            >
              Depozit et
            </button>
            <button
              className={style.cashInModal_container_form_button_item}
              type="submit"
              onClick={() => setIsModal(false)}
            >
              Ləğv et
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CashInModal;
