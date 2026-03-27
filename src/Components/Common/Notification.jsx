import { useEffect, useState } from "react";

const Notification = ({ result, durationMilliSeconds = 3000 }) => {
  const [doneShowing, SetDoneShowing] = useState(true);
  useEffect(() => {
    SetDoneShowing(false);
    let id = setTimeout(() => {
      SetDoneShowing(true);
    }, durationMilliSeconds);
    return () => {
      clearTimeout(id);
    };
  }, [result]);
  return (
    <>
      {
        <div
          className={`${result && !doneShowing ? "top-14" : "-top-full"} ${
            result?.success
              ? "bg-blue-500 border-blue-600"
              : "bg-red-500 border-red-600"
          } rounded-4xl border  fixed left-1/2 -translate-1/2 -top-full xl:p-4 p-3 duration-1000 ease-in-out text-white z-40 xl:text-base lg:text-sm text-xs`}
        >
          {result?.success ? `Результат Успешен!` : `Произошла Ошибка!`}
        </div>
      }
    </>
  );
};

export default Notification;
