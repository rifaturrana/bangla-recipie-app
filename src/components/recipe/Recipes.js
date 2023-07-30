import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions/recipes";

import RecipeCard from "./RecipeCard";

export default function Recipes() {
  const dispatch = useDispatch();
  const { recipes, is_loading } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  if (!recipes || recipes.length === 0)
    return (
      <div

        className="min-h-screen flex justify-center items-center"
      >
        <p className="text-3xl text-center font-bangla text-black-900">
          দুঃখিত, কোন রেসিপি পাওয়া যায়নি :(
        </p>
      </div>

    );

  return (
    <>
      <div className="min-h-screen "
      // style={{
      //   backgroundImage: `url("https://wallpapercave.com/wp/wp3982966.jpg")`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundAttachment: 'fixed',
      //   opacity: '1',
      // }}

      >
        <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8 px-10 py-10">
          <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
            <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
              <span className="inline-block mb-2 font-bangla">
                রেসিপি সমূহ
              </span>
              <div className="h-1 ml-auto duration-300 origin-left transform bg-teal-600 scale-x-30 group-hover:scale-x-100" />
            </h2>
          </div>
          {/* <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
            "Cooking is not difficult. Everyone has a taste, even if they don’t
            realize it. Even if you’re not a great chef, there’s nothing to stop
            you from understanding the difference between what tastes good and
            what doesn’t."
          </p> */}
        </div>
        <RecipeCard recipes={recipes} quickview={true} />
      </div>
    </>
  );
}
