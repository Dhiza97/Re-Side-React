import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";

const EditModal = ({ id, setShowModal }) => {
  const { navigate, properties, api } = useContext(AppContext);

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [propertyName, setPropertyName] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [purchaseType, setPurchaseType] = useState("");
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [removedImages, setRemovedImages] = useState([]);

  useEffect(() => {
    const property = properties.find((property) => property._id === id);
    if (property) {
      setPropertyName(property.propertyName || "");
      setPropertyType(property.propertyType || "");
      setPurchaseType(property.purchaseType || "");
      setStatus(property.status || "");
      setAddress(property.address || "");
      setCity(property.city || "");
      setState(property.state || "");
      setPrice(property.price || "");
      setDescription(property.description || "");
      setBedroom(property.bedroom || "");
      setBathroom(property.bathroom || "");
      setImage1(property.image?.[0] || null);
      setImage2(property.image?.[1] || null);
      setImage3(property.image?.[2] || null);
      setImage4(property.image?.[3] || null);
    }
  }, [id, properties]);

  const handleRemoveImage = (idx) => {
    setRemovedImages([...removedImages, idx]);
    if (idx === 0) setImage1(null);
    if (idx === 1) setImage2(null);
    if (idx === 2) setImage3(null);
    if (idx === 3) setImage4(null);
  };

  const closeModal = () => {
    if (setShowModal) setShowModal(false);
    document.getElementById("my_modal_4").close();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("propertyName", propertyName);
      formData.append("propertyType", propertyType);
      formData.append("purchaseType", purchaseType);
      formData.append("status", status);
      formData.append("address", address);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("bedroom", bedroom);
      formData.append("bathroom", bathroom);

      // Append images
      image1 instanceof File
        ? formData.append("image1", image1)
        : image1 && formData.append("image1", image1);
      image2 instanceof File
        ? formData.append("image2", image2)
        : image2 && formData.append("image2", image2);
      image3 instanceof File
        ? formData.append("image3", image3)
        : image3 && formData.append("image3", image3);
      image4 instanceof File
        ? formData.append("image4", image4)
        : image4 && formData.append("image4", image4);

      const response = await api.put(`/api/dashboard/update/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
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
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
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
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
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
                value={purchaseType} // Set the value prop to the state variable
                onChange={(e) => setPurchaseType(e.target.value)}
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
                value={state}
                onChange={(e) => setState(e.target.value)}
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Images */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-bold mb-2"
              htmlFor="images"
            >
              Upload Images
            </label>
            <div>
              <p className="mb-2">Upload Image</p>
              <div className="flex gap-2">
                {[image1, image2, image3, image4].map((image, idx) => (
                  <div key={idx}>
                    <label htmlFor={`image${idx + 1}`}>
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
                        onChange={(e) => {
                          if (idx === 0) setImage1(e.target.files[0]);
                          if (idx === 1) setImage2(e.target.files[0]);
                          if (idx === 2) setImage3(e.target.files[0]);
                          if (idx === 3) setImage4(e.target.files[0]);
                        }}
                        type="file"
                        id={`image${idx + 1}`}
                        hidden
                      />
                    </label>
                    {image && (
                      <button
                        type="button"
                        className="btn btn-error mt-2 text-red-600"
                        onClick={() => handleRemoveImage(idx)}
                      >
                        Remove
                      </button>
                    )}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                value={bedroom}
                onChange={(e) => setBedroom(e.target.value)}
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
                value={bathroom}
                onChange={(e) => setBathroom(e.target.value)}
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
