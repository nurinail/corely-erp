import { deleteOrder } from "../../../store/slices/orderSlice";
import type { RootState } from "../../../store/store";
import type { OrderType } from "../../../types/types";
import style from "./orderTable.module.scss";
import { useDispatch, useSelector } from "react-redux";

type OrderPrompt = {
  order: OrderType;
  index: number;
};

const OrderTableItem = ({ order, index }: OrderPrompt) => {
  const dispatch = useDispatch();
  const isAdmin=useSelector((state:RootState)=>state.other.isAdmin)
  return (
  <tr>
      <td>{index}</td>
      <td>{order.id}</td>
      <td>{order.product}</td>
      <td>{order.cashflow}</td>
      <td>{order.date}</td>
      <td>{order.total}</td>
     
      {isAdmin?<td>
        <button
          onClick={() => dispatch(deleteOrder(order.id))}
          className={style.orderTable_sect_item_button}
        >
          Sil
        </button>
      </td>:null}
      
    </tr>
    
  );
};

export default OrderTableItem;
