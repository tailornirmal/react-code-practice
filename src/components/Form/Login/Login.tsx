/* 

    Validate login fields using HTML validation type
    Check if user exist in DB or not
    If exist allow login and set authentication token

*/

import { useState } from "react";
import { loginForm } from "./LoginActions";
import { Delay } from "../../../Utilities/Delay";

const Login = () => {
  const [login, setLogin] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: Event) => {
    const { name, value } = event.target;

    setLogin({ ...login, [name]: value });
  };

  const handleLogin = () => {
    if (!login.email && !login.password) {
      return false;
    }
    console.log("login", login);

    Delay({}, 1000);

    const loginStatus = loginForm(login);

    loginStatus.then((e) => console.log("E", e));

    console.log("loginstatus", loginStatus);
  };

  const handleLoginWithDelay = () => {
    const loginStatus = loginForm(login);

    loginStatus.then((e) => console.log("E", e));

    console.log("loginstatus", loginStatus);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
