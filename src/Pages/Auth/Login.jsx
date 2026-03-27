import { Form, useActionData } from "react-router";
import ErrorMessage from "../../Components/Auth/ErrorMessage";
import AuthTitle from "../../Components/Auth/AuthTitle";
import { useEffect, useRef } from "react";

const Login = () => {
  const actionData = useActionData();
  const submitBtnRef = useRef();

  useEffect(() => {
    submitBtnRef.current.disabled = false;
  }, [actionData]);

  return (
    <>
      <AuthTitle
        linkTo={"/"}
        title={"Войти в Аккаунт"}
        linkText={"Перейдите в Главную Страницу"}
      />
      {actionData && <ErrorMessage message={actionData.non_field_errors} />}
      <Form
        className="mt-8 space-y-6"
        method="post"
        onSubmit={() => (submitBtnRef.current.disabled = true)}
      >
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email" className="sr-only">
              UserName
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              autoComplete="username"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="Имя Пользователя"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="Пароль"
            />
          </div>
        </div>
        <div className="space-y-6">
          <button
            ref={submitBtnRef}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#355e4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2f8059] disabled:opacity-50"
          >
            Войти
          </button>
        </div>
      </Form>
    </>
  );
};

export default Login;
