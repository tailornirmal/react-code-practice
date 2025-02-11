export const Sort = (data, sortBy) => {
  console.log("toSrt", data);
  console.log("sortBy", sortBy);

  const toSort = [...data];

  toSort.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  });

  return toSort;
};
