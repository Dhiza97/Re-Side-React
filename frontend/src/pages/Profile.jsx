import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    dob: "",
    city: "",
    state: "",
    country: "",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data.user);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    fetchUserProfile();
  }, [backendUrl, token]);

  const updateUserProfile = async () => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/user/profile`,
        userData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUserData(response.data.user);
      setIsEdit(false);
    } catch (error) {
      console.error("Failed to update user profile:", error);
    }
  };

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pb-16 pt-10 max-w-xl flex flex-col gap-2 text-sm">
      <p className="text-2xl text-primaryColor mb-8">PERSONAL INFORMATION</p>
      <div className="flex items-center gap-2">
        {isEdit ? (
          <input
            className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
            type="text"
            value={userData?.firstName || ""}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
        ) : (
          <p className="font-medium text-3xl text-neutral-800 mt-4">
            {userData?.firstName || "Name not available"}
          </p>
        )}

        {isEdit ? (
          <input
            className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
            type="text"
            value={userData?.lastName || ""}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
        ) : (
          <p className="font-medium text-3xl text-neutral-800 mt-4">
            {userData?.lastName || "Name not available"}
          </p>
        )}
      </div>

      <hr className="bg-zinc-400 h-[1px] border-none" />

      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-primaryColor">
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
            <p className="text-primaryColor">
              {userData?.phone || "Phone not available"}
            </p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData?.address || ""}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, address: e.target.value }))
              }
            />
          ) : (
            <p className="text-primaryColor">
              {userData?.address || "Address not available"}
            </p>
          )}

          <p className="font-medium">State:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData?.state || ""}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, state: e.target.value }))
              }
            />
          ) : (
            <p className="text-primaryColor">
              {userData?.state || "State not available"}
            </p>
          )}

          <p className="font-medium">City:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData?.city || ""}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, city: e.target.value }))
              }
            />
          ) : (
            <p className="text-primaryColor">
              {userData?.city || "City not available"}
            </p>
          )}

          <p className="font-medium">Country:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData?.country || ""}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, country: e.target.value }))
              }
            />
          ) : (
            <p className="text-primaryColor">
              {userData?.country || "Country not available"}
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

      <div className="mt-10 text-primaryColor">
        {isEdit ? (
          <button
            className="border border-primaryColor px-8 py-2 rounded-full hover:bg-primaryColor hover:text-white transition duration-300"
            onClick={updateUserProfile}
          >
            Save information
          </button>
        ) : (
          <button
            className="border border-primaryColor px-8 py-2 rounded-full hover:bg-primaryColor hover:text-white transition duration-300"
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
