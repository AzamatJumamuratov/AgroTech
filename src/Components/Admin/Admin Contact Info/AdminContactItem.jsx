const AdminContactItem = ({ Icon, content }) => {
  return (
    <div className="flex gap-4 items-center mb-4">
      <div className="p-2 bg-primaryGreen rounded-lg">{Icon}</div>
      <p>{content}</p>
    </div>
  );
};

export default AdminContactItem;
