import { Link } from "react-router";

const AuthTitle = ({ title, linkTo, linkText }) => {
  return (
    <div className="text-center mb-6">
      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"/>
          <circle cx="12" cy="10" r="3"/>
          <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-primary-dark">
        {title}
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        <Link
          to={linkTo}
          className="font-semibold text-primary hover:text-primary-light transition-colors"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default AuthTitle;
