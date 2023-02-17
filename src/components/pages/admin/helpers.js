const fetchTableData = () => {
  axios.get('/api/posts')
    .then(response => {
      setTableData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

export const sortTableData = (column, sortOrder) => {
  if (sortOrder === 'asc') {
    setTableData([...tableData].sort((a, b) => a[column] > b[column] ? 1 : -1));
    setSortOrder('desc');
  } else {
    setTableData([...tableData].sort((a, b) => a[column] > b[column] ? -1 : 1));
    setSortOrder('asc');
  }
};