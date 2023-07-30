import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addPicture } from "../../../redux/actions/forms";

export default function PictureUpload() {
  const [picture, setPicture] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPicture(picture));
  }, [dispatch, picture]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setPicture(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreviewImage(null);
    }
  };

  return (
    <div>
      <h1 className="text-lg leading-6 font-medium text-gray-900">ছবি</h1>
      <p className="mt-1 text-sm text-gray-500">
        রেসিপিটির ছবি যোগ করুন
      </p>
      <div className="mt-4 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          {previewImage ? (
            <img
              src={previewImage}
              alt="Preview"
              className="mx-auto h-24 w-24 rounded-full"
            />
          ) : (
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              {/* SVG path code */}
            </svg>
          )}
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <span>ছবি যোগ করুন</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={handleFileChange}
              />
            </label>
            <p className="pl-1">অথবা ফাইল টেনে আনুন</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  );
}
