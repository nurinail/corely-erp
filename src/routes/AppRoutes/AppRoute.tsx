import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import style from "./appRoute.module.scss";

import NewInventor from "../../components/Inventor/CreateInventor/NewInventor";
import InventorTable from "../../components/Inventor/InventorTable";
import OrderTable from "../../components/Order/OrderTable/OrderTable";
import NewOrder from "../../components/Order/createOrder/NewOrder";
import CreateWorker from "../../components/Worker/CreateWorker";
import WorkerTable from "../../components/Worker/WorkerTable";
import FinanceInfo from "../../components/Finance/FinanceInfo";
import Login from "../../pages/Login";
import SignUp from "../../pages/Home/SignUp";
import NotFound from "../../pages/NotFound";
import AdminLogin from "../../pages/AdminLogin";

const AppRoute = () => {
  const location = useLocation();

  return (
    <div className={style.appRoute}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />}/>
          <Route path="/order" element={<PageWrapper><NewOrder /></PageWrapper>} />
          <Route path="/ordertable" element={<PageWrapper><OrderTable /></PageWrapper>} />
          <Route path="/inventor" element={<PageWrapper><NewInventor /></PageWrapper>} />
          <Route path="/finance" element={<PageWrapper><FinanceInfo /></PageWrapper>} />
          <Route path="/inventortable" element={<PageWrapper><InventorTable /></PageWrapper>} />
          <Route path="/admin" element={<PageWrapper><AdminLogin /></PageWrapper>} />
          <Route path="/createWorker" element={<PageWrapper><CreateWorker /></PageWrapper>} />
          <Route path="/tableWorker" element={<PageWrapper><WorkerTable /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound/></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AppRoute;

const PageWrapper = ({ children }:any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
