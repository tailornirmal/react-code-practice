import { useState } from "react";
import JsonData from "./data.json";
import todoTasks from "./object";

function getInitialData() {
  return {
    users: JsonData,
  };
}

export const UseStateHook = () => {
  const [data, setData] = useState(getInitialData);
  //   const [data, setData] = useState(() => {
  //     return getInitialData();
  //   });
  //   const [data, setData] = useState(() => {
  //     return { users: JsonData };
  //   });
  //   const [data, setData] = useState(getInitialData());
  const [todo] = useState(todoTasks);

  const { users } = data;
  const { title, count, values } = todo;

  const renderJsx = users.map((e) => {
    return <div key={e.id}>{e.name}</div>;
  });

  const addNew = () => {
    return {
      id: users.length + 1,
      address: "",
      age: "",
      email: "",
      gender: "",
      name: "",
    };
  };

  const handleAddNew = () => {
    setData({
      ...data,
      users: [...users, addNew()],
    });
  };

  return (
    <div>
      Users
      {renderJsx}
      <div>
        <p>{title}</p>
        <p>{count}</p>
        {values.length > 0 &&
          values.map((e) => {
            return <div key={e.id}>{e.task}</div>;
          })}
      </div>
      <button onClick={handleAddNew}>Add New</button>
    </div>
  );
};
