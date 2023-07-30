import React from "react";
import RecipeForm from "./recipe_form/RecipeForm";

import { useDispatch } from "react-redux";
import { createRecipe } from "../../redux/actions/recipes";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function RecipeCreate() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleFormSubmit = (formData) => {
    dispatch(createRecipe(formData));
    Navigate("/");
  };

  return (
    <div>
      <RecipeForm
        buttonLabel=" তৈরি করুন"
        editMode={false}
        handleFormSubmit={handleFormSubmit}
      />
      <ToastContainer />
    </div>
  );
}
