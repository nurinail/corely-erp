import { Menu } from "antd";
import "./App.scss";
import Header from "./components/Header/Header";
import AppRoute from "./routes/AppRoutes/AppRoute";
import { IoHomeSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FaCreditCard, FaWarehouse } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

function App() {
  const navigate = useNavigate();
  const isLoading = useSelector((state: RootState) => state.other.loading);
  const isAdmin = useSelector((state: RootState) => state.other.isAdmin);
  const menuItems = [
    {
      label: "Ana Səhifə",
      key: "/",
      icon: <IoHomeSharp />,
    },
    {
      label: "Maliyyə",
      key: "/finance",
      icon: <FaCreditCard />,
    },
    {
      label: "Satışlar",
      key: "/sub-order",
      icon: <SlBasket />,
      children: [
        {
          label: "Yeni Satış",
          key: "order",
        },
        {
          label: "Satış Cədvəli",
          key: "ordertable",
        },
      ],
    },
    {
      label: "Anbar İdarəsi",
      key: "/sub-inventor",
      icon: <FaWarehouse />,
      children: [
        {
          key: "/inventor",
          label: "Yeni Məhsul",
        },
        {
          key: "/inventortable",
          label: "Məhsul Siyahısı",
        },
      ],
    },
  ];

  if (isAdmin) {
    menuItems.push({
      label: "İnsan Resursları",
      key: "/createWorker",
      icon: <IoIosPeople />,
      children: [
        {
          label: "Yeni İşçi Əlavə et",
          key: "/createWorker",
        },
        {
          label: "İşçi Siyahısı",
          key: "/tableWorker",
        },
      ],
    });
  }

  return (
    <div className="app">
      {isLoading ? <Loading /> : null}

      <div className="dashboard_menu">
        <button className="dashboard_menu_logo">Corely</button>
        <Menu
          className="dashboard_menu_item"
          mode="inline"
          onClick={({ key }) => navigate(key)}
          items={menuItems}
        ></Menu>
      </div>
      <div className="dashboard_layout">
        <Header />
        <AppRoute />
      </div>
    </div>
  );
}

export default App;
