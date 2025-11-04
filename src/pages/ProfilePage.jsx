import { useEffect, useState } from "react";
import {profile} from "../api/UserAccountApi"
import { removeToken } from "../localstorage/tokenLS";
import { useNavigate } from "react-router-dom";

export const ProfilePage = ({token, setToken, userinfo, setUserInfo}) => {
    if(!token) return <h1>Signup/login</h1>
    const navigate = useNavigate();
    const HandleSignOut = async() => {
        removeToken();
        setToken(null);
        navigate("/");
    }
    const HandleEditProfile = () => {
      navigate("/update-profile");
    }
     useEffect(()=>{
        const fetchProfile =  async() => {
          const response = await profile(token);
          if(response) {
              setUserInfo(response.user);
          }
          else return <h1>Error fetching profile</h1>;
        }
        fetchProfile();
    },[token])
    
  return (
    <div className="px-6 md:px-20 flex flex-1 justify-center py-10">
      <div className="layout-content-container flex flex-col w-full max-w-4xl">
        
        {/* Profile Header */}
        <div className="flex p-8 bg-white/60 backdrop-blur-sm rounded-t-2xl shadow-sm items-center flex-col gap-6">
          <div className="flex flex-col items-center gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-32 h-32 border-4 border-white shadow-lg"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHTwB9HZJTbj-RKTHpgmGwIyN7SMVfWK3sq10HX7f1vJecCEFYpBm8yrYfclSk2oK9wsTWGpfBqa4iSGWTR62fF7nWD04Eg4IKj_-Gs78a_YxfsEr908PHpattNLOOtOMOb6yBP65RabUMvteLouHE99jmmvrUUZ9bVTU73nZeTb7vFbIkYynbbbeUFEesFxaO_6t5lDNxUb2HF_9RVSYVDfeKIm6Gb_D3USr4kFp4chHyxAvZRAxdA2GDMNxJUR6e0EoSC-kd5OU3')",
              }}
            ></div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-900 text-3xl font-bold leading-tight tracking-tight">
                {userinfo.name}
              </p>
              <p className="text-gray-500 text-lg font-normal leading-normal">
                {userinfo.email}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
              <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-white text-gray-700 text-sm font-semibold leading-normal shadow-sm hover:bg-gray-50 transition-colors duration-200"
              onClick={HandleEditProfile}>
                <span className="truncate">Edit Profile</span>
              </button>
              <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-indigo-500 text-white text-sm font-semibold leading-normal shadow-sm hover:bg-indigo-400 transition-colors duration-200"
              onClick={HandleSignOut}>
                <span className="truncate">Logout</span>
              </button>
          </div>
          
        </div>

        {/* Tabs */}
        <div className="bg-white/60 backdrop-blur-sm rounded-b-2xl shadow-sm">
          <div className="border-b border-gray-200">
            <div className="flex px-8 gap-8">
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 py-4 cursor-pointer"
                href="#"
              >
                <p className="text-sm font-semibold">Personal Info</p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-indigo-500 text-indigo-600 py-4 cursor-pointer"
                href="#"
              >
                <p className="text-sm font-semibold">Journal Stats</p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 py-4 cursor-pointer"
                href="#"
              >
                <p className="text-sm font-semibold">Weekly Summary</p>
              </a>
            </div>
          </div>

          {/* Mood Trend Card */}
          <div className="p-8">
            <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-gray-700 text-base font-medium">Mood Trend</p>
              <div className="flex items-baseline gap-3">
                <p className="text-gray-900 tracking-tight text-4xl font-bold">
                  7.2
                </p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-green-500 text-xl">
                    trending_up
                  </span>
                  <p className="text-green-600 text-sm font-semibold">+12%</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">vs. Last 7 Days</p>

              {/* Chart */}
              <div className="flex min-h-[220px] flex-1 flex-col gap-4 py-4">
                <svg
                  fill="none"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 475 150"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z"
                    fill="url(#paint0_linear)"
                  ></path>
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                    stroke="rgb(99 102 241)" // Indigo-500
                    strokeLinecap="round"
                    strokeWidth="3"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="236"
                      x2="236"
                      y1="1"
                      y2="149"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="rgb(199 210 254)" /> {/* Indigo-100 */}
                      <stop
                        offset="1"
                        stopColor="rgb(199 210 254)"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Days */}
                <div className="flex justify-around">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <p
                        key={day}
                        className="text-gray-500 text-xs font-bold uppercase tracking-wider"
                      >
                        {day}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};
