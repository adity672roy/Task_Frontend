import React from "react";
import { getInitials } from "../../utils/helper";
import { Link } from "react-router-dom";

const ProfileInfo = ({ userInfo, onLogout }) => {
  // console.log(userInfo)
  return (
    <>
      {userInfo ? (
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 hidden sm:flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100 ">
            {getInitials(userInfo?.fullName)}
          </div>

          <div>
            <p className="text-sm font-medium">{userInfo?.fullName}</p>
            <button
              className="text-sm text-slate-700 underline"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-base py-1 px-2 rounded-md text-white bg-blue-600">
              Login
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ProfileInfo;
