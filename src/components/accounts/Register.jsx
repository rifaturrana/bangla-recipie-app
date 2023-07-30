import { LockClosedIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/auth";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })
    );
  };

  return (
    <>
      <div className="flex justify-center  px-4 sm:px-6 lg:px-8 min-h-screen flex justify-center bg-gray-100"
      >
        <div className="max-w-md w-full mt-40"
        >
          <div className="bg-blue rounded-md shadow-lg p-6">
            <div className="text-center">
              <h2 className="text-3xl font-bangla text-white-50">
                রেজিস্ট্রেশন করুন
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="username" className="sr-only">
                    ইউজারনেম
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm custom-placeholder-font"
                    placeholder="ইউজারনেম"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    ইমেইল
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 mt-5 custom-placeholder-font focus:border-teal-500 focus:z-10 sm:text-sm"
                    placeholder="ইমেইল"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    পাসওয়ার্ড
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md custom-placeholder-font focus:outline-none focus:ring-teal-500 mt-5 focus:border-teal-500 focus:z-10 sm:text-sm"
                    placeholder="পাসওয়ার্ড"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    পাসওয়ার্ড নিশ্চিত করুন
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 mt-5 custom-placeholder-font focus:border-teal-500 focus:z-10 sm:text-sm"
                    placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bangla rounded-md text-white bg-blue-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-teal-500 group-hover:text-teal-400"
                      aria-hidden="true"
                    />
                  </span>
                  রেজিস্ট্রেশন করুন
                </button>
              </div>
              <div className="text-sm">
                <Link
                  to="/login"
                  className="font-bangla text-white-600 hover:text-black-500"
                >
                  আপনি কি ইতিমধ্যে রেজিস্ট্রেশন করেছেন?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
