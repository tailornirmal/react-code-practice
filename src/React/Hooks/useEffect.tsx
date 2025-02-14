/*
  1. Data Fetching with Try Catch Finally, Loading and Error Flag
  2. Custom Hook
  3. Adding Timeout and removing timeout in useEffect
  4. 
*/

import { useEffect, useState } from "react";
import { ToDoSkeleton } from "../../Skeleton";
import { Delay } from "../../Utilities/Delay";

export const UseEffectHook = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const [id, setId] = useState(1);

  useEffect(() => {
    setloading(true);
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/todos/${id}`);
        if (!response.ok) {
          setError("Error in fetching data");
          throw new Error("Error in fetching data");
        }

        const jsonResponse = await response.json();
        if (!jsonResponse) return;
        setData(jsonResponse);
      } catch (e) {
        setError(e);
      } finally {
        setloading(false);
      }
    };
    setTimeout(3000);
    fetchUserData();
  }, [id]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const id = document.getElementsByTagName("h1");
      console.log("id", id[0]);
      id[0].innerHTML = "<em>Fetch data as per user ID</em>";
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  console.log("currentID", id);
  console.log("UserData", data);
  console.log("Error", error);

  // if (loading) {
  //   return <p>Loading..</p>;
  // }

  if (error) {
    return <p>Error in fetching</p>;
  }

  return (
    <div>
      <h1 className="title">Fetch Data as per User ID </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Enter User ID: </label>
        <br />
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </form>
      {loading ? ToDoSkeleton() : <span>{data.todo}</span>}
      {/* <p>{ToDoSkeleton()}</p> */}
    </div>
  );
};
