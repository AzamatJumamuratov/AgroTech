import { useNavigate } from "react-router";
import { useState } from "react";
import quit_icon from "../../assets/sign_out.svg";
import ConfirmLogoutModal from "../../Components/Common/ConfirmLogoutModal";

const AdminQuit = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primaryGreen p-2 rounded-lg"
        >
          <img src={quit_icon} className="lg:size-5 size-4" />
        </button>
      </div>

      {showModal && (
        <ConfirmLogoutModal
          onConfirm={handleLogout}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default AdminQuit;
