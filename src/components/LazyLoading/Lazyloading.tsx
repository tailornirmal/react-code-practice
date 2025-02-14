import { useEffect, useState } from "react";
import { mockApiResponse } from "./data";
import { Sort } from "../../Utilities/Sort";
import "./lazyloading.css";

const Lazyloading = () => {
  const [roles, setRoles] = useState({});
  const [page, setPage] = useState(1);
  const [sortOrder, setSortBy] = useState("");

  useEffect(() => {
    const setData = () => {
      const sortedData = Sort(
        mockApiResponse.data.roles.slice(0, page * 4),
        sortOrder
      );
      setRoles(sortedData);
    };
    setData();
  }, [page, sortOrder]);

  const renderRoles = () => {
    let rolesData = [];
    if (roles.length) {
      rolesData = roles.map((e) => (
        <div key={e.id}>
          <span>{e.firstname}</span>
          <span>{e.lastname}</span>
          <span>{e.email}</span>
          <span>{e.role}</span>
          <span
            className={`${
              e.status === "Active" ? "active-role" : "nonactive-role"
            }`}
          >
            {e.status}
          </span>
        </div>
      ));
    } else {
      rolesData = "";
    }
    return <div className="roleslist">{rolesData}</div>;
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="lazyload">
      <h1>Roles</h1>
      <div>
        <label>Sort By</label>
        <select value={sortOrder} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Select</option>
          <option value="firstname">firstname</option>
          <option value="lastname">lastname</option>
          <option value="role">role</option>
          <option value="status">status</option>
        </select>
      </div>
      <div>{renderRoles()}</div>
      <div>
        <button
          type="button"
          disabled={roles.length > 10}
          onClick={handleLoadMore}
        >
          {roles.length > 10 ? "No more data available" : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default Lazyloading;
