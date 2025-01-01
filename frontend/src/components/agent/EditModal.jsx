import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";

const EditModal = ({ property, setShowModal }) => {
  const { api } = useContext(AppContext);
  const [propertyData, setPropertyData] = useState({
    propertyName: "",
    propertyType: "",
    purchaseType: "",
    status: "",
    address: "",
    city: "",
    state: "",
    price: "",
    description: "",
    bedroom: "",
    bathroom: "",
    image: [],
  });

  const [removedImages, setRemovedImages] = useState([]);

  // Fetch property data and populate form
  useEffect(() => {
    if (property) {
      setPropertyData({
        propertyName: property.propertyName || "",
        propertyType: property.propertyType || "",
        purchaseType: property.purchaseType || "",
        status: property.status || "",
        address: property.address || "",
        city: property.city || "",
        state: property.state || "",
        price: property.price || "",
        description: property.description || "",
        bedroom: property.bedroom || "",
        bathroom: property.bathroom || "",
        image: property.image || [],
      });
    }
  }, [property]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (idx, file) => {
    const updatedImages = [...propertyData.image];
    updatedImages[idx] = file;
    setPropertyData((prev) => ({
      ...prev,
      image: updatedImages,
    }));
  };

  const handleRemoveImage = (idx) => {
    setRemovedImages((prev) => [...prev, idx]);
    setPropertyData((prev) => ({
      ...prev,
      image: prev.image.filter((_, index) => index !== idx),
    }));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(propertyData).forEach((key) => {
        if (key === "image") {
          propertyData.image.forEach((img, idx) => {
            if (img instanceof File) {
              formData.append(`image${idx + 1}`, img);
            }
          });
        } else {
          formData.append(key, propertyData[key]);
        }
      });

      const response = await api.put(`/api/property/dashboard/update/${property._id}`, formData, {
        headers: { 
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        closeModal();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update property.");
    }
  };

  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-full max-w-5xl">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-primaryColor">Edit Property</h1>

          <button className="btn modal-action mb-7" onClick={closeModal}>
            X
          </button>
        </div>

        <form
          onSubmit={onSubmitHandler}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="propertyName"
            >
              Property Name
            </label>
            <input
              type="text"
              name="propertyName"
              value={propertyData.propertyName}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="propertyType"
              >
                Property Type
              </label>
              <select
                name="propertyType"
                value={propertyData.propertyType}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="" disabled>
                  Select your option
                </option>
                <option value="duplex">Duplex</option>
                <option value="bungalow">Bungalow</option>
                <option value="condo">Condo</option>
                <option value="penthhouse">Penthouse</option>
                <option value="apartment">Apartment</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="purchaseType"
              >
                Purchase Type
              </label>
              <select
                name="purchaseType"
                value={propertyData.purchaseType}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="" disabled>
                  Select your option
                </option>
                <option value="rent">Rent</option>
                <option value="sale">Sale</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              value={propertyData.address}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                value={propertyData.city}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="state"
              >
                State
              </label>
              <input
                type="text"
                name="state"
                value={propertyData.state}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              value={propertyData.price}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Images */}
          <div className="mb-4">
            <label className="block text-gray-700 text-base font-bold mb-2">
              Upload Images
            </label>
            <div>
              <div className="flex gap-2">
                {propertyData.image.map((image, idx) => (
                  <div key={idx}>
                    <label htmlFor={`image${idx}`}>
                      <img
                        className="w-20 cursor-pointer"
                        src={
                          image instanceof File
                            ? URL.createObjectURL(image)
                            : image || assets.upload
                        }
                        alt=""
                      />
                      <input
                        type="file"
                        id={`image${idx}`}
                        onChange={(e) =>
                          handleImageChange(idx, e.target.files[0])
                        }
                        hidden
                      />
                    </label>
                    <button
                      type="button"
                      className="btn btn-error mt-2 text-red-600"
                      onClick={() => handleRemoveImage(idx)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              name="description"
              value={propertyData.description || ""}
              onChange={(e) =>
                setPropertyData({
                  ...propertyData,
                  description: e.target.value,
                })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bedroom"
              >
                Bedroom
              </label>
              <input
                type="number"
                name="bedroom"
                value={propertyData.bedroom || ""}
                onChange={(e) =>
                  setPropertyData({ ...propertyData, bedroom: e.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bathroom"
              >
                Bathroom
              </label>
              <input
                type="number"
                name="bathroom"
                value={propertyData.bathroom || ""}
                onChange={(e) =>
                  setPropertyData({ ...propertyData, bathroom: e.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-primaryColor hover:bg-blue-700 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Property
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EditModal;