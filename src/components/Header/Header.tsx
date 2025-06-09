import React, { useState } from "react";
import classNames from "classnames";
import logo from "../../assets/images/corelyLogo.png";
import style from "./header.module.scss";
import { MdAdminPanelSettings } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isModal,setIsModal]=useState<boolean>(false)
  return (
    <div className={style.headerComponent}>
     
      <ul className={style.headerComponent_role}>
        {isAdmin?null:
        <li className={style.headerComponent_role_item}><MdAdminPanelSettings className={style.headerComponent_role_item_icon}/> Admin</li>
      }
      <li className={style.headerComponent_role_log_out}><button type="button" onClick={()=>navigate("/login")} className={style.headerComponent_role_log_out_btn}><CiLogout/></button></li>
        <li className={style.headerComponent_role_item}>
          <button type="button" onClick={()=>setIsModal(prev=>!prev)} className={style.headerComponent_role_item_btn}><CiMenuKebab className={style.headerComponent_role_item_btn_icon}/></button>
          {isModal?<div className={style.headerComponent_role_item_modal}>
            <button className={style.headerComponent_role_item_modal_btn}><MdAdminPanelSettings/> Admin</button>
            <button className={style.headerComponent_role_item_modal_btn}><FaUser/> User</button>
          </div>:null}
          
          </li>
      </ul>
    </div>
  );
};

export default Header;
