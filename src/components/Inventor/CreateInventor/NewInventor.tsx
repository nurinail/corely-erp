import React from "react";
import classNames from "classnames";
import style from "./newInventor.module.scss";
const NewInventor = () => {
  return <div className={style.newInventor_comp}>
    <h2 className={style.newInventor_comp_title}>Yeni Məhsul</h2>
    <form className={style.newInventor_comp_form}>
        <div className={style.newInventor_comp_form_item}>
            <label className={style.newInventor_comp_form_item_label} htmlFor="">Məhsul adı</label>
            <input placeholder="daxil edin" type="text" className={style.newInventor_comp_form_item_input} />
        </div>
        <div className={style.newInventor_comp_form_item}>
            <label className={style.newInventor_comp_form_item_label} htmlFor="">Categoriya</label>
            <select className={classNames(style.newInventor_comp_form_item_input,style.newInventor_comp_form_item_select)} >
                <option value="">---</option>
                <option value="">Məişət</option>
                <option value="">Elektronika</option>
            </select>
        </div>
        <div className={style.newInventor_comp_form_item}>
            <label className={style.newInventor_comp_form_item_label} htmlFor="">Məxaric forması</label>
            <select className={classNames(style.newInventor_comp_form_item_input,style.newInventor_comp_form_item_select)} >
                <option value="">---</option>
                <option value="">nağd</option>
                <option value="">borc</option>
                <option value="">bank hesabı</option>
            </select>
        </div>
        <div className={style.newInventor_comp_form_item}>
            <label className={style.newInventor_comp_form_item_label} htmlFor="">Miqdar</label>
            <input placeholder="daxil edin" type="number" className={style.newInventor_comp_form_item_input} />
        </div>
        <div className={style.newInventor_comp_form_item}>
            <label className={style.newInventor_comp_form_item_label} htmlFor="">Qiymət</label>
            <input placeholder="daxil edin" type="number" className={style.newInventor_comp_form_item_input} />
        </div>
        <div className={style.newInventor_comp_form_item}>
            <label className={style.newInventor_comp_form_item_label} htmlFor="">Tarix</label>
            <input placeholder="daxil edin" type="date" className={style.newInventor_comp_form_item_input} />
        </div>
        <div className={style.newInventor_comp_form_item}>
            <label className={style.newInventor_comp_form_item_label} htmlFor="">Qeyd</label>
            <textarea className={classNames(style.newInventor_comp_form_item_input,style.newInventor_comp_form_item_textarea)} ></textarea>
        </div>
        <button className={style.newInventor_comp_form_btn} type="submit">Əlavə et</button>
    </form>
   

  </div>;
};

export default NewInventor;
