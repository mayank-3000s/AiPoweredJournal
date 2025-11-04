import { useEffect, useState } from "react";
import { profile, updateProfile } from "../api/UserAccountApi";
import { useNavigate } from "react-router-dom";

export const UpdateProfilePage = ({token, setToken, userinfo, setUserInfo}) => {
    const[password, setPassword] = useState("");
    const[newPassword, setNewPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        if(!token) return;
              const fetchProfile =  async() => {
                    const response = await profile(token);
                    if(response) {
                        setUserInfo(response.user);
                    }
                    else return <h1>Error fetching profile</h1>;
                }
                fetchProfile();
    },[token])

    const HandleSubmit = async(event)=>{
        event.preventDefault();
        try{
            if(!(password === "")) {
                if(!(password === confirmPassword)){
                    alert("Passwords do not match");
                    return;
                }
            }
            
            const response = await updateProfile(token, userinfo);
            console.log(response);
            
            if(response) {
                setUserInfo(response.user);
                navigate("/profile");
                setToken(response.token);
            }
        } catch(error){
            console.log(error);
        }
    }

    const HandleChange = (event) => {
        const {name, value} = event.target;
        setUserInfo((prev) => ({...prev, [name]: value}));
    }
    
  return (
    <>
      <div className="gradient-bg">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <div className="flex flex-1 items-center justify-center py-10 lg:py-16">
              <div className="layout-content-container flex w-full max-w-lg flex-col gap-8 rounded-2xl bg-white p-8 shadow-2xl shadow-indigo-100/50">
                <div className="flex flex-col items-center gap-4">
                  <h1 className="text-3xl font-bold text-gray-900">Update Profile</h1>
                  <div className="relative">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgcsrfyBjWf81Px1KhvU1VgSp73fJI0X9FOBTw3ctvIhzIgrN35FoQtyVu7NIRsVSHEL4rszsR6WhIkwyEmrAAD9mYnQOEBKv8Hto2TOlIOESP05EAyIUkmD5fgZP2pV1qTiPHyz9y7MUC9QRzm1P7gQ74BXXbL3bm3IRB_GPPlr3FwWE50hLdEvdNlHiwk6_VYmKIWjGoTOcFhmtNasMnStAmp9zRVR3sQTvWRhjIP2dMgVCGBaGPtA-o22-SJEx8r0RLMMYWbUo")',
                      }}
                    ></div>
                    <button className="absolute bottom-0 right-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white shadow-md transition-transform hover:scale-110">
                      <span className="material-symbols-outlined"></span>
                    </button>
                  </div>
                </div>
                <form className="flex w-full flex-col gap-4" onSubmit={HandleSubmit}>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      className="form-input w-full rounded-lg border-gray-200 bg-gray-50 p-3 text-gray-900 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      id="fullName"
                      name="name"
                      type="text"
                      value={userinfo.name || ""}
                      onChange={HandleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="form-input w-full rounded-lg border-gray-200 bg-gray-50 p-3 text-gray-900 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      id="email"
                      name="email"
                      type="email"
                      value={userinfo.email || ""}
                      onChange={HandleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700" htmlFor="currentPassword">
                      Current Password
                    </label>
                    <input
                      className="form-input w-full rounded-lg border-gray-200 bg-gray-50 p-3 text-gray-900 placeholder-gray-400 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      id="currentPassword"
                      placeholder="Enter current password"
                      type="password"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700" htmlFor="newPassword">
                      New Password
                    </label>
                    <input
                      className="form-input w-full rounded-lg border-gray-200 bg-gray-50 p-3 text-gray-900 placeholder-gray-400 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      id="newPassword"
                      name="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      type="password"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700" htmlFor="confirmNewPassword">
                      Confirm New Password
                    </label>
                    <input
                      className="form-input w-full rounded-lg border-gray-200 bg-gray-50 p-3 text-gray-900 placeholder-gray-400 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      id="confirmNewPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                      type="password"
                    />
                  </div>
                  <div className="hidden h-5 text-center text-sm">
                    <p className="text-green-600">Profile updated successfully!</p>
                  </div>
                  <div className="mt-4 flex flex-col gap-3">
                    <button
                      className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      type="submit"
                    >
                      Save Changes
                    </button>
                    <button
                      className="flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-base font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      type="button"
                      onClick={()=>navigate('/profile')}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
