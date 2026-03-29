import { Form, useActionData, Link } from "react-router";
import ErrorMessage from "../../Components/Auth/ErrorMessage";
import AuthTitle from "../../Components/Auth/AuthTitle";
import { useEffect, useRef } from "react";

const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

const Login = () => {
  const actionData = useActionData();
  const submitBtnRef = useRef();

  useEffect(() => {
    submitBtnRef.current.disabled = false;
  }, [actionData]);

  return (
    <>
      <AuthTitle
        linkTo={"/register"}
        title={"Войти в Аккаунт"}
        linkText={"Нет аккаунта? Зарегистрируйтесь"}
      />
      {actionData && <ErrorMessage message={actionData.non_field_errors} />}
      <Form
        className="space-y-4"
        method="post"
        onSubmit={() => (submitBtnRef.current.disabled = true)}
      >
        <div className="space-y-3">
          <input
            id="username"
            name="username"
            type="text"
            required
            autoComplete="username"
            className={inputClass}
            placeholder="Имя пользователя"
          />
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className={inputClass}
            placeholder="Пароль"
          />
        </div>
        <div className="space-y-3 pt-2">
          <button
            ref={submitBtnRef}
            className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 transition-colors"
          >
            Войти
          </button>
          <Link
            to="/"
            className="w-full flex justify-center py-3 px-4 border border-gray-200 text-sm font-medium rounded-xl text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors"
          >
            Продолжить как гость
          </Link>
        </div>
      </Form>
    </>
  );
};

export default Login;
