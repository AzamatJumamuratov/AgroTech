import edit_icon from "../../../assets/edit.svg";
import bin_icon from "../../../assets/trash_bin.svg";
import { redirect, useRevalidator } from "react-router";
import { createPortal } from "react-dom";
import { useState } from "react";
import FetchData, { getAuthHeader } from "../../../Data Fetching/FetchData";
import AdminContactsModal from "./AdminConactsModal";
import AdminSocialLinksModal from "./AdminSocialLinksModal";

const AdminSocialLinksModify = ({
  telegram,
  instagram,
  // facebook,
  linkedin,
  editable = true,
  deletable = false,
  notifyFn,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isChanging, SetIsChanging] = useState(false);
  const { revalidate } = useRevalidator();

  return (
    <div className="flex flex-col items-start gap-3 mt-4">
      {editable && (
        <button
          onClick={() => {
            SetIsChanging(true);
          }}
          disabled={isDeleting}
          className={`flex items-center gap-2 px-6 py-2 xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#6877E0] ${
            !isDeleting && "active:bg-[#3f488a]"
          } disabled:opacity-40`}
        >
          <img src={edit_icon} className="xl:size-5 lg:h-4 h-3" />
          Редактировать
        </button>
      )}
      {deletable && (
        <button
          disabled={isDeleting}
          onClick={() => OnDelete(id)}
          className={`flex items-center gap-2 px-10 py-2 lg:px-4 xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#DC3545] ${
            isDeleting ? "" : "active:bg-[#98313b] "
          } disabled:opacity-40 `}
        >
          <img src={bin_icon} className="xl:size-5 lg:h-4 h-3" />
          {isDeleting ? "Удаление...." : "Удалить"}
        </button>
      )}
      {isChanging &&
        createPortal(
          <AdminSocialLinksModal
            telegram={telegram}
            instagram={instagram}
            // facebook={facebook}
            linkedin={linkedin}
            closeFN={() => SetIsChanging(false)}
            submitFN={OnUpdate}
          />,
          document.body
        )}
    </div>
  );

  async function OnDelete(id) {
    const token = localStorage.getItem("token");
    if (!token) {
      return redirect("/login");
    }
    setIsDeleting(true);
    let response = await FetchData(`${modifyPath}/${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: getAuthHeader(),
      },
    });
    if (response.ok) {
      notifyFn({ success: true });
      revalidate();
    } else {
      notifyFn({ success: false });
      if (response.status == 401) {
        redirect("/login");
      }
      console.error(
        `Error Deleting News ${id} Item. Code : ` +
          response.status +
          " Text : " +
          response.statusText
      );
    }
    setIsDeleting(false);
  }

  async function OnUpdate(body, SuccessCallback, ErrorCallback) {
    const token = localStorage.getItem("token");
    if (!token) {
      return redirect("/login");
    }
    const headers = {
      Authorization: getAuthHeader(),
      "Content-Type": "application/json",
    };

    let response = await FetchData(`social-links/`, {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
    });

    if (response.ok) {
      notifyFn({ success: true });
      revalidate();
      SuccessCallback();
    } else {
      notifyFn({ success: false });
      if (response.status == 401) {
        redirect("/login");
      }
      console.error(
        `Error Updating Social Links INFO. Code : ` +
          response.status +
          " Text : " +
          response.statusText
      );
      const error = await response.json();
      ErrorCallback(error);
    }
  }
};

export default AdminSocialLinksModify;
