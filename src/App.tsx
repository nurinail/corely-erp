import { Menu } from "antd";
import "./App.css";
import Header from "./components/Header/Header";
import AppRoute from "./routes/AppRoutes/AppRoute";
import { IoHomeSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FaCreditCard, FaWarehouse } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isAdmin=useSelector((state:RootState)=>state.other.isAdmin)
  return (
    <div className="app">
      {isLoading ? <Loading /> : null}
      <Header />
      <div className="dashboard">
        <Menu
          className="dashboard_menu"
          onClick={({ key }) => {
            navigate(key);
          }}
          items={[
            {
              label: "Ana Səhifə",
              key: "/",
              icon: <IoHomeSharp />,
            },
            {
              label: "SatışCədvəli",
              key: "/ordertable",
              icon: <SlBasket />,
            },
            {
              label: "Satış",
              key: "/order",
              icon: <SlBasket />,
            },
            {
              label: "Maliyə",
              key: "/finance",
              icon: <FaCreditCard />,
            },
            {
              label: "Anbar",
              key: "/inventor",
              icon: <FaWarehouse />,
            },
            {
              label: "Anbar listi",
              key: "/inventortable",
              icon: <FaWarehouse />,
            },
            {
              label: isAdmin?"İşçilər":null,
              key: isAdmin?"/createWorker":"",
              icon: isAdmin?<IoIosPeople />:null,
            },
            {
              label: isAdmin?"İşçilər Siyahı":null,
              key: isAdmin?"/tableWorker":"",
              icon: isAdmin?<IoIosPeople />:null,
            },
          ]}
        ></Menu>

        <AppRoute />
      </div>
    </div>
  );
}

export default App;
