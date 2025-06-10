import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notfound}>
      <div className={styles.content}>
        <h1>404</h1>
        <p>Səhifə tapılmadı</p>
        <button onClick={() => navigate("/")}>Ana Səhifəyə qayıt</button>
      </div>
    </div>
  );
};

export default NotFound;
