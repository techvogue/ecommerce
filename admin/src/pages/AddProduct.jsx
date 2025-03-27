import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets"; // Adjust the path as necessary
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import { backendUrl } from "../App"; // Adjust the path as necessary

const AddProduct = ({ token }) => {
  const [loading, setLoading] = useState(false); // Loading state

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "Men",
    subCategory: "Topwear",
    sizes: [],
    bestseller: false,
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const setProductValue = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setProductData({ ...productData, [name]: files[0] });
    } else if (type === "checkbox") {
      setProductData({ ...productData, [name]: checked });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const toggleSize = (size) => {
    setProductData((prevData) => {
      const sizes = prevData.sizes.includes(size)
        ? prevData.sizes.filter((s) => s !== size)
        : [...prevData.sizes, size];
      return { ...prevData, sizes };
    });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const appendData = new FormData();
      productData.image1 && appendData.append("image1", productData.image1);
      productData.image2 && appendData.append("image2", productData.image2);
      productData.image3 && appendData.append("image3", productData.image3);
      productData.image4 && appendData.append("image4", productData.image4);
      appendData.append("name", productData.name);
      appendData.append("description", productData.description);
      appendData.append("price", productData.price);
      appendData.append("category", productData.category);
      appendData.append("subCategory", productData.subCategory);
      appendData.append("bestseller", productData.bestseller);
      appendData.append("sizes", JSON.stringify(productData.sizes));

      const res = await axios.post(backendUrl + "/api/product/add", appendData, {
        headers: { token },
      });

      if (res.data.success) {
        setProductData({
          name: "",
          description: "",
          price: 0,
          category: "Men",
          subCategory: "Topwear",
          sizes: [],
          bestseller: false,
          image1: null,
          image2: null,
          image3: null,
          image4: null,
        });
        toast.success("Product added successfully!"); // No transition
      } else {
        toast.error("Something went wrong"); // No transition
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add product"); // No transition
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <main>
      <form
        onSubmit={handleAddProduct}
        className="flex flex-col w-full items-start gap-3"
      >
        {/* Image Upload */}
        <div>
          <p className="mb-2 font-medium text-sm">Upload Images</p>
          <div className="flex gap-2">
            {["image1", "image2", "image3", "image4"].map((image, index) => (
              <label key={index} htmlFor={image}>
                <img
                  className="w-20 h-20 object-cover border cursor-pointer"
                  src={
                    productData[image]
                      ? URL.createObjectURL(productData[image])
                      : assets.upload_area // Ensure this path is correct
                  }
                  alt="upload"
                />
                <input
                  name={image}
                  onChange={setProductValue}
                  type="file"
                  id={image}
                  hidden
                />
              </label>
            ))}
          </div>
        </div>

        {/* Product Name */}
        <div className="w-full">
          <p className="mb-2 font-medium text-sm">Product Name</p>
          <input
            name="name"
            onChange={setProductValue}
            value={productData.name}
            className="w-full max-w-[500px] px-3 py-2 border"
            type="text"
            placeholder="Type here"
            required
          />
        </div>

        {/* Description */}
        <div className="w-full">
          <p className="mb-2 font-medium text-sm">Product Description</p>
          <textarea
            name="description"
            onChange={setProductValue}
            value={productData.description}
            className="w-full max-w-[500px] px-3 py-2 border"
            placeholder="Write product description"
            required
          />
        </div>

        {/* Category, SubCategory, Price */}
        <div className="flex flex-col sm:flex-row sm:gap-6 gap-2 w-full">
          <div>
            <p className="mb-2 font-medium text-sm">Product Category</p>
            <select
              name="category"
              onChange={setProductValue}
              value={productData.category}
              className="w-full px-3 py-2 border"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div>
            <p className="mb-2 font-medium text-sm">Product SubCategory</p>
            <select
              name="subCategory"
              onChange={setProductValue}
              value={productData.subCategory}
              className="w-full px-3 py-2 border"
            >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
          <div>
            <p className="mb-2 font-medium text-sm">Product Price</p>
            <input
              name="price"
              onChange={setProductValue}
              value={productData.price}
              className="w-full max-w-[500px] px-3 py-2 border"
              type="number"
              placeholder="25SR"
              required
            />
          </div>
        </div>

        {/* Sizes */}
        <div>
          <p className="mb-2 font-medium text-sm">Product Sizes</p>
          <div className="flex gap-2.5 flex-wrap">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <p
                key={size}
                className={`cursor-pointer border px-4 py-1 rounded 
                  ${
                    productData.sizes.includes(size)
                      ? "bg-pink-100 border-pink-300"
                      : "bg-slate-200 text-black"
                  }`}
                onClick={() => toggleSize(size)}
              >
                {size}
              </p>
            ))}
          </div>
        </div>

        {/* Bestseller */}
        <div className="flex gap-2 mt-2 items-center">
          <input
            name="bestseller"
            onChange={setProductValue}
            checked={productData.bestseller}
            type="checkbox"
            id="bestseller"
          />
          <label htmlFor="bestseller">Add to bestseller</label>
        </div>

        {/* Submit Button */}
        <button
          className={`uppercase cursor-pointer flex items-center gap-2 bg-black text-white px-5 py-3 rounded mt-4 ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={loading}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>

      <ToastContainer /> {/* No transition applied */}
    </main>
  );
};

export default AddProduct;