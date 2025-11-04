import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../api/UserAccountApi";

export const LoginPage = ({userData, setUserData, token ,setToken}) => {
    const {email, password} = userData
    const HandleChange = (event)=>{
        const {name, value} = event.target;
        setUserData((prev)=>({...prev, [name]: value}))
    }
    const navigate = useNavigate();
    const HandleSubmit = async(event)=>{
        event.preventDefault();
        const data = {email, password}
        try{
            const response = await login(data);
            if(response) {
              setToken(response.token);
              navigate("/profile");
            }
            
        } catch(err) {
            console.log(err)
            return;
        }
        setUserData({email: "", password: ""})
    }
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white">
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
              ReflectAI
            </h1>
          </div>

          {/* Card */}
          <div className="bg-white rounded-xl shadow-soft p-8 sm:p-10">
            <form className="space-y-6" onSubmit={HandleSubmit}>
              {/* Email */}
              <div>
                <label
                  className="text-sm font-medium text-gray-600"
                  htmlFor="email"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="email"
                    className="appearance-none block w-full px-4 py-3 rounded-lg border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm"
                    id="email"
                    name="email"
                    value={email}
                    onChange={HandleChange}
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  className="text-sm font-medium text-gray-600"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="current-password"
                    className="appearance-none block w-full px-4 py-3 rounded-lg border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm"
                    id="password"
                    name="password"
                    value={password}
                    onChange={HandleChange}
                    placeholder="Enter your password"
                    required
                    type="password"
                  />
                </div>
              </div>

              {/* Login Button */}
              <div>
                <button
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                  type="submit" 
                >
                   login
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Google Login */}
              <div className="mt-6">
                <a
                  className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                  href="#"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.22,0-9.651-3.356-11.303-8H6.306C9.656,39.663,16.318,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.01,35.638,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  <span>Login with Google</span>
                </a>
              </div>
            </div>

            {/* Sign up link */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <NavLink
                className="font-medium text-indigo-600 hover:text-indigo-500"
                to="/signup"
              >
                Sign up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
