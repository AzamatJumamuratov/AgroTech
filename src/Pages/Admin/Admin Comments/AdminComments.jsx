import { useLoaderData } from "react-router";
import AdminNewButton from "../../../Components/Common/AdminNewButton";
import { useState } from "react";
import AdminSearchInput from "../../../Components/Admin/AdminSearchInput";
import Notification from "../../../Components/Common/Notification";
import AdminContactsCard from "../../../Components/Admin/Admin Contacts/AdminContactsCard";
import AdminCommentsCard from "../../../Components/Admin/Admin Comments/AdminCommentsCard";

const AdminComments = () => {
  const loaderData = useLoaderData();
  const [searchData, setSearchData] = useState("");
  const [notifyResult, setNotifyResult] = useState(null);
  return (
    <div className="mb-30">
      <div className="flex items-center gap-6 mb-4">
        <AdminSearchInput
          value={searchData}
          placeholder={"Поиск"}
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>
      <Notification result={notifyResult} durationMilliSeconds={3000} />
      <div className="grid 2xl:grid-cols-4 min-[71.25rem]:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-8">
        {loaderData.results.map((item) => {
          if (searchData != "") {
            if (
              item.name &&
              item.name.toLowerCase().includes(searchData.toLowerCase())
            ) {
              return (
                <AdminCommentsCard
                  key={item.id}
                  id={item.id}
                  name_project={item.name_project}
                  comment={item.comment}
                  created_at={item.created_at}
                  notifyFn={setNotifyResult}
                />
              );
            }
          } else {
            return (
              <AdminCommentsCard
                key={item.id}
                id={item.id}
                name_project={item.name_project}
                comment={item.comment}
                created_at={item.created_at}
                notifyFn={setNotifyResult}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default AdminComments;
