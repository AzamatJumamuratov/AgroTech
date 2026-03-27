import { Link } from "react-router";

const AuthTitle = ({ title, linkTo, linkText }) => {
  return (
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {title}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Или&nbsp;
        <Link
          to={linkTo}
          className="font-bold text-primary hover:text-primary-500"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default AuthTitle;
