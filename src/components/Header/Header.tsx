import React, { useState } from "react";
import classNames from "classnames";
import logo from "../../assets/images/corelyLogo.png";
import style from "./header.module.scss";
import { MdAdminPanelSettings } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { changeRol } from "../../store/slices/otherSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const isAdmin=useSelector((state:RootState)=>state.other.isAdmin)
  const [isModal,setIsModal]=useState<boolean>(false)
  return (
    <div className={style.headerComponent}>
     
      <ul className={style.headerComponent_role}>
        {isAdmin? <li className={classNames(style.headerComponent_role_item,style.headerComponent_role_item_admin)}><MdAdminPanelSettings className={style.headerComponent_role_item_icon}/></li>:null
       
      }
      <li className={style.headerComponent_role_log_out}><button type="button" onClick={()=>navigate("/login")} className={style.headerComponent_role_log_out_btn}><CiLogout/></button></li>
        <li className={classNames(style.headerComponent_role_item,style.headerComponent_role_item_last)}>
          <button type="button" onClick={()=>setIsModal(prev=>!prev)} className={classNames(style.headerComponent_role_item_btn,style.headerComponent_role_item_btn_menu_icon)}><CiMenuKebab className={style.headerComponent_role_item_btn_icon}/></button>
          {isModal?<div className={style.headerComponent_role_item_modal}>
            <button onClick={()=>{dispatch(changeRol(true));setIsModal(false);navigate("/")}} className={style.headerComponent_role_item_modal_btn}><MdAdminPanelSettings/> Admin</button>
            <button onClick={()=>{dispatch(changeRol(false));setIsModal(false)}} className={style.headerComponent_role_item_modal_btn}><FaUser/> User</button>
          </div>:null}
          
          </li>
      </ul>
    </div>
  );
};

export default Header;
