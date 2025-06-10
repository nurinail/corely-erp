import React, { useState } from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import type { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import CashInModal from "../CashModal";

const FinanceInfo = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const isAdmin=useSelector((state:RootState)=>state.other.isAdmin)
  const cashAmount = useSelector(
    (state: RootState) => state.finance.cashAmount
  );
  const bankAmount = useSelector(
    (state: RootState) => state.finance.bankAmount
  );
  const debitorAmount = useSelector(
    (state: RootState) => state.finance.debitorAmount
  );
  const liabilityAmount = useSelector(
    (state: RootState) => state.finance.liabilityAmount
  );
  const historyData = useSelector((state: RootState) => state.history.history);
  return (
    <div className={style.financeComp}>
      {isModal ? <CashInModal setIsModal={setIsModal} /> : null}
      
        <div className={style.financeComp_title}>
        <h2 className={style.financeComp_title_text}>Maliyyə Məlumatları</h2>
        {
          isAdmin?<button
          type="button"
          onClick={() => setIsModal((prev) => !prev)}
          className={style.financeComp_title_button}
        >
          Hesabı artır
        </button>
          :null
        }
        
      </div>
      
      <div className={style.financeComp_info}>
        <div className={style.financeComp_info_item}>
          <h3 className={style.financeComp_info_item_title}>Nağd pul</h3>
          <h2 className={style.financeComp_info_item_amount}>
            {cashAmount} AZN
          </h2>
        </div>
        <div className={style.financeComp_info_item}>
          <h3 className={style.financeComp_info_item_title}>Banks Hesabı</h3>
          <h2 className={style.financeComp_info_item_amount}>
            {bankAmount} AZN
          </h2>
        </div>
        <div className={style.financeComp_info_item}>
          <h3 className={style.financeComp_info_item_title}>Debitor</h3>
          <h2 className={style.financeComp_info_item_amount}>
            {debitorAmount} AZN
          </h2>
        </div>
        <div className={style.financeComp_info_item}>
          <h3
            className={classNames(
              style.financeComp_info_item_title,
              style.liability
            )}
          >
            Borc
          </h3>
          <h2
            className={classNames(
              style.financeComp_info_item_amount,
              style.liability
            )}
          >
            {liabilityAmount} AZN
          </h2>
        </div>
      </div>
      <div className={style.financeComp_history}>
        <h2 className={style.financeComp_history_title}>Son Əməliyyatlar</h2>
        <div className={style.financeComp_history_filter}>
          <select
            className={style.financeComp_history_filter_select}
            name=""
            id=""
          >
            <option value="">Hamısı</option>
            <option value="">Nağd pul</option>
            <option value="">Nisyə</option>
            <option value="">Borc</option>
          </select>
          <select
            className={style.financeComp_history_filter_select}
            name=""
            id=""
          >
            <option value="">Tarix</option>
            <option value="">Ən Yeni</option>
            <option value="">Ən Köhnə</option>
          </select>
          <select
            className={style.financeComp_history_filter_select}
            name=""
            id=""
          >
            <option value="">Məbləğ</option>
            <option value="">Ən Çox</option>
            <option value="">Ən Az</option>
          </select>
          <button className={style.financeComp_history_filter_btn}>
            Sırala
          </button>
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
              {historyData &&
                historyData.map((item) =>
                  item.desc === "Yeni İşçi qəbulu" ? null : (
                    <tr key={item.id}>
                      <td>{item.date}</td>
                      <td>{item.name}</td>
                      <td>{item.desc}</td>
                      <td>{item.total} AZN</td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
          {
            historyData.length===0?<p className={style.message}>Data yoxdur</p>:null
          }
      </div>
    </div>
  );
};

export default FinanceInfo;
