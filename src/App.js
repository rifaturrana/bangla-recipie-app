import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import Landing from "./components/layouts/Landing";
import Recipes from "./components/recipe/Recipes";
import RecipeDetail from "./components/recipe/RecipeDetail";
import RecipeCreate from "./components/recipe/RecipeCreate";
import RecipeEdit from "./components/recipe/RecipeEdit";
import WithPrivateRoute from "./utils/WithPrivateRoute";
import ScrollToTop from "react-scroll-to-top";
import Profile from "./components/accounts/Profile";
import MyRecipes from "./components/recipe/MyRecipes";
import SavedRecipes from "./components/recipe/SavedRecipes";


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/about" element={<Landing />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/" element={<Recipes />} />
        <Route
          exact
          path="/recipe/:id"
          element={
            <WithPrivateRoute>
              <RecipeDetail />
            </WithPrivateRoute>
          }
        />
        <Route
          exact
          path="/recipe/create"
          element={
            <WithPrivateRoute>
              <RecipeCreate />
            </WithPrivateRoute>
          }
        />
        <Route
          exact
          path="/recipe/:id/edit"
          element={
            <WithPrivateRoute>
              <RecipeEdit />
            </WithPrivateRoute>
          }
        />

        <Route
          exact
          path="/profile"
          element={
            <WithPrivateRoute>
              <Profile />
            </WithPrivateRoute>
          }
        />
        <Route
          exact
          path="/myRecipes"
          element={
            <WithPrivateRoute>
              <MyRecipes />
            </WithPrivateRoute>
          }
        />
        <Route
          exact
          path="/savedRecipes"
          element={
            <WithPrivateRoute>
              <SavedRecipes />
            </WithPrivateRoute>
          }
        />
        <Route path="*" element={
          < >
            <div className="min-h-screen flex justify-center items-center">
              <p className="text-3xl text-center font-bangla text-black-900">
                দুঃখিত, কোন পেজ পাওয়া যায়নি :(
              </p>
            </div>
          </>
        } />
      </Routes>
      <ScrollToTop
        width="40"

        smooth />
    </Router>
  );
}
