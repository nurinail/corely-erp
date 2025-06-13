import React, { useState } from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import type { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import CashInModal from "../CashModal";

const FinanceInfo = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<string>("");
  const [amountFilter, setAmountFilter] = useState<string>("");
  const [isMessage,setIsMessage]=useState<boolean>(false)

  const isAdmin = useSelector((state: RootState) => state.other.isAdmin);
  const cashAmount = useSelector((state: RootState) => state.finance.cashAmount);
  const bankAmount = useSelector((state: RootState) => state.finance.bankAmount);
  const debitorAmount = useSelector((state: RootState) => state.finance.debitorAmount);
  const liabilityAmount = useSelector((state: RootState) => state.finance.liabilityAmount);
  const historyData = useSelector((state: RootState) => state.history.history);

  const filteredHistory = historyData
    ?.filter((item) => {
      if (item.desc === "Yeni İşçi qəbulu") return false;
      if (typeFilter === "cash-in" && !(item.method === "cash-in" || item.method === "cash-out")) return false;
      if (typeFilter === "debitor-in" && item.method !== "debitor-in") return false;
      if (typeFilter === "loan-in" && item.method !== "loan-in") return false;
      return true;
    })
    ?.sort((a, b) => {
      if (dateFilter === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (dateFilter === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (amountFilter === "max") return b.total - a.total;
      if (amountFilter === "min") return a.total - b.total;
      return 0;
    });

  return (
    <div className={style.financeComp}>
      {isModal && <CashInModal setIsModal={setIsModal} />}

      <div className={style.financeComp_title}>
        <h2 className={style.financeComp_title_text}>Maliyyə Məlumatları</h2>
        {isAdmin && (
          <button
            type="button"
            onClick={() => setIsModal((prev) => !prev)}
            className={style.financeComp_title_button}
          >
            Hesabı artır
          </button>
        )}
      </div>

      <div className={style.financeComp_info}>
        <div className={style.financeComp_info_item}>
          <h3 className={style.financeComp_info_item_title}>Nağd</h3>
          <h2 className={style.financeComp_info_item_amount}>{cashAmount} AZN</h2>
        </div>
        <div className={style.financeComp_info_item}>
          <h3 className={style.financeComp_info_item_title}>Banks Hesabı</h3>
          <h2 className={style.financeComp_info_item_amount}>{bankAmount} AZN</h2>
        </div>
        <div className={style.financeComp_info_item}>
          <h3 className={style.financeComp_info_item_title}>Debitor</h3>
          <h2 className={style.financeComp_info_item_amount}>{debitorAmount} AZN</h2>
        </div>
        <div className={style.financeComp_info_item}>
          <h3 className={classNames(style.financeComp_info_item_title, style.liability)}>Borc</h3>
          <h2 className={classNames(style.financeComp_info_item_amount, style.liability)}>
            {liabilityAmount} AZN
          </h2>
        </div>
      </div>

      <div className={style.financeComp_history}>
        <h2 className={style.financeComp_history_title}>Son Əməliyyatlar</h2>
        <div className={style.financeComp_history_filter}>
          <select
            className={style.financeComp_history_filter_select}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">Hamısı</option>
            <option value="cash-in">cash-in pul</option>
            <option value="debitor-in">Nisyə</option>
            <option value="loan-in">Borc</option>
          </select>

          <select
            className={style.financeComp_history_filter_select}
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option value="">Tarix</option>
            <option value="newest">Ən Yeni</option>
            <option value="oldest">Ən Köhnə</option>
          </select>

          <select
            className={style.financeComp_history_filter_select}
            onChange={(e) => setAmountFilter(e.target.value)}
          >
            <option value="">Məbləğ</option>
            <option value="max">Ən Çox</option>
            <option value="min">Ən Az</option>
          </select>

         
        </div>

        <div className={style.financeComp_history_container}>
          <table className={style.financeComp_history_table}>
            <thead>
              <tr className={style.thead_row}>
                <th>Tarix</th>
                <th>Ad</th>
                <th>Təsvir</th>
                <th>Məbləğ</th>
              </tr>
            </thead>
            <tbody>
              {filteredHistory &&  
                filteredHistory.map((item) => (
                  <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>
                    <td>{item.total} AZN</td>
                  </tr>
                ))
             
                }
            </tbody>
          </table>
          {filteredHistory.length===0?<p className={style.message}>Data yoxdur</p>:null}
        </div>
      </div>
    </div>
  );
};

export default FinanceInfo;
