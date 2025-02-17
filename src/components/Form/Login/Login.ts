export const loginForm = async (formData: object) => {
  const settings = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const fetchResponse = await fetch(`http://localhost:3000/users`, settings);
    const data = await fetchResponse.json();
    console.log("on success", data);
    const filter = data.filter(
      (e) => e.email === formData.email && e.password === formData.password
    );

    console.log("filter", filter);

    return filter;
  } catch (e) {
    return e;
  }
};
