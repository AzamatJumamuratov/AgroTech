import { Form, useActionData, Link } from "react-router";
import ErrorMessage from "../../Components/Auth/ErrorMessage";
import AuthTitle from "../../Components/Auth/AuthTitle";
import { useEffect, useRef } from "react";

const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

const Register = () => {
  const actionData = useActionData();
  const submitBtnRef = useRef();

  useEffect(() => {
    if (submitBtnRef.current) {
      submitBtnRef.current.disabled = false;
    }
  }, [actionData]);

  return (
    <>
      <AuthTitle
        linkTo={"/login"}
        title={"Регистрация"}
        linkText={"Уже есть аккаунт? Войти"}
      />
      {actionData && actionData.non_field_errors && (
        <ErrorMessage message={actionData.non_field_errors} />
      )}
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
            className={inputClass}
            placeholder="Имя пользователя"
          />
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="Email"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              id="first_name"
              name="first_name"
              type="text"
              required
              className={inputClass}
              placeholder="Имя"
            />
            <input
              id="last_name"
              name="last_name"
              type="text"
              required
              className={inputClass}
              placeholder="Фамилия"
            />
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            className={inputClass}
            placeholder="Пароль"
          />
          <input
            id="password_confirm"
            name="password_confirm"
            type="password"
            required
            className={inputClass}
            placeholder="Подтвердите пароль"
          />
        </div>

        {actionData && Object.keys(actionData).map(key => (
          key !== 'non_field_errors' && <ErrorMessage key={key} message={`${key}: ${actionData[key]}`} />
        ))}

        <div className="space-y-3 pt-2">
          <button
            ref={submitBtnRef}
            className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 transition-colors"
          >
            Зарегистрироваться
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

export default Register;
