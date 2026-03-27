const AdminTitle = ({ type = "h3", children }) => {
  return (
    <Title
      type={type}
      className="2xl:ml-9 xl:ml-6 lg:ml-4 ml-3 xl:mb-8 lg:mb-5 mb-3 2xl:text-4xl xl:text-4xl lg:text-xl font-bold"
    >
      {children}
    </Title>
  );
};

const Title = ({ type, className, children }) => {
  let tag;
  switch (type) {
    case "h1":
      tag = <h1 className={className || ""}>{children}</h1>;
      break;
    case "h2":
      tag = <h2 className={className || ""}>{children}</h2>;
      break;
    case "h3":
      tag = <h3 className={className || ""}>{children}</h3>;
      break;
    case "h4":
      tag = <h4 className={className || ""}>{children}</h4>;
      break;
    case "h5":
      tag = <h5 className={className || ""}>{children}</h5>;
      break;
    case "h6":
      tag = <h6 className={className || ""}>{children}</h6>;
      break;
  }

  return tag;
};

export default AdminTitle;
