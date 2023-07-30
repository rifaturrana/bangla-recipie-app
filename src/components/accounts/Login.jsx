import { LockClosedIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth";

const Login=()=> {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: email,
        password: password,
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
              লগইন করুন
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only ">
                  ই-মেইল
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 mb-5 custom-placeholder-font focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="ই-মেইল"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 custom-placeholder-font focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="পাসওয়ার্ড"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-teal-600 hover:text-teal-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bangla rounded-md text-white bg-teal-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-teal-500 group-hover:text-teal-400"
                    aria-hidden="true"
                  />
                </span>
                লগইন করুন
              </button>
            </div>
            <div className="text-sm">
              <Link
                to="/register"
                className="font-bangla text-black hover:text-teal-500"
              >
                নতুন একাউন্ট খুলুন
              </Link>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
}

export default Login;