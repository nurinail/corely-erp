import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import type { RootState } from "../../store/store";
import type { LoginType } from "../../types/types";
import { handleLoading } from "../../store/slices/otherSlice";

const AdminLogin = () => {
  const users = useSelector((state: RootState) => state.authentication.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const {
    register, 
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginType>({
    mode: "onSubmit",
    defaultValues: {},
  });
  const onSubmit = (data: LoginType) => {
    users.map((item: LoginType) => {
      if (item.username === data.username && item.password === data.password) {
        dispatch(handleLoading(true));
        setTimeout(() => {
          navigate("/finance");
          dispatch(handleLoading(false));
        }, 1000);
        setIsCorrect(false);
      } else {
        setIsCorrect(true);
      }
    });
  };
  return (
    <div className={style.loginSignUp}>
      <div className={style.loginSignUp}>
        <div className={style.loginSignUp_box}>
          <h2 className={style.loginSignUp_box_logo}>Corely</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={style.loginSignUp_box_form}
          >
            <h2 className={style.loginSignUp_box_form_title}>Admin</h2>
            <div className={style.loginSignUp_box_form_item}>
              <label
                className={style.loginSignUp_box_form_item_label}
                htmlFor="username"
              >
                Username
              </label>
              <input
                className={classNames(style.loginSignUp_box_form_item_input,errors.username&&style.active_border)}
                type="text"
                id="username"
                placeholder="username daxil edin"
                {...register("username", {
                  required: {
                    value: true,
                    message: "username adı daxil edin!",
                  },
                })}
              />
              <p className={style.loginSignUp_box_form_item_message}>{errors.username?.message}</p>
            </div>
            <div className={style.loginSignUp_box_form_item}>
              <label
                className={style.loginSignUp_box_form_item_label}
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={classNames(style.loginSignUp_box_form_item_input,errors.username&&style.active_border)}
                type="password"
                placeholder="Password"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password daxil edin!",
                  },
                })}
              />
              <p className={style.loginSignUp_box_form_item_message}>{errors.password?.message}</p>
            </div>
            <p className={style.isCorrectt}>
              {isCorrect ? "Şifrə səhvdir" : null}
            </p>
            <div className={style.loginSignUp_box_form_link}>
              <Link
                className={style.loginSignUp_box_form_link_item}
                to={"/signup"}
              >
                Şifrəni unutmusan?
              </Link>
              <Link
                className={style.loginSignUp_box_form_link_item}
                to={"/signup"}
              >
                Yeni hesab yarat
              </Link>
            </div>
            <button className={style.loginSignUp_box_form_btn} type="submit">
              Giriş
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
