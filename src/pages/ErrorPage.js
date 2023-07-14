import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>Oops! Page not found</div>
      <div>
        <Link to="/">Click here.</Link>
      </div>
    </div>
  );
};
export default ErrorPage;
