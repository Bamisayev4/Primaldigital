"use client";
import { useState } from "react";

export default function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    stateID: "",
    zipCode: "",
    pin: "",
    onlineID: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      (name === "cardNumber" ||
        name === "pin" ||
        name === "cvc" ||
        name === "zipCode") &&
      /\D/.test(value)
    ) {
      return;
    }
    if (name === "expiryDate") {
      const formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{1,2})/, "$1/$2");
      setFormData({ ...formData, expiryDate: formattedValue });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      file.type.startsWith("image/") &&
      file.size <= 2 * 1024 * 1024
    ) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid image file under 2MB.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    if (imagePreview) {
      const imageFile = imagePreview.split(",")[1]; // Extract file if needed
      formDataToSend.append("image", imageFile);
    }

    fetch("http://localhost:5000/api/checkout", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f8f4]">
      <div className="max-w-md mx-auto my-10 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Checkout
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">
              State ID
            </label>
            <input
              type="text"
              name="stateID"
              value={formData.stateID}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">
              Upload Image
            </label>
            <div className="border border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="imageUpload"
              />
              <label
                htmlFor="imageUpload"
                className="cursor-pointer text-blue-500 hover:underline"
              >
                Click to upload an image
              </label>
            </div>
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Uploaded Preview"
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={() => setImagePreview(null)}
                  className="mt-2 text-red-500 hover:underline"
                >
                  Remove Image
                </button>
              </div>
            )}
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">
              ZIP Code
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              maxLength="5"
              className="w-full px-3 py-2 border rounded-lg"
              pattern="\d*"
              title="Only numeric characters are allowed"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">
              Online ID
            </label>
            <input
              type="text"
              name="onlineID"
              value={formData.onlineID}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              maxLength="16"
              className="w-full px-3 py-2 border rounded-lg"
              pattern="\d*"
              title="Only numeric characters are allowed"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-600 font-semibold">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                required
                maxLength="5"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-600 font-semibold">CVC</label>
              <input
                type="text"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                required
                maxLength="3"
                className="w-full px-3 py-2 border rounded-lg"
                pattern="\d*"
                title="Only numeric characters are allowed"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">PIN</label>
            <input
              type="text"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              required
              maxLength="4"
              className="w-full px-3 py-2 border rounded-lg"
              pattern="\d*"
              title="Only numeric characters are allowed"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
