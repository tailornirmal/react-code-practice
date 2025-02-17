/*
    Validate Input
    Post data to DB.JSON
    Show Successfull alert Message
    Navigate User to Login Screen
    Write Test Coverage using Jest
    Optimize Code
*/

import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import Alert from "../../Reusable/Alert";
import {
  User,
  validateField,
  userInitialObject,
  errorInitialObject,
  submitForm,
} from "./Actions";
import "./Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState<User>(userInitialObject);
  const [errors, setErrors] = useState<User>(errorInitialObject);
  const [alert, setAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Save the base64 string to the formData
        setFormData({
          ...formData,
          [name]: base64String,
        });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });

    setErrors({ ...errors, [name]: validateField(name, value, formData) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const firstnameerror = validateField(
      "firstname",
      formData.firstname,
      formData
    );
    const lastnameerror = validateField(
      "lastname",
      formData.lastname,
      formData
    );
    const emailError = validateField("email", formData.email, formData);
    const passwordError = validateField(
      "password",
      formData.password,
      formData
    );
    const confirmPasswordError = validateField(
      "confirmPassword",
      formData.confirmPassword,
      formData
    );

    const contactError = validateField("contact", formData.contact, formData);
    if (
      firstnameerror ||
      lastnameerror ||
      emailError ||
      passwordError ||
      confirmPasswordError ||
      contactError
    ) {
      setErrors({
        firstname: firstnameerror,
        lastname: lastnameerror,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
        contact: contactError,
      });
    } else {
      console.log("no error exists", formData);
      const formSubmitState = submitForm(formData);
      formSubmitState.then(() => setAlert(true));
    }
  };

  console.log("errors", errors);

  return (
    <Fragment>
      <form className="max-w-max mx-auto mt-20 h-screen">
        {alert && (
          <Alert
            title="Congratulation !! Your account created successfully."
            description="You can login now."
          />
        )}
        <h1 className="register-heading-title">Create Account</h1>
        <hr className="mt-2 mb-10" />
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              onChange={handleChange}
            />

            <label
              htmlFor="firstname"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
            {errors && (
              <span className="text-xs opacity-75 text-red-700">
                {errors.firstname}
              </span>
            )}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              onChange={handleChange}
            />
            <label
              htmlFor="lastname"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
            {errors && (
              <span className="text-xs opacity-75 text-red-700">
                {errors.lastname}
              </span>
            )}
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            onChange={handleChange}
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
          {errors && (
            <span className="text-xs opacity-75 text-red-700">
              {errors.email}
            </span>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={handleChange}
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          {errors && (
            <span className="text-xs opacity-75 text-red-700">
              {errors.password}
            </span>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={handleChange}
          />
          <label
            htmlFor="confirmPassword"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm Password
          </label>
          {errors && (
            <span className="text-xs opacity-75 text-red-700">
              {errors.confirmPassword}
            </span>
          )}
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="contact"
              id="contact"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              onChange={handleChange}
            />
            <label
              htmlFor="contact"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
            {errors && (
              <span className="text-xs opacity-75 text-red-700">
                {errors.contact}
              </span>
            )}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="file"
              name="profilePicture"
              id="profilePicture"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleChange}
            />
            <label
              htmlFor="profilePicture"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Profile Picture
            </label>
            {errors && (
              <span className="text-xs opacity-75 text-red-700">
                {errors.profilePicture}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default Registration;
