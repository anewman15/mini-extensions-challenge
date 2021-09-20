const filterString = (ids: string[]) => {
  const string_arr = ids.map(id => `RECORD_ID() = '${id}'`);
  return string_arr.join(', ');
};

export default filterString;