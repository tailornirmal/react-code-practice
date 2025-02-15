export const userInitialObject = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  contact: "",
};

export const errorInitialObject = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  contact: "",
};

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  contact: string;
}

export const validateField = (
  name: string,
  value: string,
  formData: object
): string => {
  console.log("validate", name, value);
  switch (name) {
    case "firstname":
      if (!value) return "first name is required.";
      if (value.length < 4)
        return "first name must be at least 4 charater long";
      if (!/^[a-zA-Z0-9]+$/.test(value)) return "only alphanumeric allowed";
      break;
    case "lastname":
      if (!value) return "last name is required.";
      if (value.length < 4) return "last name must be at least 4 charater long";
      if (!/^[a-zA-Z0-9]+$/.test(value)) return "only alphanumeric allowed";
      break;
    case "email":
      if (!value) return "email is required.";
      if (value.length < 4) return "email must be at least 4 charater long";
      if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value.toLowerCase()
        )
      )
        return "enter valid email";
      break;
    case "password":
      if (!value) return "password is required.";
      if (value.length < 4) return "password must be at least 4 charater long";
      break;
    case "confirmPassword":
      if (!value) return "Enter password";
      if (value.length < 4)
        return "repeat password must be at least 4 charater long";
      if (formData.password !== value) return "password must match";
      break;
    case "contact":
      if (!value) return "Enter contact number";
      if (value.length < 10) return "Contact number should be 10 digig long";
      if (!/^\d{10}$/.test(value))
        return "Contact number must be 10 digit numeric values.";
      break;
    default:
      return "";
  }
  return "";
};

export const submitForm = async (formData: object) => {
  const location = window.location.hostname;
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  try {
    const fetchResponse = await fetch(`http://localhost:3000/users`, settings);
    const data = await fetchResponse.json();
    console.log("on success", data);
  } catch (e) {
    return e;
  }
};
