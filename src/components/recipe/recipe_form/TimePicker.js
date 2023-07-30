import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addCooktime } from "../../../redux/actions/forms";

export default function TimePicker({ editMode, recipe }) {
  const dispatch = useDispatch();

  let defaultCookTime;

  if (editMode) {
    defaultCookTime = recipe[0].cook_time.split(":");
  }

  const [hours, setHours] = useState(editMode ? defaultCookTime[0] : "0");
  const [minutes, setMinutes] = useState(editMode ? defaultCookTime[1] : "00");
  const [seconds, setSeconds] = useState(editMode ? defaultCookTime[2] : "00");

  useEffect(() => {
    const cook_time = `${hours}:${minutes}:${seconds}`;
    dispatch(addCooktime(cook_time));
  }, [dispatch, hours, minutes, seconds]);

  return (
    <div>
      <h1 className="text-lg leading-6 font-medium text-gray-900">
        প্রস্তুতকরণের সময়
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        রেসিপিটির সময় যোগ করুন
      </p>
      <div class="mt-1 block p-1 w-40 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border border-gray-300 rounded-md">
        <div class="flex">
          <select
            name="hours"
            class="bg-transparent text-xl appearance-none outline-none"
            onChange={(e) => setHours(e.target.value)}
          >
            <option value={hours} selected disabled>
              {hours}
            </option>
            <option value="0">০</option>
            <option value="1">১</option>
            <option value="2">২</option>
            <option value="3">৩</option>
            <option value="4">৪</option>
            <option value="5">৫</option>
            <option value="6">৬</option>
            <option value="7">৭</option>
            <option value="8">৮</option>
            <option value="9">৯</option>
            <option value="10">১০</option>
            <option value="11">১১</option>
            <option value="12">১২</option>
          </select>
          <span class="text-xl mr-3">:</span>
          <select
            name="minutes"
            class="bg-transparent text-xl appearance-none outline-none mr-4"
            onChange={(e) => setMinutes(e.target.value)}
          >
            <option value={minutes} selected disabled>
              {minutes}
            </option>
            <option value="0">০০</option>
            <option value="1">০১</option>
            <option value="2">০২</option>
            <option value="3">০৩</option>
            <option value="4">০৪</option>
            <option value="5">০৫</option>
            <option value="6">০৬</option>
            <option value="7">০৭</option>
            <option value="8">০৮</option>
            <option value="9">০৯</option>
            <option value="10">১০</option>
            <option value="11">১১</option>
            <option value="12">১২</option>
          </select>
          <span class="text-xl mr-3">:</span>
          <select
            name="seconds"
            class="bg-transparent text-xl appearance-none outline-none"
            onChange={(e) => setSeconds(e.target.value)}
          >
            <option value={seconds} selected disabled>
              {seconds}
            </option>
            <option value="0">০০</option>
            <option value="1">০১</option>
            <option value="2">০২</option>
            <option value="3">০৩</option>
            <option value="4">০৪</option>
            <option value="5">০৫</option>
            <option value="6">০৬</option>
            <option value="7">০৭</option>
            <option value="8">০৮</option>
            <option value="9">০৯</option>
            <option value="10">১০</option>
            <option value="11">১১</option>
            <option value="12">১২</option>
          </select>
        </div>
      </div>
    </div>
  );
}
