import { Form, useActionData } from "react-router";
import ErrorMessage from "../../Components/Auth/ErrorMessage";
import AuthTitle from "../../Components/Auth/AuthTitle";
import { useEffect, useRef } from "react";

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
        title={"Регистрация Админа"}
        linkText={"Уже есть аккаунт? Войти"}
      />
      {actionData && actionData.non_field_errors && (
        <ErrorMessage message={actionData.non_field_errors} />
      )}
      <Form
        className="mt-8 space-y-4"
        method="post"
        onSubmit={() => (submitBtnRef.current.disabled = true)}
      >
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="username" className="sr-only">
              Имя Пользователя
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="Имя Пользователя"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="first_name" className="sr-only">
              Имя
            </label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="Имя"
            />
          </div>
          <div>
            <label htmlFor="last_name" className="sr-only">
              Фамилия
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="Фамилия"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Пароль
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="Пароль"
            />
          </div>
          <div>
            <label htmlFor="password_confirm" className="sr-only">
              Подтвердите Пароль
            </label>
            <input
              id="password_confirm"
              name="password_confirm"
              type="password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="Подтвердите Пароль"
            />
          </div>
        </div>

        {actionData && Object.keys(actionData).map(key => (
          key !== 'non_field_errors' && <ErrorMessage key={key} message={`${key}: ${actionData[key]}`} />
        ))}

        <div>
          <button
            ref={submitBtnRef}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#355e4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2f8059] disabled:opacity-50"
          >
            Зарегистрироваться
          </button>
        </div>
      </Form>
    </>
  );
};

export default Register;
