import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const HandleNavigate = () =>{
        navigate(-1);
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <img
        src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
        alt="404 Error"
        className="w-[500px] max-w-full rounded-2xl shadow-2xl"
      />
      <h1 className="text-black text-3xl mt-6 font-bold">Oops! Page Not Found</h1>
      <p className="text-gray-400 mt-2 text-lg text-center">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition" onClick={HandleNavigate}>Go Back</button>
    </div>
  );
};

export default ErrorPage;
