import { useReducer } from "react";
import { Input } from "../../components/Reusable/Input";

let UserProps = {
  name: "",
  age: "",
  address: {
    city: "",
    state: "",
    country: "",
  },
  phone: "",
};

function UserReducer(state, action) {
  switch (action.type) {
    case "add_name":
      return { ...state, name: action.payload };
    case "add_age":
      return { ...state, age: action.payload };
    case "add_city":
      return { ...state, address: { ...state.address, city: action.payload } };
    case "add_state":
      return { ...state, address: { ...state.address, state: action.payload } };
    case "add_country":
      return {
        ...state,
        address: { ...state.address, country: action.payload },
      };
    case "add_phone":
      return {
        ...state,
        phone: action.payload,
      };
  }
}

export const UseReducerHook = () => {
  const [state, dispatch] = useReducer(UserReducer, UserProps);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("name", name);
    console.log("value", value);

    switch (name) {
      case "name":
        dispatch({
          type: "add_name",
          payload: value,
        });
        break;
      case "age":
        dispatch({
          type: "add_age",
          payload: value,
        });
        break;
      case "city":
        dispatch({
          type: "add_city",
          payload: value,
        });
        break;
      case "state":
        dispatch({
          type: "add_state",
          payload: value,
        });
        break;
      case "country":
        dispatch({
          type: "add_country",
          payload: value,
        });
        break;
      case "phone":
        dispatch({
          type: "add_phone",
          payload: value,
        });
        break;
    }
  };

  console.log("state", state);
  console.log("dispatch", dispatch);

  const { name, age, address, phone } = state;

  return (
    <div className="container flex-column">
      <h3 className="text-lg">User Form</h3>
      <div>
        <Input
          title={"Enter Name"}
          style={{ border: "1px solid grey" }}
          name="name"
          value={name}
          placeholder="Enter Name"
          onChange={handleChange}
          aria-describedby="name"
          required
        />
      </div>
      <div>
        <label htmlFor="age">Enter Age</label>
        <br />
        <input
          type="number"
          name="age"
          value={age}
          aria-describedby="Age"
          placeholder="Enter Age"
          max={100}
          min={10}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Enter City</label>
        <br />
        <input
          type="text"
          name="city"
          value={address.city}
          aria-describedby="City"
          placeholder="Enter City"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Enter State</label>
        <br />
        <input
          type="text"
          name="state"
          value={address.state}
          aria-describedby="State"
          placeholder="Enter State"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Enter Country</label>
        <br />
        <input
          type="text"
          name="country"
          value={address.country}
          aria-describedby="Country"
          placeholder="Enter Country"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Enter Phone</label>
        <br />
        <input
          type="tel"
          name="phone"
          value={phone}
          aria-describedby="Phone"
          placeholder="Enter Phone"
          onChange={handleChange}
          pattern="[0-9]{10}"
          required
        />
      </div>
    </div>
  );
};
