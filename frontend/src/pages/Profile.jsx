import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Profile = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {
      line1: "",
      line2: "",
    },
    gender: "",
    dob: "",
    city: "",
    state: "",
    country: "",
  });

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16 max-w-xl flex flex-col gap-2 text-sm">
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData?.name || ""}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData?.name || "Name not available"}
        </p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />

      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-gold">
            {userData?.email || "Email not available"}
          </p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData?.phone || ""}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-gold">
              {userData?.phone || "Phone not available"}
            </p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <>
              <input
                className="bg-gray-50"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData?.address?.line1 || ""}
                type="text"
              />
              <br />
              <input
                className="bg-gray-50"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData?.address?.line2 || ""}
                type="text"
              />
            </>
          ) : (
            <p className="text-gray-500">
              {userData?.address?.line1 || "Address line 1"}
              <br /> <br />
              {userData?.address?.line2 || "Address line 2"}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p>Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData?.gender || ""}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">
              {userData?.gender || "Not specified"}
            </p>
          )}

          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData?.dob?.split("T")[0] || ""}
            />
          ) : (
            <p className="text-gray-400">
              {userData?.dob
                ? new Date(userData.dob).toLocaleDateString()
                : "Not available"}
            </p>
          )}
        </div>
      </div>

      <div className="mt-10 text-black">
        {isEdit ? (
          <button
            className="border border-gold px-8 py-2 rounded-full hover:bg-black hover:text-gold transition duration-300"
            onClick={updateUserProfile}
          >
            Save information
          </button>
        ) : (
          <button
            className="border border-gold px-8 py-2 rounded-full hover:bg-black hover:text-gold transition duration-300"
            onClick={() => setIsEdit(true)}
          >
            Edit profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;