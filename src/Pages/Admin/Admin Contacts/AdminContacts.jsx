import { useLoaderData } from "react-router";
import { useState } from "react";
import AdminNewButton from "../../../Components/Common/AdminNewButton";
import AdminSearchInput from "../../../Components/Admin/AdminSearchInput";
import Notification from "../../../Components/Common/Notification";
import AdminContactsCard from "../../../Components/Admin/Admin Contacts/AdminContactsCard";

const AdminContacts = () => {
  const loaderData = useLoaderData();
  const [searchData, setSearchData] = useState("");
  const [notifyResult, setNotifyResult] = useState(null);

  const filteredContacts = loaderData.results.filter((item) =>
    item.name?.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <div className="mb-30">
      <div className="flex items-center gap-6 mb-4">
        <AdminSearchInput
          value={searchData}
          placeholder="Поиск Контактов"
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>

      <Notification result={notifyResult} durationMilliSeconds={3000} />

      <div className="grid 2xl:grid-cols-4 min-[71.25rem]:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {filteredContacts.map((item) => (
          <AdminContactsCard
            key={item.id}
            id={item.id}
            name={item.name}
            email={item.email}
            phone={item.phone}
            message={item.message}
            created_at={item.created_at}
            notifyFn={setNotifyResult}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminContacts;
