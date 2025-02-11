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
  console.log("Action", action);

  if (["city", "state", "country"].includes(action.field)) {
    return {
      ...state,
      address: { ...state.address, [action.field]: action.payload },
    };
  }

  return { ...state, [action.field]: action.payload };

  //   switch (action.type) {
  //     case "add_name":
  //       return { ...state, name: action.payload };
  //     case "add_age":
  //       return { ...state, age: action.payload };
  //     case "add_city":
  //       return { ...state, address: { ...state.address, city: action.payload } };
  //     case "add_state":
  //       return { ...state, address: { ...state.address, state: action.payload } };
  //     case "add_country":
  //       return {
  //         ...state,
  //         address: { ...state.address, country: action.payload },
  //       };
  //     case "add_phone":
  //       return {
  //         ...state,
  //         phone: action.payload,
  //       };
  //   }
}

/*
    This can be optimized to move out Reducer Hook as Custom Hook but keeping this code here
    to understand implementation of useReducer Hook.
*/
export const UseReducerHook = () => {
  const [state, dispatch] = useReducer(UserReducer, UserProps);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        dispatch({
          type: "add_name",
          field: name,
          payload: value,
        });
        break;
      case "age":
        dispatch({
          type: "add_age",
          field: name,
          payload: value,
        });
        break;
      case "city":
        dispatch({
          type: "add_city",
          field: name,
          payload: value,
        });
        break;
      case "state":
        dispatch({
          type: "add_state",
          field: name,
          payload: value,
        });
        break;
      case "country":
        dispatch({
          type: "add_country",
          field: name,
          payload: value,
        });
        break;
      case "phone":
        dispatch({
          type: "add_phone",
          field: name,
          payload: value,
        });
        break;
    }
  };

  const { name, age, address, phone } = state;

  return (
    <form>
      <div className="container flex-column">
        <h3 className="text-lg">User Form</h3>
        <div>
          <Input
            title={"Enter Name"}
            type="text"
            name="name"
            value={name}
            placeholder="Enter Name"
            onChange={handleChange}
            aria-describedby="name"
            required
          />
        </div>
        <div>
          <Input
            title={"Enter Age"}
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
          <Input
            title={"Enter City"}
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
          <Input
            title={"Enter State"}
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
          <Input
            title={"Enter Country"}
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
          <Input
            title={"Enter Phone"}
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
        <div>{JSON.stringify(state)}</div>
      </div>
      <input type="submit" value={"Submit"} />
      <input type="reset" value={"reset"} />
    </form>
  );
};
