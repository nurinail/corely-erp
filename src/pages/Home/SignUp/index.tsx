import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import style from "./style.module.scss";
import logo from "../../../assets/images/corelyLogo.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import type { LoginType } from "../../../types/types";
import type { RootState } from "../../../store/store";
import { addUser } from "../../../store/slices/authenticationSlice";
interface SignUpType extends LoginType {
  repeatpassword: string;
}
const SignUp = () => {
  const users = useSelector((state: RootState) => state.authentication.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCorrectPassword, setIsCorrectPassword] = useState<boolean>(false);
  const [isUserRepeat, setIsUserRepeat] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpType>({
    mode: "onSubmit",
    defaultValues: {},
  });
  const onSubmit = (data: SignUpType) => {
    if (data.password !== data.repeatpassword) {
      setIsCorrectPassword(true);
    } else {
      users.map((item) => {
        if (
          item.password === data.password &&
          item.username === data.username
        ) {
          setIsUserRepeat(true);
        } else {
          setIsUserRepeat(false);
          const newUser: LoginType = {
            username: data.username,
            password: data.password,
          };
          dispatch(addUser(newUser));
          navigate("/");
          reset();
        }
      });
    }
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
            <h2 className={style.loginSignUp_box_form_title}>
              Yeni Hesab Yarat
            </h2>
            <div className={style.loginSignUp_box_form_item}>
              <label
                className={style.loginSignUp_box_form_item_label}
                htmlFor="username"
              >
                Yeni username adı
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
              <p className={style.error_message}>{errors.username?.message}</p>
            </div>
            <div className={style.loginSignUp_box_form_item}>
              <label
                className={style.loginSignUp_box_form_item_label}
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={classNames(style.loginSignUp_box_form_item_input,errors.password&&style.active_border)}
                type="password"
                placeholder="Password"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Şifrəni daxil edin!",
                  },
                  minLength: {
                    value: 8,
                    message: "Şifrə ən azı 8 simvoldan ibarət olmalıdır!",
                  },
                  validate: {
                    hasUpperCase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Şifrə ən azı bir böyük hərf içerməlidir!",
                    hasNumber: (value) =>
                      /\d/.test(value) || "Şifrə ən azı bir rəqəm içerməlidir!",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.password?.message}</p>
            </div>
            <div className={style.loginSignUp_box_form_item}>
              <label
                className={style.loginSignUp_box_form_item_label}
                htmlFor="password"
              >
                Passwordu təkrar daxil edin
              </label>
              <input
                className={classNames(style.loginSignUp_box_form_item_input,errors.repeatpassword&&style.active_border)}
                type="password"
                placeholder="Təkrar password"
                id="password"
                {...register("repeatpassword", {
                  required: {
                    value: true,
                    message: "təkrar passwordu daxil edin!",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.repeatpassword?.message}</p>
              {isCorrectPassword ? (
                <p style={{ color: "red" }}>Təkrar Şifrə Səhvdir</p>
              ) : null}
            </div>
            {isUserRepeat ? (
              <p
                style={{ width: "100%", textAlign: "center" }}
                className="isUserRepeatt"
              >
                Belə hesab mövcuddur
              </p>
            ) : null}
            <Link className={style.have_account} to={"/login"}>
              Hesabın var?
            </Link>
            <button
              className={classNames(
                style.loginSignUp_box_form_btn,
                style.signUp_box_form_btn
              )}
              type="submit"
            >
              Hesab Yarat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
