import { useState } from "react";
import { signup } from "../api/UserAccountApi";
import { NavLink, useNavigate } from "react-router-dom";

export const SignupPage = ({userData, setUserData, setToken}) => {
    const {name, email, password} = userData ;
    const[confirmPassword, setConfirmPassword] = useState("");

    const HandleData = (event)=>{
        const {name, value} = event.target;
        setUserData((prev)=>({...prev, [name]: value}));
    }

    const HandleConfirmPassword = (event)=>{
        setConfirmPassword(event.target.value);
    }
    const navigate = useNavigate();
    const HandleSubmitButton = async (e) => {
        e.preventDefault();
        if(!(password === confirmPassword)){
            alert("Passwords do not match");
            return;
        }
        try{
            const response = await signup(userData);
            if(response) {
              setToken(response.token);
              // console.log(response.token); // useEffect to update the token state
              navigate("/profile");
            }
        } catch(error){
            console.error(error);
            return;
        }
        setUserData({name: "", email: "", password: ""});
        setConfirmPassword("");
    }
    
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800">ReflectAI</h1>
              <p className="text-gray-500 mt-2">Create your account</p>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={HandleSubmitButton}>
              {/* Name */}
              <div>
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={HandleData}
                  className="form-input mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={HandleData}

                  className="form-input mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={HandleData}
                  className="form-input mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="confirm-password"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={HandleConfirmPassword}
                  className="form-input mt-1 block w-full rounded-lg border-gray-300  bg-gray-50 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#135bec] text-white font-bold py-3 px-4  rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">OR</span>
              </div>
            </div>

            {/* Google Signup */}
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300">
              <svg
                className="w-5 h-5"
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
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.012,35.244,44,30.036,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                Sign up with Google
              </span>
            </button>

            {/* Footer */}
            <div className="text-center text-sm">
              <p className="text-gray-500">
                Already have an account?{" "}
                <NavLink
                  className="font-medium text-[#135bec] hover:text-blue-700"
                  to="/login"
                >
                  Login
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
