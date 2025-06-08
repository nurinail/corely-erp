import React from "react";
import { Spin } from "antd";
import style from "./loading.module.scss";

const Loading: React.FC = () => {
  return (
    <div >
      <Spin size="large" className={style.loadingCom}/>;
    </div>
  );
};

export default Loading;
